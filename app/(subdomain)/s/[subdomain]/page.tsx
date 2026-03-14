/* eslint-disable */
import db from "@/db";
import { tables } from "@/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { eq } from "drizzle-orm";

type paramsType = {
  subdomain: string;
};

export default async function SubdomainLayout({
  params,
}: {
  params: paramsType;
}) {
  const { subdomain } = await params;
  const client = await clerkClient();
  const org = await client.organizations.getOrganization({ slug: subdomain });

  if (!org) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f0f14",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#8b8ba7" }}>Organisation not found.</p>
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
      style={{
        minHeight: "100vh",
        background: "#0f0f14",
        color: "#e8e8f0",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "rgba(26,26,36,0.85)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "1.75rem",
            height: "1.75rem",
            borderRadius: "0.4rem",
            background: "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
            flexShrink: 0,
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
        <span style={{ fontWeight: 700, fontSize: "1rem", color: "#e8e8f0" }}>
          BlogSpace
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Page title */}
        <div className="mb-10 text-center">
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6c63ff",
              marginBottom: "0.5rem",
            }}
          >
            {subdomain}
          </p>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "#e8e8f0",
              letterSpacing: "-0.02em",
            }}
          >
            All Posts
          </h1>
          <p style={{ color: "#8b8ba7", marginTop: "0.5rem" }}>
            {blogs1.length} {blogs1.length === 1 ? "article" : "articles"} published
          </p>
        </div>

        {blogs1.length === 0 ? (
          <div
            className="glass-card"
            style={{ padding: "3rem", textAlign: "center" }}
          >
            <p style={{ color: "#8b8ba7" }}>No posts yet. Check back soon!</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {blogs1.map((blog) => (
              <article key={blog.id} className="blog-card">
                {blog.imgUrl && (
                  <div style={{ position: "relative", width: "100%", height: 220 }}>
                    <Image
                      src={blog.imgUrl}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      style={{ borderRadius: "1rem 1rem 0 0" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to bottom, transparent 50%, rgba(26,26,36,0.85) 100%)",
                        borderRadius: "1rem 1rem 0 0",
                      }}
                    />
                  </div>
                )}

                <div style={{ padding: "1.5rem" }}>
                  <h2
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#e8e8f0",
                      marginBottom: "0.5rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    style={{
                      color: "#8b8ba7",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
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
    </div>
  );
}

