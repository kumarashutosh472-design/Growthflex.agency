import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BUSINESS_CATEGORIES,
  BUSINESS_TYPES,
  CONTACT,
  SERVICES,
} from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GrowthFlex Agency — Free Marketing Audit" },
      {
        name: "description",
        content:
          "Talk to GrowthFlex Agency about ads, lead generation, retention or a new website. Request your free audit today.",
      },
      { property: "og:title", content: "Contact GrowthFlex Agency" },
      {
        property: "og:description",
        content: "Request a free marketing audit for your business in India.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const businessType = String(data.get("businessType") ?? "");
    const category = String(data.get("category") ?? "");
    const message = String(data.get("message") ?? "");

    setSending(true);
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness type: ${businessType}\nCategory: ${category}\nService: ${service}\n\n${message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Free audit request — ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app — we reply within 24 hours.");
    form.reset();
    setSending(false);
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-4xl font-bold md:text-5xl">
        Get your free audit
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tell us about your business and what you want to grow. We&apos;ll reply within 24
        hours with a plain-English plan.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        <form onSubmit={handleSubmit} className="surface-panel rounded-3xl p-7 md:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" name="phone" placeholder="+91" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service needed</Label>
              <select
                id="service"
                name="service"
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                defaultValue={SERVICES[0].title}
              >
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessType">Business type</Label>
              <select
                id="businessType"
                name="businessType"
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                defaultValue={BUSINESS_TYPES[0]}
              >
                {BUSINESS_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Business category</Label>
              <select
                id="category"
                name="category"
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
                defaultValue={BUSINESS_CATEGORIES[0]}
              >
                {BUSINESS_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Label htmlFor="message">What do you want to grow?</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your business, current marketing and goals."
            />
          </div>

          <Button type="submit" variant="gold" size="lg" className="mt-6 w-full" disabled={sending}>
            Request free audit
          </Button>
        </form>

        <div className="space-y-4 md:col-span-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-panel flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-primary/50"
          >
            <MessageCircle className="size-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">WhatsApp</div>
              <div className="text-xs text-muted-foreground">
                Send &quot;GROWTH&quot; for a free audit
              </div>
            </div>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="surface-panel flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-primary/50"
          >
            <Mail className="size-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Email</div>
              <div className="text-xs text-muted-foreground">{CONTACT.email}</div>
            </div>
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="surface-panel flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-primary/50"
          >
            <Phone className="size-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Call</div>
              <div className="text-xs text-muted-foreground">{CONTACT.phone}</div>
            </div>
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-panel flex items-center gap-4 rounded-2xl p-6 transition-colors hover:border-primary/50"
          >
            <Instagram className="size-5 text-primary" />
            <div>
              <div className="text-sm font-semibold">Instagram</div>
              <div className="text-xs text-muted-foreground">@growthflex.agency</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
