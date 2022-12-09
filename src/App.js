import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { Auth, Home } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/im" element={<Home />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
