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
              Hello, I'm Yashdeep 👋
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
              I'm a self-taught full-stack developer specializing in the MERN
              stack (MongoDB, Express, React, Node.js), and Django framework,
              with a strong focus on creating React-driven user interfaces that
              are both intuitive and performant.
            </p>
            <p>
              My core strength lies in React and modern frontend development,
              but I’m equally comfortable working across the full stack — from
              building REST APIs with Node.js/Express to managing MongoDB
              databases.
            </p>

            <p className="grid gap-2.5">
              <p>
                Hi, I'm Yashdeep —a Mechanical Engineering college lecturer
                turned a Physics tutor turned a JavaScript developer.
              </p>
              <p>
                I'm a self-taught full-stack developer specializing in the MERN
                stack (MongoDB, Express, React, Node.js), and Django framework,
                with a strong focus on creating React-driven user interfaces
                that are both fast and performant.
              </p>
              <p>
                I specialize in React, JavaScript, TypeScript and modern web
                tools like Vite, Tailwind, and React Router, TanStack Query. I
                enjoy turning complex problems into clean, scalable code.
              </p>{" "}
              <p>
                I'm currently exploring advanced state management and diving
                into server-side rendering using Next.js and
                ReactRouter(framework-mode) frameworks.
              </p>
              <p>
                I'm always excited to collaborate on meaningful projects or join
                teams that value clean code and creative thinking.
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
            "JavaScript",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Prisma",
            "MongoDB",
            "PostgreSQL",
            "Strapi CMS",
            "Next.js",
            "Python",
            "Django",
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
