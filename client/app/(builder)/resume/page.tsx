"use client";
import React from "react";

export default function Resume() {
  return (
    <div className="scale-70 h-full origin-top">
      <div
        id="resume-preview"
        className="bg-white w-[210mm] h-[297mm] shadow-lg border rounded flex"
      >
        {/* Left Column */}
        <aside className="w-[35%] bg-gray-50 border-r p-6 text-sm space-y-6">
          {/* Personal Details */}
          <div>
            <h2 className="text-lg font-bold">John Doe</h2>
            <p className="text-gray-700">Full Stack Developer</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500">
              CONTACT INFORMATION
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Email: john.doe@email.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: New York, USA</li>
              <li>LinkedIn: linkedin.com/in/johndoe</li>
              <li>GitHub: github.com/johndoe</li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500">
              SKILLS
            </h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>SQL / MongoDB</li>
              <li>REST / GraphQL</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500">
              LANGUAGES
            </h3>
            <ul className="mt-2 space-y-1">
              <li>English — Native</li>
              <li>Spanish — Professional</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500">
              HOBBIES
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Open Source</li>
              <li>Travel</li>
              <li>Photography</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500">
              LINKS
            </h3>
            <ul className="mt-2 space-y-1">
              <li>Portfolio: devredoy.com</li>
              <li>Dribbble: dribbble.com/johndoe</li>
              <li>Twitter: twitter.com/johndoe</li>
            </ul>
          </div>
        </aside>

        {/* Right Column */}
        <main className="flex-1 p-8 text-sm space-y-6">
          {/* Professional Summary */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">
              Professional Summary
            </h2>
            <p>
              Full Stack Developer with 5+ years of experience building scalable
              web applications. Skilled in React, Next.js, Node.js, and cloud
              infrastructure. Strong problem-solving ability with a passion for
              clean, maintainable code.
            </p>
          </section>

          {/* Employment History */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">
              Employment History
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold">Senior Developer – TechCorp</h3>
              <p className="text-xs text-gray-500">
                Jan 2020 – Present | New York, USA
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  Led development of SaaS platform serving 10k+ users using
                  React and Node.js.
                </li>
                <li>
                  Optimized database queries, reducing API response time by 40%.
                </li>
                <li>
                  Mentored junior developers and introduced code review
                  practices.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Frontend Developer – WebSolutions</h3>
              <p className="text-xs text-gray-500">
                Jun 2017 – Dec 2019 | Remote
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Built responsive websites for clients across industries.</li>
                <li>
                  Integrated third-party APIs and improved Lighthouse scores by
                  30%.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">Education</h2>
            <div>
              <h3 className="font-semibold">B.Sc. in Computer Science</h3>
              <p className="text-xs text-gray-500">
                University of Technology, 2013 – 2017
              </p>
            </div>
          </section>

          {/* Internship */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">Internship</h2>
            <div>
              <h3 className="font-semibold">Software Intern – Startup Inc.</h3>
              <p className="text-xs text-gray-500">Jan 2016 – Jun 2016</p>
              <p>
                Assisted senior engineers with frontend development and bug
                fixing. Gained hands-on experience with Agile processes.
              </p>
            </div>
          </section>

          {/* Courses */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">Courses</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Full Stack Web Development – Coursera (2020)</li>
              <li>Advanced React Patterns – Udemy (2021)</li>
            </ul>
          </section>

          {/* References */}
          <section>
            <h2 className="text-base font-bold border-b pb-1 mb-2">References</h2>
            <p>Available upon request</p>
          </section>
        </main>
      </div>
    </div>
  );
}
