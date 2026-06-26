import Link from "next/link";

import { ServiceCard } from "@/components/influencely/cards";
import { LinkArrow, PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, services } from "@/lib/influencely";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Identity, Marketing, and Branding Systems"
        copy="Choose a focused service or combine them into a growth system built around recognition, trust, content quality, and commercial clarity."
        image={assetUrl("group-portrait-of-confident-interracial-entreprene-2024-11-13-22-56-07-utc.jpg")}
      />

      <section className="section">
        <div className="container stack">
          <SectionHeading
            label="What We Do"
            title="Services for Doctors, Founders, Clinics, and Brands"
            copy="From first positioning to long-term growth planning, each service is designed to make your business easier to understand, remember, and choose."
          />
          <div className="services-grid route-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-radial">
        <div className="container split-cta">
          <div>
            <p className="eyebrow">{"// "}Campaign Fit</p>
            <h2>Not sure which service you need?</h2>
          </div>
          <p>
            Share your goal and we will recommend the right mix of business
            consulting, social media, digital marketing, branding, and reporting.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/contact">
              Plan a Campaign
            </Link>
            <LinkArrow href="/pricing">View Pricing</LinkArrow>
          </div>
        </div>
      </section>
    </>
  );
}
