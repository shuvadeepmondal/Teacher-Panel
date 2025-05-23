import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Calendar from "./pages/Calendar";
import FormElements from "./pages/Forms/SemesterSetup";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Login from "./components/auth/Login";
import Classrequest from "./pages/Forms/Classrequest";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/login" element={<Login />} />
        
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            <Route path="/profile" element={<UserProfiles />} />
  
            <Route path="/calendar" element={<Calendar />} />

            <Route path="/semester_setup" element={<FormElements />} />

            <Route path="/class_request" element={<Classrequest/>} />




          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
