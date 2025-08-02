
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Error";

import Home from "./pages/Home";


export default function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}
