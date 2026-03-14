"use client";
import Nav from "@/components/nav";
import { useState, useRef } from "react";
import { createBlog } from "@/app/action";
import { useOrganization } from "@clerk/nextjs";

export default function OrganizationPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [done, setDone] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [imgName, setImgName] = useState("");
  const { organization } = useOrganization();

  const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = async () => {
    if (!organization?.id) return alert("Please select an organization");
    try {
      const result = await createBlog({
        title: title.trim(),
        description: blogContent.trim(),
        orgId: organization.id,
        imgUrl: imgUrl,
        customDomain: "sometjing.jaydeepraj.site/s/" + organization?.slug,
      });

      if (result) {
        setDone(true);
        setTitle("");
        setBlogContent("");
        setImgUrl("");
        setImgName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        alert("Error creating blog");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const blogUrl = organization?.slug
    ? `https://sometjing.jaydeepraj.site/s/${organization.slug}`
    : null;

  return (
    <div style={{ minHeight: "100vh", background: "#0f0f14" }}>
      <Nav />

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "#e8e8f0", letterSpacing: "-0.02em" }}
          >
            Create a New Blog
          </h1>
          {blogUrl ? (
            <p style={{ color: "#8b8ba7", fontSize: "0.875rem" }}>
              Your public blog URL:{" "}
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6c63ff", textDecoration: "underline" }}
              >
                {blogUrl}
              </a>
            </p>
          ) : (
            <p style={{ color: "#8b8ba7", fontSize: "0.875rem" }}>
              Select an organisation to start publishing.
            </p>
          )}
        </div>

        {/* Form card */}
        <div className="glass-card p-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreate();
            }}
            className="flex flex-col gap-5"
          >
            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="blog-title"
                className="text-sm font-medium"
                style={{ color: "#a0a0b8" }}
              >
                Title
              </label>
              <input
                id="blog-title"
                type="text"
                placeholder="Give your post a great title…"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
                required
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="blog-content"
                className="text-sm font-medium"
                style={{ color: "#a0a0b8" }}
              >
                Content
              </label>
              <textarea
                id="blog-content"
                placeholder="Write your blog content here…"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                className="form-input"
                style={{ minHeight: "240px", resize: "vertical" }}
                required
              />
            </div>

            {/* Image upload */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium" style={{ color: "#a0a0b8" }}>
                Cover Image{" "}
                <span style={{ color: "#8b8ba7", fontWeight: 400 }}>(max 2 MB)</span>
              </label>
              <label
                htmlFor="blog-img"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "#1e1e2e",
                  border: "1px dashed rgba(255,255,255,0.15)",
                  borderRadius: "0.625rem",
                  padding: "0.85rem 1rem",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLLabelElement).style.borderColor =
                    "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLLabelElement).style.borderColor =
                    "rgba(255,255,255,0.15)")
                }
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c63ff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span style={{ color: imgName ? "#e8e8f0" : "#8b8ba7", fontSize: "0.9rem" }}>
                  {imgName || "Click to upload an image"}
                </span>
                <input
                  id="blog-img"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImg}
                  className="sr-only"
                />
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full mt-1" style={{ fontSize: "1rem", padding: "0.85rem" }}>
              Publish Blog
            </button>
          </form>
        </div>
      </main>

      {/* Success overlay */}
      {done && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 p-4"
          style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
        >
          <div
            className="glass-card p-10 flex flex-col items-center gap-5 text-center"
            style={{ maxWidth: 400, width: "100%" }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(0,212,170,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00d4aa"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold" style={{ color: "#e8e8f0" }}>
              Blog Published!
            </h2>
            <p style={{ color: "#8b8ba7", fontSize: "0.9rem" }}>
              Your new post is live and visible at your organisation URL.
            </p>
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#6c63ff",
                  fontSize: "0.85rem",
                  textDecoration: "underline",
                  wordBreak: "break-all",
                }}
              >
                {blogUrl}
              </a>
            )}
            <button
              className="btn-primary"
              style={{ width: "100%", padding: "0.75rem" }}
              onClick={() => setDone(false)}
            >
              Write Another Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
