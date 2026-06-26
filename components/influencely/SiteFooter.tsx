import Link from "next/link";

import { services } from "@/lib/influencely";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-stack">
        <div className="footer-top">
          <Link className="footer-brand brand-wordmark" href="/" aria-label="Pehechan home">
            <span>Pehechan</span>
          </Link>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/talents">Clients</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
        <div className="footer-grid">
          <div>
            <h3>About Us</h3>
            <p>
              Pehechan builds identity, recognition, and growth systems for
              doctors, founders, clinics, and brands done being forgettable.
            </p>
            <div className="social-row">
              <a href="https://www.facebook.com">FB</a>
              <a href="https://www.instagram.com">IG</a>
              <a href="https://www.linkedin.com">IN</a>
              <a href="https://www.youtube.com">YT</a>
            </div>
          </div>
          <div>
            <h3>Our Services</h3>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>+012 345 6789</p>
            <p>hello@pehechan.in</p>
            <p>219 City Star, Someplace, New York, 619027</p>
          </div>
          <form>
            <h3>Newsletter</h3>
            <p>Get identity, content, and digital growth notes in your inbox.</p>
            <div>
              <label className="sr-only" htmlFor="newsletter-email">
                Email
              </label>
              <input id="newsletter-email" type="email" placeholder="Email" />
              <button className="btn btn-primary" type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <p className="copyright">
          Pehechan (c) 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
