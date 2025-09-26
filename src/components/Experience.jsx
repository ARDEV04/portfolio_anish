import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Front-End Developer Intern",
    company: "Glocybs Pvt. Ltd.",
    period: "Mar 2024 – May 2024",
    description:
      "Built an HR portal in React with JWT login and real-time checks, cutting manual entry errors by ~20%. Made 15+ reusable components, hooked up REST APIs with Axios, and shipped a responsive UI using React Router v6, CSS Grid/Flexbox. Helped run code reviews and fixed key issues.",
    achievements: [
      "20% fewer manual entry errors with real-time validation.",
      "15+ reusable components; 40% less code repetition.",
      "98% API success rate with robust error handling.",
      "35% better mobile engagement from responsive UI.",
      "30% fewer production bugs after code reviews.",
    ],
  },
  {
    role: "Participant",
    company: "Amazon ML Summer School (MLSS)",
    period: "2025",
    description:
      "Selected among participants nationwide to attend Amazon ML Summer School 2025, an advanced training program focused on machine learning concepts and applications.",
    achievements: [
      "Chosen through a national-level selection process for Amazon ML Summer School 2025.",
      "Received advanced training in core and applied machine learning topics from Amazon experts.",
    ],
  },
  {
    role: "Semi-Finalist",
    company: "Flipkart GRiD 7.0",
    period: "2025",
    description:
      "Advanced to the Semi-Finals in Flipkart GRiD 7.0, a prestigious national-level technical competition showcasing problem-solving and innovation skills.",
    achievements: [
      "Secured Semi-Finalist position among top teams nationwide in Flipkart GRiD 7.0.",
      "Recognized for strong technical and analytical problem-solving abilities.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Snowball (Blizzard Innovations Pvt. Ltd.)",
    period: "Jan 2025 – Mar 2025",
    description:
      "Completed a frontend internship at Snowball. Helped build and improve web UI components, fixed issues, and supported day-to-day development tasks with clean, readable code and professionalism.",
    achievements: [
      "Delivered assigned tasks on time with attention to detail.",
      "Collaborated well with the team and followed best practices.",
    ],
  },
  {
    role: "Team Leader",
    company: "Smart India Hackathon",
    period: "2024",
    description:
      "Led a team of six in the Smart India Hackathon 2024 to design and implement an innovative tourism-focused solution, securing 6th place among 45+ competing teams for creativity and execution.",
    achievements: [
      "Directed a team of six in developing a tourism-focused solution during Smart India Hackathon 2024.",
      "Achieved 6th rank out of 45+ teams, recognized for innovation, creativity, and execution excellence.",
    ],
  },
  {
    role: "Smart India Hackathon (Team Leader)",
    company: "Smart India Hackathon",
    period: "2023",
    description:
      "Led a team of six in Smart India Hackathon 2023 to build a digital heritage solution. Ranked 8th out of 45+ teams based on innovation and execution.",
    achievements: [
      "Led a team of six in Smart India Hackathon 2023 to build a digital heritage solution.",
      "Ranked 8th out of 45+ teams based on innovation and execution.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative w-full py-16">
      {/* ambient theme blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-amber-400/20 via-rose-400/20 to-violet-400/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-violet-400/20 via-rose-400/20 to-amber-400/20"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center w-full px-4">
        <div className="flex items-center gap-2 mb-2">
          <FaBriefcase className="text-amber-400 text-2xl" />
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
            Experience
          </h2>
        </div>
        <p className="text-[var(--text-2)] mb-8 text-center max-w-2xl">
          6+ months of professional experience building innovative solutions
        </p>

        <div className="w-full flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-black/30 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur w-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <div className="text-lg font-bold text-[var(--text-0)] mb-1">
                    {exp.role}
                  </div>
                  <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
                    {exp.company}
                  </div>
                </div>
                <div className="text-[var(--text-1)] text-sm mt-2 md:mt-0 md:text-right">
                  {exp.period}
                </div>
              </div>

              <div className="text-[var(--text-1)] mb-3">{exp.description}</div>

              <div>
                <div className="font-semibold text-[var(--text-0)]/90 mb-1">
                  Key Achievements
                </div>
                <ul className="list-disc list-inside text-[var(--text-2)] text-sm">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
