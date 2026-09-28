import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdBanner from "./components/AdBanner";

// Student
import Home from "./pages/Home";
import Student from "./pages/Student";
import ScholarshipFinder from "./pages/ScholarshipFinder";
import MajorGuide from "./pages/MajorGuide";
import StudyGuide from "./pages/StudyGuide";
import LearningRoadmap from "./pages/LearningRoadmap";

// Career
import Career from "./pages/Career";
import CVBuilder from "./pages/CVBuilder";
import InterviewPractice from "./pages/InterviewPractice";
import InternshipFinder from "./pages/InternshipFinder";
import CareerRoadmap from "./pages/CareerRoadmap";

// Life
import Life from "./pages/Life";
import BudgetPlanner from "./pages/BudgetPlanner";
import LifePlanner from "./pages/LifePlanner";
import UsefulChecklists from "./pages/UsefulChecklists";
import GoalPlanner from "./pages/GoalPlanner";

// Other
import NextStep from "./pages/NextStep";
import Dashboard from "./pages/Dashboard";
import SEO from "./components/SEO";
function App() {
  return (
    <BrowserRouter basename="/khmer-life-helper">
       <SEO />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Student */}
        <Route path="/student" element={<Student />} />
        <Route path="/student/scholarships" element={<ScholarshipFinder />} />
        <Route path="/student/majors" element={<MajorGuide />} />
        <Route path="/student/study-guide" element={<StudyGuide />} />
        <Route path="/student/learning-roadmap" element={<LearningRoadmap />} />

        {/* Career */}
        <Route path="/career" element={<Career />} />
        <Route path="/career/cv-builder" element={<CVBuilder />} />
        <Route path="/career/interview" element={<InterviewPractice />} />
        <Route path="/career/internships" element={<InternshipFinder />} />
        <Route path="/career/roadmap" element={<CareerRoadmap />} />

        {/* Life */}
        <Route path="/life" element={<Life />} />
        <Route path="/life/budget" element={<BudgetPlanner />} />
        <Route path="/life/planner" element={<LifePlanner />} />
        <Route path="/life/checklists" element={<UsefulChecklists />} />
        <Route path="/life/goals" element={<GoalPlanner />} />

        {/* Other */}
        <Route path="/next-step" element={<NextStep />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <AdBanner />

      <Footer />
    </BrowserRouter>
  );
}

export default App;

