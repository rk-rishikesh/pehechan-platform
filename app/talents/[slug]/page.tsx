import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LinkArrow, PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, talents } from "@/lib/influencely";

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.slug }));
}

export default async function TalentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const talent = talents.find((item) => item.slug === slug);

  if (!talent) {
    notFound();
  }

  return (
    <>
      <PageHero
        label={talent.role}
        title={talent.name}
        copy={talent.bio}
        image={assetUrl(talent.image)}
      />

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-media portrait-media">
            <Image
              src={assetUrl(talent.image)}
              alt={talent.name}
              width={800}
              height={1200}
            />
          </div>
          <div className="detail-copy">
            <SectionHeading
              label="Client Story"
              title={`${talent.name} Built a Sharper Pehechan`}
            />
            <p>{talent.bio}</p>
            <div className="metric-card detail-metric">
              <strong>{talent.audience}</strong>
              <span>Outcome signal</span>
            </div>
            <ul className="check-list">
              {talent.channels.map((channel) => (
                <li key={channel}>{channel}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Build Yours
              </Link>
              <LinkArrow href="/talents">Back to Clients</LinkArrow>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
