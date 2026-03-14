import Nav from "../../components/nav";

const steps = [
  {
    number: 1,
    title: "Create an Organization",
    description:
      "Click on your account avatar in the top-right and create a new Organization. This becomes your blog's identity.",
  },
  {
    number: 2,
    title: "Publish Your First Blog",
    description:
      "After selecting your organization, head to the blog editor and post your first article with a title, content and image.",
  },
  {
    number: 3,
    title: "Share Your Blog URL",
    description:
      "Every organization gets a unique public URL powered by our domain. Share it with the world and let readers enjoy your content!",
  },
];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f14" }}>
      <Nav />

      {/* Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-24"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,99,255,0.18) 0%, transparent 70%)",
        }}
      >
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
          style={{
            background: "rgba(108,99,255,0.12)",
            border: "1px solid rgba(108,99,255,0.3)",
            color: "#a09aff",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#6c63ff",
              display: "inline-block",
            }}
          />
          Multi-tenant Blog Platform
        </div>

        <h1
          className="text-5xl font-bold leading-tight mb-5"
          style={{ color: "#e8e8f0", maxWidth: 640 }}
        >
          Your brand,{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            your blog
          </span>
          , your audience.
        </h1>

        <p className="text-lg mb-10" style={{ color: "#8b8ba7", maxWidth: 520 }}>
          BlogSpace gives every organisation its own publishing space — create, manage and share
          beautiful blog posts in minutes.
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="#get-started"
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #6c63ff 0%, #5a52e0 100%)",
              color: "#fff",
              fontWeight: 600,
              padding: "0.75rem 2rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow: "0 4px 20px rgba(108,99,255,0.35)",
              display: "inline-block",
            }}
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            style={{
              color: "#8b8ba7",
              fontWeight: 500,
              padding: "0.75rem 2rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              fontSize: "0.95rem",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "inline-block",
            }}
          >
            How it works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 pb-24 max-w-4xl mx-auto">
        <h2
          className="text-2xl font-bold text-center mb-12"
          id="get-started"
          style={{ color: "#e8e8f0" }}
        >
          Get up and running in{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            3 easy steps
          </span>
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card p-6 flex flex-col gap-4"
              style={{
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 40px rgba(108,99,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <span className="step-badge">{step.number}</span>
              <h3 className="text-lg font-semibold" style={{ color: "#e8e8f0" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8b8ba7" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
