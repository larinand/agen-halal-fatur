import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import PelakuUsaha from "./pages/PelakuUsaha";
import Submission from "./pages/Submission";
import Insentif from "./pages/Insentif";
import FeeEstimationCalculator from "./pages/FeeEstimationCalculator";

import DashboardFatur from "./pages/DashboardFatur";
import LearningModule from "./pages/LearningModule";
import PostTest from "./pages/PostTest";
import Media from "./pages/Media";
import Faq from "./pages/Faq";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<DashboardFatur />} />
            <Route index path="/business-actor" element={<PelakuUsaha />} />
            <Route
              index
              path="/business-actor/create"
              element={<Submission />}
            />
            <Route index path="/insentif" element={<Insentif />} />
            <Route
              index
              path="/fee-estimation-calculator"
              element={<FeeEstimationCalculator />}
            />
            {/* <Route index path="/dashboard/agent" element={<DashboardFatur />} /> */}
            <Route index path="/learning-module" element={<LearningModule />} />
            <Route index path="/post-test" element={<PostTest />} />
            <Route index path="/media" element={<Media />} />
            <Route index path="/faq" element={<Faq />} />
          </Route>

          {/* Auth Layout */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}

          {/* Fallback Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
