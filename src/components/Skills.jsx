import React from "react";
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaMobileAlt,
  FaPaintBrush,
  FaTools,
} from "react-icons/fa";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

const skills = [
  { name: "C", icon: <FaCode /> },
  { name: "C++", icon: <FaCode /> },
  { name: "JavaScript", icon: <FaCode /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "Python", icon: <FaBrain /> },
  { name: "HTML", icon: <FaCode /> },
  { name: "CSS", icon: <FaPaintBrush /> },
  { name: "React", icon: <FaCode /> },
  { name: "Node.js", icon: <FaCode /> },
  { name: "Tailwind", icon: <FaPaintBrush /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "OpenRouter", icon: <FaBrain /> },
  { name: "Machine Learning", icon: <FaBrain /> },

];

export default function Skills() {
  return (
    <section className="relative w-full py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <div className="relative flex flex-col items-center w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
          Skills &amp; Technologies
        </h2>

        <div className="w-full max-w-6xl mx-auto grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 px-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center rounded-2xl p-6 shadow-xl border border-white/10 bg-black/30 backdrop-blur hover:-translate-y-0.5 transition-transform"
            >
              <div className="text-3xl mb-2 text-amber-400">{skill.icon}</div>
              <div className="font-semibold text-lg text-[var(--text-0)] text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
