import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TimelineProvider } from "./context/TimelineContext";

function App() {
  return (
    <TimelineProvider>
      <BrowserRouter>
        <div className="bg-[var(--bg-light)] min-h-screen flex flex-col">
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <ToastContainer position="top-right" />
          
          <Footer />
        </div>
      </BrowserRouter>
    </TimelineProvider>
  );
}

export default App;