export interface Experience {
    title: string;
    period: string| number;
    description: string;
    url: string;
  }
  
  export const experience: Experience[] = [
    {
      title: "Freelance Developer",
      period: "Jan 2024 - Present",
      description:
        "Building and delivering high-quality web and software solutions tailored to clients' needs.",
      url: "",
    },
    {
      title: "Coulomb AI",
      period: "June’ 2023- July’ 2023",
      description:
        "Built interactive EV traffic visualizations with Mapbox/MapLibre, custom charts with Ant Design, and enhanced real-time data.",
      url: "https://coulomb.ai/",
    },
    {
        title: "Homepage IT Solutions",
        period: "Jan’ 2023- May'2023",
        description:
          "Built a notifications module, loyalty points, payment, and referral features for an E-Commerce platform. Integrated Stripe for dynamic product payments, fixed bugs, and refactored legacy code to enhance functionality",
        url: "https://coulomb.ai/",
      },
  ];
  