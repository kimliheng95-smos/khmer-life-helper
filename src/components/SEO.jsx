import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://kimliheng95-smos.github.io/khmer-life-helper";

const seoData = {
  "/": {
    title: "Khmer Life Helper | Student, Career & Life Tools",
    description:
      "Khmer Life Helper is a practical platform for Cambodian students and young people with study, career, planning, and everyday life tools.",
  },

  "/student": {
    title: "Student Tools | Khmer Life Helper",
    description:
      "Explore student tools for scholarships, majors, study methods, and learning roadmaps for Cambodian students.",
  },

  "/student/scholarships": {
    title: "Scholarship Finder | Khmer Life Helper",
    description:
      "Explore scholarship opportunities and learn how to prepare documents and applications.",
  },

  "/student/majors": {
    title: "Major Guide | Khmer Life Helper",
    description:
      "Explore common university majors, useful skills, and possible career paths.",
  },

  "/student/study-guide": {
    title: "Study Guide | Khmer Life Helper",
    description:
      "Learn practical study methods and create a simple study plan based on your goals.",
  },

  "/student/learning-roadmap": {
    title: "Learning Roadmap | Khmer Life Helper",
    description:
      "Choose a skill and level to explore a practical learning roadmap from fundamentals to projects.",
  },

  "/career": {
    title: "Career Tools | Khmer Life Helper",
    description:
      "Explore career tools for CV building, interview practice, internships, and career planning.",
  },

  "/career/cv-builder": {
    title: "CV Builder | Khmer Life Helper",
    description:
      "Create a clear and professional CV with your education, skills, projects, and experience.",
  },

  "/career/interview": {
    title: "Interview Practice | Khmer Life Helper",
    description:
      "Practice common interview questions and prepare clearer answers for your next opportunity.",
  },

  "/career/internships": {
    title: "Internship Finder | Khmer Life Helper",
    description:
      "Explore internship opportunities and prepare your CV, projects, and interview skills.",
  },

  "/career/roadmap": {
    title: "Career Roadmap | Khmer Life Helper",
    description:
      "Explore practical career roadmaps for web development, app development, UI/UX, MIS, and software development.",
  },

  "/life": {
    title: "Life Planning Tools | Khmer Life Helper",
    description:
      "Explore practical tools for budgeting, life planning, checklists, and personal goals.",
  },

  "/life/budget": {
    title: "Budget Planner | Khmer Life Helper",
    description:
      "Plan your monthly income and expenses and understand how your money is distributed.",
  },

  "/life/planner": {
    title: "Life Planner | Khmer Life Helper",
    description:
      "Plan your daily tasks, priorities, study, work, rest, and personal time.",
  },

  "/life/checklists": {
    title: "Useful Checklists | Khmer Life Helper",
    description:
      "Use simple checklists to organize tasks, build habits, and stay focused on what matters.",
  },

  "/life/goals": {
    title: "Goal Planner | Khmer Life Helper",
    description:
      "Break your goals into smaller steps and track your progress over time.",
  },

  "/next-step": {
    title: "Find Your Next Step | Khmer Life Helper",
    description:
      "Answer a few questions and explore practical next steps for your study, career, skills, or personal goals.",
  },

  "/dashboard": {
    title: "Dashboard | Khmer Life Helper",
    description:
      "Track your goals, plans, completed tasks, and next actions in Khmer Life Helper.",
  },
};

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname || "/";

    const data = seoData[pathname] || seoData["/"];

    const canonicalUrl =
      pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;

    document.title = data.title;

    setMeta("description", data.description);
    setMeta("robots", "index, follow");

    setCanonical(canonicalUrl);

    setProperty("og:title", data.title);
    setProperty("og:description", data.description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", "website");
    setProperty("og:site_name", "Khmer Life Helper");

    setMeta("twitter:title", data.title);
    setMeta("twitter:description", data.description);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
}

export default SEO;
