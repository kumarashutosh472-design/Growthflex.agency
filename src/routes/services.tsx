import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ads, Leads, Retention & Websites | GrowthFlex" },
      {
        name: "description",
        content:
          "Meta & Google Ads, lead generation, customer retention, branding, SEO and website development for businesses across India.",
      },
      { property: "og:title", content: "GrowthFlex Agency Services" },
      {
        property: "og:description",
        content:
          "Performance ads, lead engines, retention journeys and conversion-first websites.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold md:text-5xl">Our services</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Everything a growing business needs to attract, convert and keep customers —
        delivered by one accountable team.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className="surface-panel scroll-mt-24 rounded-2xl p-7"
          >
            <h2 className="font-display text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="surface-panel mt-14 flex flex-wrap items-center justify-between gap-6 rounded-3xl p-8">
        <div>
          <h2 className="font-display text-2xl font-bold">Not sure where to start?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get a free audit and we&apos;ll tell you which service moves the needle
            first.
          </p>
        </div>
        <Button asChild variant="gold" size="lg">
          <Link to="/contact">Book a free audit</Link>
        </Button>
      </div>
    </div>
  );
}
