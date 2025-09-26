import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-[#f59e0b33] via-[#fb718533] to-[#a78bfa33]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-[#a78bfa33] via-[#fb718533] to-[#f59e0b33]"
      />

      {/* availability badge */}
      <div className="mt-8 mb-4 flex w-full justify-center">
        <span className="px-4 py-1 rounded-full bg-white/5 text-sm text-[var(--text-1)] border border-white/10 shadow backdrop-blur">
          Available for hire
        </span>
      </div>

      {/* name with animated gradient (Plum–Amber–Noir theme) */}
      <h1 className="text-5xl sm:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400 animate-[brandShift_14s_ease-in-out_infinite] drop-shadow-lg">
        Anish Ranjan
      </h1>

      {/* subtitle */}
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-center text-[var(--text-0)]/90">
        Enthusiast Software Developer · Data Science Practitioner
      </h2>

      {/* badges */}
      <div className="mt-5 mb-6 flex flex-wrap justify-center gap-3">
        <span className="px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-sm text-white shadow bg-gradient-to-r from-violet-600/80 to-violet-400/80 border border-white/10">
          B.Tech ECE, IIIT Bhagalpur
        </span>
        <span className="px-4 py-1 rounded-full font-semibold flex items-center gap-1 text-sm text-white shadow bg-gradient-to-r from-rose-600/80 to-rose-400/80 border border-white/10">
          React · Python · ML
        </span>
      </div>

      {/* description */}
      <p className="max-w-2xl text-[var(--text-1)] text-center mb-10 text-lg">
        Building scalable web apps and ML/CV features end-to-end. Experienced with React, Node.js, MongoDB, TensorFlow/Keras & OpenCV. I learn fast, collaborate deeply, and ship reliable, real-world solutions.
      </p>

      {/* buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl font-semibold text-[#1a1223] shadow-lg border border-white/20 bg-gradient-to-b from-white to-amber-200 hover:-translate-y-0.5 transition-transform"
        >
          Explore My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl font-semibold text-[var(--text-1)] border border-white/15 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 transition-transform backdrop-blur"
        >
          Let’s Connect
        </a>
      </div>

      {/* stats */}
      <div className="w-full flex flex-wrap justify-center gap-6 mb-8">
        <div className="bg-black/30 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-white/10">
          <div className="text-3xl font-bold text-amber-400 mb-1">3+</div>
          <div className="text-[var(--text-1)] text-lg font-medium">
            Major Projects
          </div>
        </div>
        <div className="bg-black/30 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-white/10">
          <div className="text-3xl font-bold text-rose-400 mb-1">3</div>
          <div className="text-[var(--text-1)] text-lg font-medium">
            Months Internship
          </div>
        </div>
        <div className="bg-black/30 rounded-2xl px-8 py-6 min-w-[180px] text-center shadow-lg border border-white/10">
          <div className="text-3xl font-bold text-violet-400 mb-1">15+</div>
          <div className="text-[var(--text-1)] text-lg font-medium">
            Technologies
          </div>
        </div>
      </div>
    </section>
  );
}
