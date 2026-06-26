import Image from "next/image";
import Link from "next/link";

import { TestimonialCard } from "@/components/influencely/cards";
import { LinkArrow, PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, testimonials } from "@/lib/influencely";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="An Identity Agency Built for Recognition"
        copy="Pehechan helps doctors, founders, clinics, and brands become easier to remember, trust, and choose."
        image={assetUrl("banner-overlay.png")}
      />

      <section className="section">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src={assetUrl("portrait-of-a-multi-ethnic-and-young-members-of-a-2024-12-09-02-52-13-utc.jpg")}
              alt="Pehechan agency team"
              width={1200}
              height={800}
            />
          </div>
          <div className="about-copy">
            <SectionHeading
              label="Our Story"
              title="Pioneering Identity and Growth Together"
            />
            <p>
              We started with a simple belief: every good business has something
              worth being known for. Our team turns that belief into strategy,
              content, branding, and digital campaigns that feel clear, human,
              and commercially useful.
            </p>
            <blockquote>
              We do not chase attention for its own sake. We build the
              conditions for businesses to earn recognition repeatedly.
            </blockquote>
            <div className="counter-row">
              <div className="metric-card">
                <strong>12+</strong>
                <span>Years of Experience</span>
              </div>
              <div className="metric-card">
                <strong>98%</strong>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section panel-section">
        <div className="container stack">
          <SectionHeading
            label="How We Work"
            title="Clear Strategy, Strong Fit, Carefully Managed Delivery"
            copy="Every collaboration moves through a simple workflow: understand the audience, choose the right voices, shape the brief, protect the creative, and measure what matters."
          />
          <div className="process-grid">
            {["Discover", "Match", "Create", "Measure"].map((step, index) => (
              <article className="process-card" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>
                  {index === 0
                    ? "We clarify the audience, offer, tone, timing, and business goal."
                    : index === 1
                      ? "We define the position, message, and channels that naturally match the brief."
                      : index === 2
                        ? "We manage the content rhythm while protecting the brand's real voice."
                        : "We turn results into a useful report and a sharper next campaign."}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <SectionHeading
            label="Testimonials"
            title="Trusted by Doctors, Founders, and Marketing Teams"
          />
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
          <div className="center-actions">
            <Link className="btn btn-primary" href="/contact">
              Work With Us
            </Link>
            <LinkArrow href="/services">Explore Services</LinkArrow>
          </div>
        </div>
      </section>
    </>
  );
}
