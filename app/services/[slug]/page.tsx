import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LinkArrow, PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, services } from "@/lib/influencely";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        label="Service Detail"
        title={service.title}
        copy={service.description}
        image={assetUrl(service.image)}
      />

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-media">
            <Image
              src={assetUrl(service.image)}
              alt={service.title}
              width={1200}
              height={800}
            />
          </div>
          <div className="detail-copy">
            <SectionHeading
              label="What Is Included"
              title={`A Practical System for ${service.title}`}
            />
            <p>
              This service is built for teams that want identity, content, and
              growth work to feel considered, organized, and commercially useful
              from the first conversation.
            </p>
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="metric-card detail-metric">
              <strong>{service.metric}</strong>
              <span>Typical outcome focus</span>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Start This Service
              </Link>
              <LinkArrow href="/services">Back to Services</LinkArrow>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
