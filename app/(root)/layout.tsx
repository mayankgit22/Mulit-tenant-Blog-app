import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider, SignedOut, SignIn, SignedIn } from "@clerk/nextjs";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
    <html lang="en" className={roboto.className}>
      <ClerkProvider>
        <body className="antialiased" style={{ background: "#0f0f14", color: "#e8e8f0" }}>
          <SignedOut>
            <div
              className="flex flex-col gap-6 min-h-screen justify-center items-center px-4"
              style={{
                background: "radial-gradient(ellipse at top, #1a1040 0%, #0f0f14 60%)",
              }}
            >
              <div className="text-center mb-2">
                <h1
                  className="text-3xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Welcome to BlogSpace
                </h1>
                <p style={{ color: "var(--muted-foreground)" }}>Sign in to manage your multi-tenant blog</p>
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
