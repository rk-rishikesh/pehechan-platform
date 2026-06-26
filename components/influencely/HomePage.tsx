import Image from "next/image";
import Link from "next/link";

import { ServiceCard } from "./cards";
import { LinkArrow, SectionHeading } from "./ui";
import { assetUrl, imageStyle, partnerLogos, services } from "@/lib/influencely";

const whyPoints = [
  {
    title: "Strategy Before Everything",
    copy:
      "We start with what your business should be known for, then build content, campaigns, and distribution around that identity.",
  },
  {
    title: "We Speak Your Industry",
    copy:
      "Doctors, clinics, founders, and brands all sell trust differently. Your plan should reflect the way your audience decides.",
  },
  {
    title: "No Packages. No Tickets. Just Real Work.",
    copy:
      "No recycled reels or empty activity charts. We shape the work around the outcome your business actually needs.",
  },
];

const progressStats = [
  ["Campaign Success Rate", "97%"],
  ["Social Media Growth Rate", "92%"],
  ["Campaign Engagement Rate", "95%"],
];

const clients = [
  {
    name: "Dr. Aisha Mehta",
    role: "Dermatologist",
    image: "front-view-of-mature-middle-aged-confident-high-sk-2024-12-13-07-54-41-utc.jpg",
    quote:
      "10,000 followers in 4 months, but more importantly, patients who came in saying they found us online.",
  },
  {
    name: "Kavya Rao",
    role: "D2C Founder",
    image: "close-up-portrait-of-confident-indian-financial-ex-2024-12-10-04-06-45-utc.jpg",
    quote:
      "Pehechan gave the brand a voice that felt specific, not copied from every other launch page.",
  },
  {
    name: "Arjun Malhotra",
    role: "Clinic Entrepreneur",
    image: "portrait-of-attractive-asian-car-designer-in-offic-2023-11-27-05-05-21-utc.jpg",
    quote:
      "The content stopped sounding like marketing noise and started answering the questions clients already had.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="hero-section pehechan-hero">
        <div className="container hero-grid">
          <h1 className="load-left">
            Everyone&apos;s online. <span>But no one remembers everyone.</span>
          </h1>
          <div className="hero-aside load-up">
            <p>
              Pehechan means identity. And that&apos;s exactly what we build, for
              doctors, founders, and brands who are done being forgettable. No
              recycled reels. No empty metrics. Just a strategy that makes your
              business impossible to ignore.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                See How We Work &rarr;
              </Link>
              <LinkArrow href="/talents">Brands We&apos;ve Built</LinkArrow>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-photo load-fade" aria-label="Pehechan strategy team and clients"></div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2 className="scroll-reveal reveal-up">
            Brands that finally have a <span>Pehechan</span> -
          </h2>
          <div className="partner-row" aria-label="Partner logos">
            {partnerLogos.map((logo) => (
              <Image
                key={logo}
                src={assetUrl(logo)}
                alt="Partner logo"
                width={250}
                height={62}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="heading-with-action">
            <SectionHeading
              label="About Us"
              title={"Pehechan isn't just our name. It's what we give your business."}
            />
            <Link className="btn btn-primary" href="/about">
              More About Us
            </Link>
          </div>

          <div className="about-grid">
            <div className="about-image scroll-reveal reveal-left">
              <Image
                src={assetUrl("portrait-of-a-multi-ethnic-and-young-members-of-a-2024-12-09-02-52-13-utc.jpg")}
                alt="Pehechan team planning identity and digital marketing strategy"
                width={1200}
                height={800}
              />
            </div>
            <div className="about-copy scroll-reveal reveal-up">
              <p>
                The word means identity. Recognition. The moment someone sees
                you and knows you.
              </p>
              <p>
                Most agencies chase volume, more posts, more reels, more noise
                that sounds like everyone else. We got bored of that fast.
                Pehechan was built on a different belief: that your business has
                something worth being known for, and our job is to make sure the
                world actually sees it.
              </p>
              <p>
                We work with doctors, clinics, D2C founders, and entrepreneurs
                who want growth that means something, not just a follower count
                that looks good on a screenshot.
              </p>
              <blockquote>
                &quot;We don&apos;t count posts. We count the moments your audience
                stops scrolling and thinks - I need to know more about this
                brand.&quot;
              </blockquote>
              <div className="about-bottom">
                <ul className="check-list">
                  <li>Strategy rooted in your business, not borrowed from someone else&apos;s</li>
                  <li>Content that speaks to your exact audience, patients, clients, or customers</li>
                  <li>Video production that gives your brand a real voice</li>
                  <li>Growth you feel in your business, not just see in your dashboard</li>
                </ul>
                <div className="counter-row">
                  <div className="metric-card">
                    <strong>3+</strong>
                    <span>Years building Pehechan&apos;s</span>
                  </div>
                  <div className="metric-card">
                    <strong>50+</strong>
                    <span>Brands transformed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section panel-section">
        <div className="container stack">
          <SectionHeading
            label="Services"
            title="The work that makes a business impossible to confuse with anyone else"
            copy="Consulting, content, campaigns, and identity systems for doctors, founders, clinics, and brands that need recognition, not random activity."
          />

          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
            <article className="service-cta">
              <span className="circle-icon" aria-hidden="true">
                &rarr;
              </span>
              <h3>Your Pehechan is not a package. It is a position.</h3>
              <p>
                Bring the business goal, the audience you want, or the story
                you have not been able to explain. We will turn it into a system.
              </p>
              <Link className="btn btn-primary" href="/contact">
                Build My Pehechan
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section dark-radial">
        <div className="container stack">
          <SectionHeading
            label="Why Work with Us"
            title="We could show you a trophy shelf. We'd rather show you what we actually believe."
            copy="Recognition is not luck. It is strategy, industry fluency, consistent creative judgment, and the patience to build the right signal."
            light
          />

          <div className="why-grid">
            <div className="why-points">
              {whyPoints.map(({ title, copy }) => (
                <div className="why-point" key={title}>
                  <span aria-hidden="true">&#10003;</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="why-dashboard">
              <div className="counter-row">
                <div className="metric-card">
                  <strong>98%</strong>
                  <span>Satisfaction Rate</span>
                </div>
                <div className="metric-card">
                  <strong>100%</strong>
                  <span>Client Retention Rate</span>
                </div>
              </div>
              {progressStats.map(([label, value]) => (
                <div className="progress-item" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <span className="progress-track">
                    <span style={{ width: value }}></span>
                  </span>
                </div>
              ))}
            </div>

            <a
              className="video-card"
              href="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
              style={imageStyle("group-portrait-of-confident-interracial-entreprene-2024-11-13-22-56-07-utc.jpg")}
            >
              <span className="play-button" aria-hidden="true">
                &#9658;
              </span>
              <span className="sr-only">Play agency video</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <div className="heading-with-action">
            <SectionHeading
              label="Real Pehechan's. Real people."
              title="Meet the doctors, founders, and creators who chose to stop blending in."
            />
            <Link className="btn btn-primary" href="/talents">
              More Clients
            </Link>
          </div>

          <div className="client-grid">
            <article className="talent-join client-join">
              <h3>Your Pehechan is waiting.</h3>
              <p>
                You&apos;ve already done the hard part, you&apos;re good at what
                you do. We make sure the right people find out. Stop being the
                best-kept secret in your industry.
              </p>
              <Link className="btn btn-primary" href="/contact">
                Let&apos;s Build Yours &rarr;
              </Link>
            </article>

            {clients.map((client) => (
              <article
                className="image-card client-card"
                key={client.name}
                style={imageStyle(client.image)}
              >
                <div>
                  <p className="client-role">{client.role}</p>
                  <h3>{client.name}</h3>
                  <p>&quot;{client.quote}&quot;</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
