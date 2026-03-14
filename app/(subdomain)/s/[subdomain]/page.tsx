/* eslint-disable */
import db from "@/db";
import { tables } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { eq } from "drizzle-orm";

export default async function SubdomainLayout({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });

  if (!org) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "#09090b" }}
      >
        <div className="text-center animate-fade-in-up">
          <div
            className="mx-auto mb-4 flex items-center justify-center"
            style={{
              width: 56,
              height: 56,
              borderRadius: "1rem",
              background: "rgba(255, 77, 106, 0.1)",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff4d6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "#f0f0f5" }}>
            Organisation not found
          </h2>
          <p className="text-sm" style={{ color: "#71717a" }}>
            The blog you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const orgId1 = org.id;
  const blogs1 = await db
    .select()
    .from(tables)
    .where(eq(tables.orgId, orgId1));

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#09090b",
        color: "#f0f0f5",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 flex items-center gap-3 px-6 py-4"
        style={{
          background: "rgba(9,9,11,0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <span
          className="inline-flex items-center justify-center flex-shrink-0"
          style={{
            width: "1.75rem",
            height: "1.75rem",
            borderRadius: "0.4rem",
            background: "linear-gradient(135deg, #7c6cff 0%, #00e5b0 100%)",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        </span>
        <span className="font-bold text-sm tracking-tight" style={{ color: "#f0f0f5" }}>
          BlogSpace
        </span>
        <span className="text-xs px-2 py-0.5 rounded-md" style={{ background: "rgba(124,108,255,0.1)", color: "#a59bff" }}>
          {subdomain}
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        {/* Page title */}
        <div className="mb-14 text-center animate-fade-in-up">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{
              background: "rgba(124,108,255,0.08)",
              border: "1px solid rgba(124,108,255,0.15)",
              color: "#a59bff",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            {blogs1.length} {blogs1.length === 1 ? "article" : "articles"} published
          </div>
          <h1
            className="text-4xl font-bold tracking-tight mb-3"
            style={{ color: "#f0f0f5" }}
          >
            All Posts
          </h1>
          <p className="text-sm" style={{ color: "#71717a" }}>
            Latest stories and updates from{" "}
            <span className="font-medium" style={{ color: "#a1a1aa" }}>{subdomain}</span>
          </p>
        </div>

        {blogs1.length === 0 ? (
          <div
            className="glass-card text-center animate-fade-in-up"
            style={{ padding: "4rem 2rem" }}
          >
            <div
              className="mx-auto mb-4 flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "0.75rem",
                background: "rgba(124, 108, 255, 0.08)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: "#f0f0f5" }}>
              No posts yet
            </p>
            <p className="text-xs" style={{ color: "#71717a" }}>
              Check back soon for new content!
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {blogs1.map((blog, index) => (
              <article
                key={blog.id}
                className={`blog-card animate-fade-in-up ${delayClasses[Math.min(index + 1, 5)] || ""}`}
              >
                {blog.imgUrl && (
                  <div className="relative w-full" style={{ height: 240 }}>
                    <Image
                      src={blog.imgUrl}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 40%, rgba(19,19,24,0.95) 100%)",
                      }}
                    />
                  </div>
                )}

                <div style={{ padding: "1.5rem 1.75rem" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(0, 229, 176, 0.08)",
                        color: "#00e5b0",
                      }}
                    >
                      {subdomain}
                    </span>
                    {blog.createdAt && (
                      <span className="text-xs" style={{ color: "#3f3f46" }}>
                        •{" "}
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                  <h2
                    className="text-xl font-bold mb-2 capitalize tracking-tight"
                    style={{ color: "#f0f0f5" }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "#71717a",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {blog.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="px-6 py-6 text-center"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p className="text-xs" style={{ color: "#3f3f46" }}>
          Powered by{" "}
          <span className="font-medium" style={{ color: "#71717a" }}>BlogSpace</span>
        </p>
      </footer>
    </div>
  );
}

