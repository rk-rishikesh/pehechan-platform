import Link from "next/link";
import type React from "react";

export function SectionHeading({
  label,
  title,
  copy,
  light = false,
}: {
  label: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <p className="eyebrow">
        {"// "}
        {label}
      </p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

export function LinkArrow({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <Link className={`link-arrow${className ? ` ${className}` : ""}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

export function StarRating({ value }: { value: string }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
    </span>
  );
}

export function PageHero({
  label,
  title,
  copy,
  image,
}: {
  label: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section
      className={`inner-hero${image ? " inner-hero-image" : ""}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="container inner-hero-content">
        <p className="eyebrow">
          {"// "}
          {label}
        </p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
