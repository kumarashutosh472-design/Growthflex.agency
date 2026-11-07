import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GrowthFlex Agency — Marketing Consultants in India" },
      {
        name: "description",
        content:
          "GrowthFlex Marketing is a digital agency helping Indian businesses grow through consulting, lead generation, retention and web development.",
      },
      { property: "og:title", content: "About GrowthFlex Agency" },
      {
        property: "og:description",
        content: "Marketing consultants helping 200+ businesses across India grow.",
      },
    ],
  }),
  component: AboutPage,
});

const steps = [
  {
    n: "01",
    title: "Audit",
    text: "We review your ads, website, funnel and analytics, then rank the gaps by revenue impact.",
  },
  {
    n: "02",
    title: "Plan",
    text: "You get a 90-day growth plan with channels, budgets, creative direction and targets.",
  },
  {
    n: "03",
    title: "Build",
    text: "We ship the website, landing pages, tracking and campaigns needed to execute it.",
  },
  {
    n: "04",
    title: "Scale",
    text: "Weekly optimisation, retention journeys and transparent reporting on cost per lead.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold md:text-5xl">
        We&apos;re the growth team behind 200+ Indian brands
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        GrowthFlex Marketing is a digital agency built on one idea: marketing should be
        judged on revenue, not reach. We work as marketing consultants for founders and
        marketing heads — generating leads, retaining customers and developing the
        websites that carry the whole thing.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-surface px-5 py-6">
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl font-bold">How we work</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.n} className="surface-panel rounded-2xl p-6">
            <span className="font-display text-sm font-bold text-primary">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="surface-panel mt-14 rounded-3xl p-8">
        <h2 className="font-display text-2xl font-bold">Let&apos;s talk growth</h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground">
          Whether you need a website, more leads or better retention — start with a free
          audit.
        </p>
        <Button asChild variant="gold" size="lg" className="mt-6">
          <Link to="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}
