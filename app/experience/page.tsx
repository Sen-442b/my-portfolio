import React from "react";
import type { Metadata } from "next";
import { experience } from "./experience-data";
import ResumeLink from "app/components/resume-link";

export const metadata: Metadata = {
  title: "Experience",
  description: "My Experience",
};

export default function Experience() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experience</h1>
      <div className="space-y-6">
        {experience.map((project, index) => (
          <div className="flex flex-col" key={index}>
            <div className="w-full flex justify-between items-baseline">
              <span className="text-black dark:text-white font-medium tracking-tight">
                {project.title}
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {project.period}
              </span>
            </div>
            <p className="prose prose-neutral dark:prose-invert pt-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <ResumeLink url="https://drive.google.com/file/d/1eMWrRw1OE70GTR0MB7D7CXS_ZkzQG7nh/view?usp=drive_link" />
    </section>
  );
}
