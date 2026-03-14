
"use client";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import * as React from "react";

const Nav: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center px-6 py-3.5 sticky top-0 z-50"
      style={{
        background: "rgba(9, 9, 11, 0.8)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "0.5rem",
            background: "linear-gradient(135deg, #7c6cff 0%, #00e5b0 100%)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </span>
        <span className="text-lg font-bold tracking-tight" style={{ color: "#f0f0f5" }}>
          BlogSpace
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <OrganizationSwitcher
          afterSelectOrganizationUrl={(org) => `/org/${org.slug}`}
          afterSelectPersonalUrl="/"
          appearance={{
            elements: {
              rootBox: "flex items-center",
              organizationSwitcherTrigger:
                "rounded-lg px-3 py-1.5 text-sm font-medium text-[#f0f0f5] hover:bg-white/5 transition-colors",
            },
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8 ring-2 ring-[#7c6cff]/30",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
