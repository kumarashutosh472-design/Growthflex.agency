import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Globe,
  MessageCircle,
  Repeat,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, SERVICES, STATS, WORK } from "@/lib/site-data";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthFlex Agency — Marketing, Leads & Websites in India" },
      {
        name: "description",
        content:
          "GrowthFlex Agency is a digital marketing agency trusted by 200+ clients across India for Meta & Google Ads, lead generation, retention and website development.",
      },
      { property: "og:title", content: "GrowthFlex Agency — Helping Businesses Grow" },
      {
        property: "og:description",
        content:
          "Meta & Google Ads, lead generation, branding, SEO and websites. 200+ clients across India.",
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Target,
    title: "Marketing consulting",
    text: "A senior strategist owns your growth plan, channel mix and monthly targets.",
  },
  {
    icon: BarChart3,
    title: "Lead generation",
    text: "Paid and organic funnels that put qualified enquiries in front of your sales team.",
  },
  {
    icon: Repeat,
    title: "Customer retention",
    text: "Lifecycle campaigns that bring buyers back and lift lifetime value.",
  },
  {
    icon: Globe,
    title: "Website development",
    text: "Fast, SEO-ready websites and apps engineered to convert your traffic.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(55% 50% at 14% 12%, oklch(0.82 0.16 84 / 0.5), transparent 66%), radial-gradient(45% 45% at 90% 4%, oklch(0.9 0.09 90 / 0.32), transparent 68%), radial-gradient(65% 55% at 55% 112%, oklch(0.75 0.16 70 / 0.4), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, oklch(0.16 0.008 80 / 0.35), oklch(0.16 0.008 80 / 0) 45%, var(--background))",
          }}
        />



        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 md:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            200+ clients served all over India
          </span>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            We help businesses <span className="text-gradient-gold">grow</span> — with
            marketing that pays for itself.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            GrowthFlex Agency runs your Meta &amp; Google Ads, builds your lead engine,
            retains your customers and develops the website behind it all.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Get a free audit <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <Link to="/work">See our work</Link>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface px-5 py-6">
                <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-lines border-y border-border/70">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-4xl">
            What we actually do for you
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Four connected engines. One accountable team.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="surface-panel rounded-2xl p-7">
                <p.icon className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Services built for growth
          </h2>
          <Link
            to="/services"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            All services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              hash={s.slug}
              className="surface-panel group rounded-2xl p-6 transition-colors hover:border-primary/50"
            >
              <h3 className="text-base font-semibold group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-primary">
                Learn more <ArrowRight className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Brands we&apos;ve grown
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WORK.map((w) => (
              <a
                key={w.name}
                href={w.url}
                target="_blank"
                rel="noreferrer noopener"
                className="surface-panel group flex flex-col rounded-2xl p-6 transition-colors hover:border-primary/50"
              >
                <span className="text-xs uppercase tracking-wider text-primary">
                  {w.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{w.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{w.result}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary group-hover:underline">
                  {w.cta} <ArrowUpRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Why teams stay with GrowthFlex
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Senior strategist on every account — no juniors learning on your budget",
                "Transparent reporting on cost per lead and revenue, weekly",
                "In-house design, ads, content and development under one roof",
                "Flexible retainers built for Indian SMBs and D2C brands",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel flex flex-col justify-center rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold">
              DM &quot;GROWTH&quot; for a free audit
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We&apos;ll review your ads, website and funnel, then send a plain-English
              plan of what to fix first. No cost, no obligation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <Link to="/contact">Request audit</Link>
              </Button>
              <Button asChild variant="goldOutline">
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer noopener">
                  <MessageCircle /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
