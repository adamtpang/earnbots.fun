import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = await readFile(new URL("../public/brand-mark.svg", import.meta.url));
const sizes = [16, 32, 48, 64];
const frames = await Promise.all(sizes.map(size => sharp(source).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
frames.forEach((frame, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(frame.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(new URL("../src/app/favicon.ico", import.meta.url), Buffer.concat([directory, ...frames]));
await sharp(source).resize(180, 180).png().toFile(fileURLToPath(new URL("../src/app/apple-icon.png", import.meta.url)));
console.log("Generated favicon.ico (16, 32, 48, 64px) and apple-icon.png (180px).");
