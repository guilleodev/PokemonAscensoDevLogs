import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Devlogs from "./pages/Devlogs.jsx";
import { MediaLightboxProvider } from "./components/ui/MediaLightbox.jsx";

export default function App() {
  return (
    <MediaLightboxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devlogs" element={<Devlogs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MediaLightboxProvider>
  );
}
