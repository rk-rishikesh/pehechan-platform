import { BlogCard } from "@/components/influencely/cards";
import { PageHero, SectionHeading } from "@/components/influencely/ui";
import { assetUrl, posts } from "@/lib/influencely";

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Fresh Updates from Our Agency"
        copy="Notes on identity, business consulting, social media, branding, and the practical side of becoming recognizable."
        image={assetUrl("diverse-office-colleagues-stacking-their-hands-aft-2024-12-13-05-39-23-utc.jpg")}
      />

      <section className="section">
        <div className="container stack">
          <SectionHeading
            label="Latest Update"
            title="Identity and Growth Insights"
            copy="Read the same kind of thinking we bring into strategy, content planning, and brand development."
          />
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
