"use client";
import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { agentCases } from "@/lib/agent-cases";
const filters = ["All agents", "Products", "Distribution", "Verified work", "Operations"] as const;
export function ResearchCases() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All agents");
  const visible = agentCases.filter((item) => filter === "All agents" || item.category === filter);
  return <>
    <div className="case-filters" role="group" aria-label="Filter agent studies">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div>
    <p className="sr-only" role="status">Showing {visible.length} agent {visible.length === 1 ? "study" : "studies"}.</p>
    <div className="case-grid">{visible.map(item => <article className={`agent-study ${item.color}`} key={item.id}>
      <div className="study-top"><span className="agent-avatar" aria-hidden="true">{item.initials}</span><div><h3>{item.name}</h3><p>{item.owner}</p></div><span className="study-category">{item.category}</span></div>
      <h4>{item.headline}</h4><p className="study-mechanism">{item.mechanism}</p>
      <div className="study-result"><strong>{item.result}</strong><span>{item.resultLabel}</span></div><p className="study-lesson">{item.lesson}</p>
      <details className="study-evidence"><summary><span><span className="evidence-dot" />{item.evidence}</span><ChevronDown size={16} /></summary><div><p>{item.finding}</p><p>{item.caveat}</p><ul>{item.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight size={13} aria-hidden="true" /></a></li>)}</ul></div></details>
    </article>)}</div>
  </>;
}
