import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
        {/* Intro */}

        <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />

          <div className="">
            <h1 className="text-3xl font-bold text-white mb-2">
              Hey, I'm Yashdeep 👋
            </h1>
            <p className="text-gray-300 text-lg">
              I'm a passionate web developer who loves building friendly
              digitial experiences and helping other grow their business.
            </p>
          </div>
        </div>

        {/* Bio Section */}

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
          <p className="text-gray-300 leading-relexed">
            <p>
              The bio section of your portfolio’s About page should briefly
              introduce you in a way that is: Professional (but personal enough
              to feel human) Focused on your skills or goals Tailored to your
              audience (recruiters, clients, collaborators) Concise (usually 2–5
              short paragraphs or ~100–200 words)
            </p>
            <p className="my-5">
              🧩 Structure of a Strong Portfolio Bio
              <ul className="mt-3 grid gap-2">
                <li>
                  1. Who You Are Your name, profession, and background Your
                  current role or focus{" "}
                </li>
                <li>
                  2. What You Do Skills or specialties (e.g., React developer,
                  UI/UX designer) Types of projects you work on{" "}
                </li>
                <li>
                  3. Why You Do It Your passion or motivation What you care
                  about (e.g., accessibility, performance, user experience){" "}
                </li>
                <li>
                  4. Where You're Going What you're currently learning or aiming
                  for What kind of opportunities you're open to
                </li>
                <li>
                  5. Optional Additions Hobbies, fun fact, or personality touch
                  (adds warmth) A professional headshot or image (if visual
                  portfolio)
                </li>
              </ul>
            </p>
            <p className="grid gap-2.5">
              <h3>📝 Example Bio (for a React Developer) </h3>
              <p>
                Hi, I'm Rahul — a front-end developer passionate about building
                fast, accessible, and user-friendly web apps.
              </p>{" "}
              <p>
                I specialize in React, JavaScript, and modern web tools like
                Vite, Tailwind, and React Router. I enjoy turning complex
                problems into clean, scalable code.
              </p>{" "}
              <p>
                I'm currently exploring advanced state management and diving
                into server-side rendering using frameworks like Remix and
                Next.js.
              </p>
              <p>
                Outside of tech, I enjoy hiking, photography, and reading about
                design systems. I'm always excited to collaborate on meaningful
                projects or join teams that value clean code and creative
                thinking.
              </p>
            </p>
          </p>
        </div>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          🚀 Tech I Use
        </h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
          {[
            "React",
            "Next.js",
            "Vue",
            "Tailwind CSS",
            "Node.js",
            "Laravel",
            "Prisma",
            "MongoDB",
            "PostgreSQL",
            "Appwrite",
            "Docker",
          ].map((tech) => (
            <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
