import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider, SignedOut, SignIn, SignedIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "BlogSpace – Multi-tenant Blog Platform",
  description: "Create and manage your own blog space with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className="antialiased" style={{ background: "#09090b", color: "#f0f0f5", fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
          <SignedOut>
            <div
              className="relative flex flex-col gap-6 min-h-screen justify-center items-center px-4 overflow-hidden"
              style={{
                background: "#09090b",
              }}
            >
              {/* Decorative gradient orbs */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(124,108,255,0.12) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,229,176,0.06) 0%, transparent 60%)",
                }}
              />

              <div className="relative text-center mb-4 animate-fade-in-up">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "0.5rem",
                      background: "linear-gradient(135deg, #7c6cff 0%, #00e5b0 100%)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  </span>
                </div>
                <h1
                  className="text-3xl font-bold mb-2 tracking-tight gradient-text"
                >
                  Welcome to BlogSpace
                </h1>
                <p className="text-sm" style={{ color: "#71717a" }}>
                  Sign in to manage your multi-tenant blog
                </p>
              </div>
              <div className="relative animate-fade-in-up delay-200">
                <SignIn />
              </div>
              <SignIn routing="hash" />
            </div>
          </SignedOut>

          <SignedIn>{children}</SignedIn>
        </body>
      </ClerkProvider>
    </html>
  );
}
