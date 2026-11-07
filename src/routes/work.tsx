import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STATS, WORK } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Client Projects | GrowthFlex Agency" },
      {
        name: "description",
        content:
          "Websites, apps and growth campaigns we've delivered for clients like Working Panda, Vyam and Sama across India.",
      },
      { property: "og:title", content: "GrowthFlex Agency — Client Work" },
      {
        property: "og:description",
        content: "Selected websites, apps and growth campaigns from 200+ client projects.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="relative overflow-hidden">
      <section className="grid-lines border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 text-center md:pb-20 md:pt-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            <Sparkles className="size-3.5" />
            Selected client work
          </div>
          <h1 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            Trusted by teams that are ready to <span className="text-gradient-gold">grow</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            A selection from 20+ projects delivered across India — websites, apps and the
            campaigns that fill them.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 divide-x divide-border/70 border-y border-border/70 py-6">
            {STATS.slice(0, 3).map((stat) => (
              <div key={stat.label} className="px-3">
                <p className="font-display text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground md:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our partners</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Built to be remembered</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Every engagement starts with a clear goal and ends with something your customers can feel.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {WORK.map((w, index) => (
            <a
              key={w.name}
              href={w.url}
              target="_blank"
              rel="noreferrer noopener"
              className="surface-panel group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-gold)]"
            >
              <div className="absolute right-0 top-0 size-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 font-display text-2xl font-bold text-primary">
                  {w.name.charAt(0)}
                </div>
                <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="relative mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">0{index + 1} / {w.category}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{w.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{w.result}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 border-t border-border/70 pt-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we bring</p>
              <h2 className="mt-3 font-display text-3xl font-bold">One partner. Every growth lever.</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {["Strategy", "Acquisition", "Retention", "Web development"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-2">
                  <Check className="size-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-panel mt-16 flex flex-col items-start justify-between gap-7 rounded-2xl p-7 md:flex-row md:items-center md:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Your turn</p>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Your brand could be next.</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Tell us your goal and we&apos;ll show you exactly how we&apos;d hit it.
            </p>
          </div>
          <Button asChild variant="gold" size="lg" className="shrink-0">
            <Link to="/contact">Start a project <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
