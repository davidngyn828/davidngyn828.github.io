export const site = {
  name: "David Nguyen",
  title: "Senior Full Stack AI Engineer",
  location: "Fremont, CA",
  email: "david.nguyen80302@gmail.com",
  phone: "8138458909",
  phoneDisplay: "(813) 845-8909",
  summary:
    "I design and ship production AI products end to end — from model integration and APIs to polished interfaces clients actually use.",
  links: {
    linkedin: "https://www.linkedin.com/in/david-nguyen-768863422/",
    github: "https://github.com/daxidngyn",
  },
  education: {
    school: "University of California, Santa Cruz",
    degree: "Bachelor of Science — Computer Science",
    years: "2020 – 2024",
  },
  /**
   * Replace these with your real roles when ready.
   * Keep the same shape: company, role, period, location, highlights[].
   */
  experience: [
    {
      company: "Northline AI",
      role: "Senior Full Stack AI Engineer",
      period: "2024 – Present",
      location: "Remote",
      highlights: [
        "Led full-stack delivery of AI-assisted workflows used by product and operations teams daily.",
        "Built Next.js + Python services that connect LLMs, retrieval, and business APIs with reliable guardrails.",
        "Partnered with stakeholders to turn ambiguous requirements into shipped, measurable features.",
      ],
    },
    {
      company: "Cascade Systems",
      role: "Full Stack Engineer",
      period: "2022 – 2024",
      location: "Bay Area / Remote",
      highlights: [
        "Owned customer-facing web apps and backend services across React, Node, and cloud infrastructure.",
        "Improved performance and reliability for high-traffic product surfaces used by paying clients.",
        "Mentored junior engineers and raised the quality bar for reviews, testing, and releases.",
      ],
    },
    {
      company: "Horizon Digital",
      role: "Software Engineer",
      period: "2020 – 2022",
      location: "Remote",
      highlights: [
        "Shipped features across the stack for early-stage products and internal tools.",
        "Built APIs, dashboards, and integrations that reduced manual ops work for clients.",
        "Established practical engineering habits around documentation, monitoring, and delivery.",
      ],
    },
  ],
  /**
   * Add image paths under /public/projects/, live URLs, and copy when ready.
   * image can be empty — a styled placeholder will show instead.
   */
  projects: [
    {
      title: "StockX Data",
      description:
        "Unofficial StockX API for product data — scraping, requests, and structured product info for downstream apps.",
      tags: ["JavaScript", "APIs", "Data"],
      url: "https://github.com/daxidngyn/stockx-data",
      image: "",
    },
    {
      title: "RetailGo",
      description:
        "Retail operations platform — inventory, store workflows, and modern TypeScript full-stack architecture.",
      tags: ["TypeScript", "Full Stack", "Product"],
      url: "https://github.com/daxidngyn/RetailGo",
      image: "",
    },
    {
      title: "Dapper",
      description:
        "Meta-NFT handshake collectible on Ethereum — mint iconic web handshakes as on-chain collectibles.",
      tags: ["JavaScript", "Ethereum", "Web3"],
      url: "https://github.com/daxidngyn/dapper",
      image: "",
    },
    {
      title: "Motiv3",
      description:
        "Hackathon web app focused on motivation and habit support — TypeScript frontend with a clear product loop.",
      tags: ["TypeScript", "Product", "Hackathon"],
      url: "https://github.com/daxidngyn/motiv3-rdvhacks2022",
      image: "",
    },
  ],
  skills: [
    "TypeScript / JavaScript",
    "React / Next.js",
    "Python",
    "Node.js",
    "LLM integration",
    "APIs & system design",
    "PostgreSQL",
    "Cloud & CI/CD",
  ],
} as const;
