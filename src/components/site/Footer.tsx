import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-display text-lg font-semibold">
            GrowthFlex <span className="text-primary">Agency</span>
          </span>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Marketing consultants for growing Indian brands. We generate leads, retain
            customers and build websites that convert.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            20+ clients served across India.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/services", label: "Services" },
              { to: "/work", label: "Our Work" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" /> {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Instagram className="size-4 shrink-0" /> @growthflex.agency
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> India — remote first
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © 2025 GrowthFlex Marketing | Digital Agency. All rights
        reserved.
      </div>
    </footer>
  );
}
