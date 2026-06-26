import Link from "next/link";

import { TalentCard } from "@/components/influencely/cards";
import { PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, talents } from "@/lib/influencely";

export default function TalentsPage() {
  return (
    <>
      <PageHero
        label="Clients"
        title="Real Pehechan's. Real People."
        copy="Meet doctors, founders, clinics, and brands who chose to stop blending in and build recognition around what they do best."
        image={assetUrl("joyful-team-celebrating-success-in-office-2024-12-04-21-58-05-utc.jpg")}
      />

      <section className="section">
        <div className="container stack">
          <div className="heading-with-action">
            <SectionHeading
              label="Client Stories"
              title="Businesses That Became Easier to Remember"
              copy="Each profile shows the role, outcome signal, and the kind of identity work behind the growth."
            />
            <Link className="btn btn-primary" href="/contact">
              Build Yours
            </Link>
          </div>
          <div className="talent-grid roster-grid">
            {talents.map((talent) => (
              <TalentCard key={talent.slug} talent={talent} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
