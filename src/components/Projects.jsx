import React from "react";

const projects = [
  {
    title: "ProctorX — AI-Assisted Video Proctoring System",
    description:
      "Built a browser-based video proctoring system with real-time face/object detection, integrity scoring, and post-session reporting. Integrated live camera alerts (no face, multiple faces, looking away), session logging, and report export in PDF/CSV formats.",
    tech: [
      "Next.js (TypeScript)",
      "Tailwind CSS + shadcn/ui",
      "MongoDB",
      "TensorFlow / browser APIs",
      "API routes / Serverless",
      "PDF & CSV export",
    ],
    link: "https://github.com/ARDEV04/ProctorX",
    demo: "https://proctor-x-two.vercel.app",
  },
  {
    title: "Attendance System Model (Face Recognition + ML)",
    description:
      "Developed a face-recognition–based attendance system using machine learning models to automate and secure attendance tracking. Achieved high accuracy in face detection and recognition across diverse lighting and pose conditions.",
    tech: [
      "Python",
      "OpenCV",
      "Face Recognition (dlib/face_recognition)",
      "TensorFlow",
      "FastAPI",
    ],
    link: "https://github.com/ARDEV04/Attendance-System-Model",
  },
  {
    title: "HR Management System",
    description:
      "Built a full-stack HR management system to streamline employee, attendance, leave, and performance workflows. Included features such as role-based access, automated leave approval, and reporting dashboards to provide actionable insights.",
    tech: ["React", "JWT Authentication", "REST APIs"],
    link: "https://github.com/ARDEV04/HR_Management_System",
    demo: "https://dapper-meringue-4db148.netlify.app/",
  },
  {
    title: "FI_Money Backend",
    description:
      "Developed a robust backend for a finance management platform (FI_Money). Features include user authentication, account & transaction management, balance tracking, and RESTful APIs for integration with frontend clients.",
    tech: [
      "Python",
      "NodeJS",
      "MongoDB ",
      "OAuth for authentication",
      "REST API",
      "Unit Testing",
    ],
    link: "https://github.com/ARDEV04/Backend_FI_Money",
  },
];

export default function Projects() {
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

      <div className="relative flex flex-col items-center w-full">
        <h2 className="text-3xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
          Projects
        </h2>

        {/* WIDER cards (3 on xl, 4 on 2xl) + SHORTER height via clamps */}
        <div className="w-full max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 px-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-black/30 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/10 backdrop-blur hover:-translate-y-0.5 transition-transform"
            >
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-semibold text-[var(--text-0)] mb-2 leading-snug">
                  {project.title}
                </h3>

                {/* Clamp description to reduce card height */}
                <p
                  className="text-[var(--text-1)] mb-3 leading-relaxed"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 5, // <= adjust lines if needed
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>

                {/* Tech chips: limit visible rows to keep height compact */}
                <div className="flex flex-wrap gap-2 mb-3 max-h-16 overflow-hidden">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[var(--text-0)] border border-white/10 bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-violet-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="mt-auto flex gap-2 pt-1">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3.5 py-2 rounded-lg font-semibold text-[#1a1223] border border-white/20 shadow bg-gradient-to-b from-white to-amber-200 hover:-translate-y-0.5 transition-transform"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3.5 py-2 rounded-lg font-semibold text-[var(--text-1)] border border-white/15 bg-white/5 hover:bg-white/10 transition-colors shadow backdrop-blur"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
