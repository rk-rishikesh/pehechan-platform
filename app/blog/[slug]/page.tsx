import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/influencely/ui";
import { assetUrl, posts } from "@/lib/influencely";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        label={post.date}
        title={post.title}
        copy={post.excerpt}
        image={assetUrl(post.image)}
      />

      <article className="section">
        <div className="container article-layout">
          <div className="article-body">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="article-aside">
            <h3>Need a Pehechan partner?</h3>
            <p>
              Turn your business identity into a practical content and campaign
              plan with the Pehechan team.
            </p>
            <Link className="btn btn-primary" href="/contact">
              Talk to Us
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}
