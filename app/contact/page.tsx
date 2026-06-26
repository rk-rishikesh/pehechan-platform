import Link from "next/link";

import { PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl } from "@/lib/influencely";

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Tell Us What You Want to Build"
        copy="Share your business goal, brand problem, campaign brief, or growth challenge. We will route it to the right next step."
        image={assetUrl("joyful-team-celebrating-success-in-office-2024-12-04-21-58-05-utc.jpg")}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <SectionHeading
              label="Start Here"
              title="Send the Brief"
              copy="A short note is enough. Include your goal, timeline, audience, and what you want your business to be known for."
            />
            <div className="contact-details">
              <p>
                <strong>Phone</strong>
                <span>+012 345 6789</span>
              </p>
              <p>
                <strong>Email</strong>
                <span>hello@pehechan.in</span>
              </p>
              <p>
                <strong>Office</strong>
                <span>219 City Star, Someplace, New York, 619027</span>
              </p>
            </div>
          </div>

          <form className="contact-form">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              I am interested in
              <select name="interest" defaultValue="brand">
                <option value="brand">Branding</option>
                <option value="strategy">Business consulting</option>
                <option value="social">Social media marketing</option>
                <option value="digital">Digital marketing</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us a little about the project" />
            </label>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
              <Link className="link-arrow" href="/pricing">
                <span>View Pricing</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
