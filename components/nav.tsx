
"use client";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import * as React from "react";

const Nav: React.FC = () => {
  return (
    <nav
      style={{
        background: "rgba(26, 26, 36, 0.85)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
      className="flex justify-between items-center px-6 py-3"
    >
      {/* Brand */}
      <div className="flex items-center gap-2">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2rem",
            height: "2rem",
            borderRadius: "0.5rem",
            background: "linear-gradient(135deg, #6c63ff 0%, #00d4aa 100%)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </span>
        <span className="text-lg font-bold" style={{ color: "#e8e8f0", letterSpacing: "-0.02em" }}>
          BlogSpace
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <OrganizationSwitcher
          afterSelectOrganizationUrl={(org) => `/org/${org.slug}`}
          appearance={{
            elements: {
              rootBox: "flex items-center",
              organizationSwitcherTrigger:
                "rounded-lg px-3 py-1.5 text-sm font-medium text-[#e8e8f0] hover:bg-white/5 transition-colors",
            },
          }}
        />
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-8 h-8 ring-2 ring-[#6c63ff]/40",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
