import Link from "next/link";

import { PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, faqs } from "@/lib/influencely";

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQs"
        title="Common Questions About Our Agency and Services"
        copy="A quick guide for doctors, founders, clinics, brands, and partners before starting a conversation with Pehechan."
        image={assetUrl("african-american-man-explaining-car-design-idea-to-2023-11-27-05-18-41-utc.jpg")}
      />

      <section className="section panel-section">
        <div className="container stack">
          <SectionHeading
            label="Answers"
            title="Everything Usually Asked First"
            copy="Use these answers as a starting point. The details get clearer once we know your goals, audience, and timing."
          />
          <div className="faq-page-grid">
            {faqs.map((group) => (
              <section className="faq-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="faq-list">
                  {group.items.map((item, index) => (
                    <details key={item.question} open={index === 0}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <div className="center-actions">
            <Link className="btn btn-primary" href="/contact">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
