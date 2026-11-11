import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { RootLayout } from "./layouts/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const CyberLabs = lazy(() => import("./pages/CyberLabs"));
const LearningFramework = lazy(() => import("./pages/LearningFramework"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="labs" element={<CyberLabs />} />
          <Route path="learning-framework" element={<LearningFramework />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
