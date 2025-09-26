import React from "react";
import profileImg from "../assets/original_resize.jpg";

export default function Footer() {
  return (
    <footer className="relative w-full py-12 mt-8 border-t border-white/10">
      {/* ambient theme blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-16 h-80 w-80 rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <div className="relative flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 mb-4">
          {/* gradient ring around avatar */}
          <div className="rounded-full p-[3px] bg-gradient-to-br from-amber-400 via-rose-400 to-violet-400 shadow-xl">
            <img
              src={profileImg}
              alt="Bikram Kumar Singh profile"
              className="w-16 h-16 object-cover rounded-full border border-white/20 shadow-2xl bg-black/30"
            />
          </div>

          <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
            Anish Ranjan
          </div>

          <div className="text-[var(--text-2)] text-center max-w-xl">
            Software Engineer &amp; Full Stack Developer passionate about creating
            innovative solutions that bridge technology and real-world problems.
          </div>
        </div>

        <div className="text-[var(--text-1)]/70 text-sm mt-2">
          &copy; {new Date().getFullYear()} Anish Ranjan. All rights
          reserved.
        </div>
        <div className="text-[var(--text-2)] text-xs mt-1">
          Made with <span className="text-rose-400">♥</span> using React &amp; Tailwind
          CSS
        </div>
      </div>
    </footer>
  );
}
