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
    <div className="min-h-screen" style={{ background: "#09090b" }}>
      <Nav />

      <main className="max-w-2xl mx-auto px-4 py-12">
        {/* Page header */}
        <div className="mb-10 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="feature-icon"
              style={{ background: "rgba(124, 108, 255, 0.1)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h1
              className="text-3xl font-bold tracking-tight"
              style={{ color: "#f0f0f5" }}
            >
              Create a New Blog
            </h1>
          </div>
          {blogUrl ? (
            <p className="text-sm" style={{ color: "#71717a" }}>
              Your public blog URL:{" "}
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#7c6cff" }}
              >
                {blogUrl}
              </a>
            </p>
          ) : (
            <p className="text-sm" style={{ color: "#71717a" }}>
              Select an organisation to start publishing.
            </p>
          )}
        </div>

        {/* Form card */}
        <div className="glass-card p-8 animate-fade-in-up delay-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreate();
            }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="blog-title"
                className="text-sm font-medium"
                style={{ color: "#a1a1aa" }}
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="blog-content"
                  className="text-sm font-medium"
                  style={{ color: "#a1a1aa" }}
                >
                  Content
                </label>
                <span className="text-xs" style={{ color: "#3f3f46" }}>
                  {blogContent.length} characters
                </span>
              </div>
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
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium" style={{ color: "#a1a1aa" }}>
                Cover Image{" "}
                <span style={{ color: "#3f3f46", fontWeight: 400 }}>(optional)</span>
              </label>

              {/* Image preview */}
              {imgUrl && (
                <div
                  className="relative rounded-xl overflow-hidden mb-2"
                  style={{ height: 160, border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <img
                    src={imgUrl}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImgUrl("");
                      setImgName("");
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="absolute top-2 right-2 p-1.5 rounded-lg"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              )}

              <label
                htmlFor="blog-img"
                className="flex items-center gap-3 rounded-xl cursor-pointer transition-all"
                style={{
                  background: "#131318",
                  border: "1px dashed rgba(255,255,255,0.1)",
                  padding: "1rem",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLLabelElement).style.borderColor =
                    "var(--primary)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLLabelElement).style.borderColor =
                    "rgba(255,255,255,0.1)")
                }
              >
                <div
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    background: "rgba(124, 108, 255, 0.08)",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7c6cff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: imgName ? "#f0f0f5" : "#71717a" }}
                  >
                    {imgName || "Click to upload an image"}
                  </p>
                  {!imgName && (
                    <p className="text-xs" style={{ color: "#3f3f46" }}>
                      PNG, JPG or WebP
                    </p>
                  )}
                </div>
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
            <button
              type="submit"
              className="btn-primary w-full mt-2"
              style={{ fontSize: "0.95rem", padding: "0.875rem" }}
            >
              Publish Blog
              <svg className="inline-block ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </main>

      {/* Success overlay */}
      {done && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 p-4"
          style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
        >
          <div
            className="glass-card p-10 flex flex-col items-center gap-5 text-center animate-scale-in"
            style={{ maxWidth: 420, width: "100%", border: "1px solid rgba(0,229,176,0.15)" }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "1rem",
                background: "rgba(0,229,176,0.1)",
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
                stroke="#00e5b0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold" style={{ color: "#f0f0f5" }}>
              Blog Published!
            </h2>
            <p className="text-sm" style={{ color: "#71717a" }}>
              Your new post is live and visible at your organisation URL.
            </p>
            {blogUrl && (
              <a
                href={blogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline break-all"
                style={{ color: "#7c6cff" }}
              >
                {blogUrl}
              </a>
            )}
            <button
              className="btn-primary w-full"
              style={{ padding: "0.75rem" }}
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
