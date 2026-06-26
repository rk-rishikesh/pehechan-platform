import Link from "next/link";

import { PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, pricingPlans } from "@/lib/influencely";

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple Starting Points for Pehechan-Led Growth"
        copy="Use these as starting points. Every project can be scoped around strategy depth, content volume, branding, reporting, and timeline."
        image={assetUrl("Galaxy-Background.jpg")}
      />

      <section className="section">
        <div className="container stack">
          <SectionHeading
            label="Plans"
            title="Choose a Starting Point"
            copy="Pricing stays transparent, but the final scope follows the identity and growth work your business actually needs."
          />
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <article
                className={`pricing-card${plan.highlighted ? " pricing-card-highlight" : ""}`}
                key={plan.name}
              >
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <p>{plan.summary}</p>
                <ul className="check-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" href="/contact">
                  Get Started
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
