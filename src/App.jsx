import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import Student from "./pages/Student";
import ScholarshipFinder from "./pages/ScholarshipFinder";
import MajorGuide from "./pages/MajorGuide";
import StudyGuide from "./pages/StudyGuide";
import LearningRoadmap from "./pages/LearningRoadmap";

import Career from "./pages/Career";
import CVBuilder from "./pages/CVBuilder";
import InterviewPractice from "./pages/InterviewPractice";
import InternshipFinder from "./pages/InternshipFinder";
import CareerRoadmap from "./pages/CareerRoadmap";

import Life from "./pages/Life";
import BudgetPlanner from "./pages/BudgetPlanner";
import LifePlanner from "./pages/LifePlanner";
import UsefulChecklists from "./pages/UsefulChecklists";
import GoalPlanner from "./pages/GoalPlanner";

import NextStep from "./pages/NextStep";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/student" element={<Student />} />
        <Route path="/student/scholarships" element={<ScholarshipFinder />} />
        <Route path="/student/majors" element={<MajorGuide />} />
        <Route path="/student/study-guide" element={<StudyGuide />} />
        <Route path="/student/learning-roadmap" element={<LearningRoadmap />} />

        <Route path="/career" element={<Career />} />
        <Route path="/career/cv-builder" element={<CVBuilder />} />
        <Route path="/career/interview" element={<InterviewPractice />} />
        <Route path="/career/internships" element={<InternshipFinder />} />
        <Route path="/career/roadmap" element={<CareerRoadmap />} />

        <Route path="/life" element={<Life />} />
        <Route path="/life/budget" element={<BudgetPlanner />} />
        <Route path="/life/planner" element={<LifePlanner />} />
        <Route path="/life/checklists" element={<UsefulChecklists />} />
        <Route path="/life/goals" element={<GoalPlanner />} />

        <Route path="/next-step" element={<NextStep />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <AdBanner />
      <Footer />
    </HashRouter>
  );
}

export default App;
