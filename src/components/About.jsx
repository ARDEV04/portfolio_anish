import React from "react";
import profileImg from "../assets/original_resize.JPG";

export default function About() {
  return (
    <section className="w-full py-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/* About Text */}
        <div className="flex-1 text-left md:px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-rose-400 to-violet-400">
            About Me
          </h2>
          <p className="text-[var(--text-1)] mb-4 max-w-xl">
            I'm a Passionate software engineer and ECE undergrad at IIIT Bhagalpur (B.Tech ’26). I build scalable, end-to-end products-React on the front, Node.js with MongoDB/Appwrite on the back-and integrate practical AI workflows. Shipped a production HR portal (JWT auth, robust APIs, responsive UI) and ML projects from CNN activation tools to real-time face-and-emotion attendance. Recognized at Smart India Hackathon; 400+ DSA problems, LeetCode Knight, CodeChef 3-star. I thrive in collaborative teams and love turning ideas into reliable, user-centric products.
          </p>
          <p className="text-[var(--text-2)] max-w-xl">
            Outside of coding, I enjoy reading books, writing, and running. I'm
            always open to new opportunities and challenges!
          </p>
        </div>

        {/* Profile Photo with floating shapes */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <span className="absolute -top-4 -left-4 w-8 h-8 bg-rose-400/70 rounded-full blur-[1px] animate-pulse" />
            <span className="absolute -bottom-4 -right-4 w-6 h-6 bg-violet-400/70 rounded-full blur-[0.5px] animate-bounce" />
            <span className="absolute top-10 -right-6 w-4 h-4 bg-amber-400/80 rounded-full animate-pulse" />
            <div className="rounded-full p-[3px] bg-gradient-to-br from-amber-400 via-rose-400 to-violet-400 shadow-xl">
              <img
                src={profileImg}
                alt="Bikram Kumar Singh profile"
                className="w-40 h-40 sm:w-44 sm:h-44 object-cover rounded-full border border-white/20 shadow-2xl bg-black/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
