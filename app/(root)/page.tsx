import Nav from "../../components/nav";

const delayClasses = ["", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

const steps = [
  {
    number: 1,
    title: "Create an Organization",
    description:
      "Click on your account avatar in the top-right and create a new Organization. This becomes your blog's identity.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Publish Your First Blog",
    description:
      "After selecting your organization, head to the blog editor and post your first article with a title, content and image.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Share Your Blog URL",
    description:
      "Every organization gets a unique public URL powered by our domain. Share it with the world and let readers enjoy your content!",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Multi-tenant Architecture",
    description: "Each organization gets its own isolated blog space with a unique subdomain.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Instant Publishing",
    description: "Write and publish blog posts in seconds. No setup, no configuration needed.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Custom Domains",
    description: "Every blog gets a clean, shareable URL that's easy for your audience to remember.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c6cff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Secure by Default",
    description: "Built-in authentication and organization management powered by Clerk.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#09090b" }}>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient orbs */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 20%, rgba(124,108,255,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-20 right-[10%] w-[400px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,229,176,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
          {/* Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(124,108,255,0.08)",
              border: "1px solid rgba(124,108,255,0.2)",
              color: "#a59bff",
            }}
          >
            <span
              className="inline-block rounded-full"
              style={{
                width: 6,
                height: 6,
                background: "#7c6cff",
                boxShadow: "0 0 8px rgba(124,108,255,0.6)",
              }}
            />
            Multi-tenant Blog Platform
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-in-up delay-100 text-5xl md:text-6xl font-bold leading-[1.1] mb-6 tracking-tight"
            style={{ color: "#f0f0f5", maxWidth: 680 }}
          >
            Your brand,{" "}
            <span className="gradient-text">your blog</span>
            ,<br />your audience.
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in-up delay-200 text-lg mb-10 leading-relaxed"
            style={{ color: "#71717a", maxWidth: 520 }}
          >
            BlogSpace gives every organisation its own publishing space — create,
            manage and share beautiful blog posts in minutes.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up delay-300 flex gap-4 flex-wrap justify-center">
            <a href="#get-started" className="btn-primary" style={{ fontSize: "0.95rem" }}>
              Get Started
              <svg className="inline-block ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#how-it-works" className="btn-secondary" style={{ fontSize: "0.95rem" }}>
              How it works
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <p
            className="text-sm font-semibold tracking-wider uppercase mb-3"
            style={{ color: "#7c6cff" }}
          >
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: "#f0f0f5" }}>
            Everything you need to{" "}
            <span className="gradient-text">publish</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`glass-card gradient-border p-6 flex gap-4 items-start animate-fade-in-up ${delayClasses[i + 1] || ""}`}
            >
              <div
                className="feature-icon"
                style={{
                  background: "rgba(124, 108, 255, 0.08)",
                }}
              >
                {feature.icon}
              </div>
              <div>
                <h3
                  className="text-base font-semibold mb-1"
                  style={{ color: "#f0f0f5" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#71717a" }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 pb-24 max-w-4xl mx-auto">
        <div className="text-center mb-16" id="get-started">
          <p
            className="text-sm font-semibold tracking-wider uppercase mb-3"
            style={{ color: "#00e5b0" }}
          >
            Getting Started
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "#f0f0f5" }}
          >
            Up and running in{" "}
            <span className="gradient-text">3 easy steps</span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`glass-card gradient-border p-7 flex flex-col gap-4 animate-fade-in-up ${delayClasses[i + 1] || ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="step-badge">{step.number}</span>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "#f0f0f5" }}
                >
                  {step.title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#71717a" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 py-8"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(9, 9, 11, 0.95)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "0.375rem",
                background: "linear-gradient(135deg, #7c6cff 0%, #00e5b0 100%)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </span>
            <span className="text-sm font-semibold" style={{ color: "#71717a" }}>
              BlogSpace
            </span>
          </div>
          <p className="text-xs" style={{ color: "#3f3f46" }}>
            &copy; {new Date().getFullYear()} BlogSpace. Built with Next.js &amp; Clerk.
          </p>
        </div>
      </footer>
    </div>
  );
}
