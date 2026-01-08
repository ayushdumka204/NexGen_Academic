import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Resarch from "./pages/Research";
import Team from "./pages/Team";
import Missionandvision from "./pages/Missionandvision";
import WhyNexGen from "./pages/WhyNexGen";
import Quality from "./pages/Quality";

import InstitutionalPartner from "./pages/InstitutionalPartener";
import Researcharea from "./components/Research/Researcharea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Resarch />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why-nexgen" element={<WhyNexGen />} />
          <Route path="/missionandvision" element={<Missionandvision />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/researcharea" element={<Researcharea />} />
          <Route path="/institutional-partner"element={<InstitutionalPartner />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// end
