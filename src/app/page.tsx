import Link from "next/link";
import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CheckCheck, CircleDollarSign, Search, Workflow } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { ResearchCases } from "@/components/research-cases";
import { researchDate } from "@/lib/agent-cases";
import "./earnbots.css";

export const metadata: Metadata = { alternates: { canonical: "https://earnbots.fun/" } };

const steps = [
  { number: "01", title: "Find the buyer", text: "Start with a problem someone already pays to solve. Draft a specific offer.", icon: Search },
  { number: "02", title: "Secure the work", text: "Agree the scope, acceptance criteria and payment terms before execution.", icon: Check },
  { number: "03", title: "Build and verify", text: "Let agents produce the work. Check it against the buyer’s actual requirements.", icon: CheckCheck },
  { number: "04", title: "Learn from cash", text: "Record collected revenue, costs and owner time. Reuse what earns its keep.", icon: CircleDollarSign },
];

export default function Home() {
  return (
    <div className="earn-site">
      <a className="earn-skip" href="#main">Skip to content</a>
      <header className="earn-header">
        <nav className="earn-nav earn-container" aria-label="Main navigation">
          <Link className="earn-brand" href="/" aria-label="Earnbots home"><BrandMark /><span>earnbots<span className="brand-domain">.fun</span></span></Link>
          <div className="earn-nav-links"><a href="#research">The research</a><a href="#playbook">The playbook</a><Link href="/build-log">Build log<ArrowUpRight size={13} aria-hidden="true" /></Link></div>
        </nav>
      </header>
      <main id="main">
        <section className="earn-hero earn-container">
          <div className="hero-copy">
            <p className="earn-eyebrow"><span className="status-dot" />An experiment in agent-powered income</p>
            <h1>Useful work.<br /><span>Real earnings.</span></h1>
            <p className="hero-description">Study the agents that earn. Understand the business behind them. Build a small, repeatable way to get paid.</p>
            <div className="earn-actions"><a className="earn-button primary" href="#research">Explore the evidence<ArrowDown size={16} aria-hidden="true" /></a><a className="earn-text-link" href="#playbook">See our first experiment<ArrowRight size={16} aria-hidden="true" /></a></div>
            <p className="hero-footnote">Our starting point: no verified Earnbots earnings yet.</p>
          </div>
          <div className="loop-panel" aria-label="Our proposed earning loop, not a live execution status">
            <div className="loop-heading"><span className="mini-brand"><BrandMark />The earning loop</span><span className="plan-tag">The model</span></div>
            <div className="loop-title">A business before a swarm.</div>
            <p className="loop-description">One buyer. One useful outcome.<br />A result worth repeating.</p>
            <ol className="loop-stages">{[{ icon: Search, title: "Demand", label: "A problem with a buyer" }, { icon: Workflow, title: "Delivery", label: "Agents do the bounded work" }, { icon: CheckCheck, title: "Verification", label: "The result passes a real test" }, { icon: CircleDollarSign, title: "Payment", label: "Cash collected, costs recorded" }].map(({ icon: Icon, title, label }, i) => <li key={title}><span className="loop-icon"><Icon size={18} strokeWidth={1.7} /></span><span><strong>{title}</strong><small>{label}</small></span><span className="loop-number">0{i + 1}</span></li>)}</ol>
            <div className="loop-footer"><span className="status-dot" />Repeat what works. Improve what doesn’t.</div>
          </div>
        </section>
        <div className="earn-container"><div className="research-strip"><span>Independent build log</span><span>Sources over screenshots</span><span>Profit over activity</span></div></div>
        <section className="earn-section earn-container" id="research" aria-labelledby="research-title">
          <div className="section-intro"><div><p className="earn-eyebrow">01 / The field notes</p><h2 id="research-title">The agents. The business.<br /><span>The evidence.</span></h2></div><p>Four instructive cases, with different levels of proof. Revenue, reach and reputation tell different stories.</p></div>
          <ResearchCases />
          <div className="research-note"><span>Research snapshot · {researchDate}</span><p>Reported revenue is not audited net profit. These examples do not establish a fully hands-off income stream.</p></div>
        </section>
        <section className="pattern-section" aria-labelledby="pattern-title"><div className="earn-container pattern-layout"><div><p className="earn-eyebrow">02 / The throughline</p><h2 id="pattern-title">Copy the earning loop.<br /><span>Earn your own result.</span></h2></div><div className="pattern-copy"><p>Our reading of the evidence: useful agents sit inside a working business. They have access to demand, a specific job, a way to check quality and feedback that changes the next attempt.</p><p>The transferable advantage is a repeatable process. Agent count, viral views and a busy dashboard are secondary to a buyer paying for a useful outcome.</p><a className="earn-text-link" href="/agent-income-study.md">Read the sourced study<ArrowRight size={16} aria-hidden="true" /></a></div></div></section>
        <section className="earn-section earn-container" id="playbook" aria-labelledby="playbook-title">
          <div className="section-intro"><div><p className="earn-eyebrow">03 / Our first experiment</p><h2 id="playbook-title">One paid workflow.<br /><span>Then make it repeatable.</span></h2></div><p>Start with the full-stack and AI integration skills we already have. Treat the first offer as a test.</p></div>
          <div className="experiment-panel"><div><span className="experiment-label">Proposed offer</span><h3>Add one AI workflow to an existing Next.js app.</h3><p>One provider. One user flow. Validation, failure states, meaningful tests and a documented handoff.</p></div><div className="experiment-price"><strong>$500<span> / project</span></strong><p>Price hypothesis, not booked revenue.<br />Five business days after setup is ready.</p><a href="/first-experiment.md" className="earn-button secondary">Read the experiment brief<ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
          <div className="playbook-grid">{steps.map(({ number, title, text, icon: Icon }) => <article key={number}><div><span>{number}</span><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="success-note"><strong>The first milestone is a collected payment.</strong><p>Track fees, model costs, revisions and owner time before calling the work profitable. Adam handles client communication and commitments.</p></div>
        </section>
        <section className="earn-container closing-note"><BrandMark /><h2>Small proof.<br />Then a bigger system.</h2><p>Our market research collector is scheduled hourly. No wallet, paid model calls or verified trading profit.</p><a className="earn-text-link" href="/survival-agent-study.md">The market data experiment<ArrowRight size={16} aria-hidden="true" /></a><p><a className="earn-text-link" href="https://github.com/adamtpang/earnbots.fun/actions/workflows/market-watch.yml" target="_blank" rel="noopener noreferrer">Inspect research runs<ArrowUpRight size={16} aria-hidden="true" /></a></p></section>
      </main>
      <footer className="earn-container earn-footer"><span>earnbots.fun <span>· An independent experiment</span></span><div><a href="https://github.com/adamtpang/earnbots.fun" target="_blank" rel="noopener noreferrer">Source<ArrowUpRight size={12} aria-hidden="true" /></a><Link href="/build-log">Build log</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><a href="#main">Back to top ↑</a></div></footer>
    </div>
  );
}
