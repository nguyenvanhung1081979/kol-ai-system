import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { blogPosts } from "@/lib/constants";
import { BlogCover } from "@/components/ui/BlogCover";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — KOL AI SYSTEM`,
    description: post.desc,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug);

  return (
    <>
      <Header />

      <article className="relative glow overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-10 md:pt-24">
          <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            {post.tag} · KIẾN THỨC AI
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-txt2 text-base leading-relaxed mb-4">{post.desc}</p>
          <p className="text-txt2 text-xs">
            {post.date} · {post.readTime}
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="rounded-2xl overflow-hidden border border-border mb-10">
            <BlogCover tag={post.tag} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20 space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
              <p className="text-txt2 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Muốn áp dụng AI cho kênh của bạn?</h3>
            <p className="text-txt2 text-sm mb-6">
              Đội ngũ KOL AI SYSTEM sẵn sàng tư vấn miễn phí lộ trình phù hợp với bạn.
            </p>
            <Link
              href="/#lien-he"
              className="grad-btn inline-block text-white font-semibold px-7 py-3.5 rounded-full"
            >
              Tư vấn miễn phí
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-card2/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="text-xl font-extrabold mb-8">Bài viết khác</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/kien-thuc/${p.slug}`}
                className="card-hover bg-card border border-border rounded-2xl overflow-hidden block"
              >
                <BlogCover tag={p.tag} />
                <div className="p-6">
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-txt2 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
