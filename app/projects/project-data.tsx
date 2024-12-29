export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "LeadIB",
    year: 2024,
    description:
      "An educational platform offering IB resources, personalized tutoring, mock test analysis, and more.",
    url: "https://leadib.com/",
  },
  {
    title: "Involve",
    year: 2023,
    description:
      "Android Application for collaboratively writing novels (project halted)",
    url: "https://github.com/Sen-442b/Involve",
  },
];
