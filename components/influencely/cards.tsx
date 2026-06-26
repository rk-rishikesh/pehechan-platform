import Image from "next/image";
import Link from "next/link";

import { assetUrl, imageStyle } from "@/lib/influencely";
import { LinkArrow, StarRating } from "./ui";

export function ServiceCard({
  service,
  compact = false,
}: {
  service: {
    slug: string;
    title: string;
    image: string;
    description: string;
    tall?: boolean;
  };
  compact?: boolean;
}) {
  return (
    <article
      className={`image-card service-card${service.tall && !compact ? " service-card-tall" : ""}`}
      style={imageStyle(service.image)}
    >
      <div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <LinkArrow href={`/services/${service.slug}`}>Learn More</LinkArrow>
      </div>
    </article>
  );
}

export function TalentCard({
  talent,
}: {
  talent: {
    slug: string;
    name: string;
    role: string;
    image: string;
  };
}) {
  return (
    <article className="image-card talent-card" style={imageStyle(talent.image)}>
      <div>
        <div className="talent-top">
          <div>
            <h3>{talent.name}</h3>
            <p>{talent.role}</p>
          </div>
          <Link className="circle-icon" href={`/talents/${talent.slug}`} aria-label={`View ${talent.name}`}>
            &rarr;
          </Link>
        </div>
        <div className="social-row" aria-label={`${talent.name} social links`}>
          <a href="https://www.instagram.com">IG</a>
          <a href="https://www.tiktok.com">TT</a>
          <a href="https://x.com">X</a>
          <a href="https://www.youtube.com">YT</a>
        </div>
      </div>
    </article>
  );
}

export function BlogCard({
  post,
}: {
  post: {
    slug: string;
    title: string;
    image: string;
    date: string;
    excerpt: string;
  };
}) {
  return (
    <article className="blog-card" style={imageStyle(post.image)}>
      <div>
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        <p className="meta">{post.date}</p>
        <p>{post.excerpt}</p>
        <LinkArrow href={`/blog/${post.slug}`}>Read More</LinkArrow>
      </div>
    </article>
  );
}

export function TestimonialCard({
  item,
}: {
  item: {
    name: string;
    role: string;
    image: string;
    quote: string;
    rating: string;
  };
}) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-person">
        <Image src={assetUrl(item.image)} alt={item.name} width={96} height={96} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.role}</p>
        </div>
      </div>
      <p className="quote">{item.quote}</p>
      <StarRating value={item.rating} />
    </article>
  );
}
