import Link from "next/link";
import { blogPosts } from "@/lib/constants";
import { BlogCover } from "@/components/ui/BlogCover";

export function Blog() {
  return (
    <section id="blog" className="bg-card2/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest text-accent2">KIẾN THỨC AI</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            Cập nhật xu hướng AI mới nhất
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="card-hover bg-card border border-border rounded-2xl overflow-hidden"
            >
              <Link href={`/kien-thuc/${post.slug}`}>
                <BlogCover tag={post.tag} />
              </Link>
              <div className="p-6">
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-txt2 text-sm leading-relaxed mb-4">{post.desc}</p>
                <Link
                  href={`/kien-thuc/${post.slug}`}
                  className="text-accent2 text-sm font-semibold hover:underline"
                >
                  Đọc thêm →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
