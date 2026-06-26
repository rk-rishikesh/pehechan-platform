"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { pageLinks, posts, services } from "@/lib/influencely";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const servicesActive = isActive(pathname, "/services");
  const blogActive = isActive(pathname, "/blog");
  const pagesActive = pageLinks.some((item) => isActive(pathname, item.href));

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand brand-wordmark" href="/" aria-label="Pehechan home">
          <span>Pehechan</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link className={isActive(pathname, "/") ? "active" : ""} href="/">
            Home
          </Link>
          <Link className={isActive(pathname, "/about") ? "active" : ""} href="/about">
            About Us
          </Link>
          <div className={`nav-dropdown${servicesActive ? " active" : ""}`}>
            <button
              aria-haspopup="true"
              className="nav-dropdown-trigger"
              type="button"
            >
              Our Services
            </button>
            <div className="nav-dropdown-menu">
              <Link className={pathname === "/services" ? "active" : ""} href="/services">
                Our Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  className={isActive(pathname, `/services/${service.slug}`) ? "active" : ""}
                  href={`/services/${service.slug}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link className={isActive(pathname, "/talents") ? "active" : ""} href="/talents">
            Clients
          </Link>
          <div className={`nav-dropdown${blogActive ? " active" : ""}`}>
            <button
              aria-haspopup="true"
              className="nav-dropdown-trigger"
              type="button"
            >
              Blog
            </button>
            <div className="nav-dropdown-menu">
              <Link className={pathname === "/blog" ? "active" : ""} href="/blog">
                Blog
              </Link>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  className={isActive(pathname, `/blog/${post.slug}`) ? "active" : ""}
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
          <div className={`nav-dropdown${pagesActive ? " active" : ""}`}>
            <button
              aria-haspopup="true"
              className="nav-dropdown-trigger"
              type="button"
            >
              Pages
            </button>
            <div className="nav-dropdown-menu">
              {pageLinks.map((item) => (
                <Link
                  key={item.href}
                  className={isActive(pathname, item.href) ? "active" : ""}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            className={isActive(pathname, "/contact") ? "active" : ""}
            href="/contact"
          >
            Contact Us
          </Link>
        </nav>

        <Link className="btn btn-primary nav-cta" href="/contact">
          Build Yours
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span></span>
            <span></span>
            <span></span>
          </summary>
          <nav aria-label="Mobile navigation">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Clients", href: "/talents" },
              { label: "Blog", href: "/blog" },
              ...pageLinks,
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                className={isActive(pathname, item.href) ? "active" : ""}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn btn-primary" href="/contact">
              Build Yours
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
