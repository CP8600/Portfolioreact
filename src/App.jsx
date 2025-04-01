import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import PageRouter from "./Pages/PageRouter/PageRouter";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagerouter" element={<PageRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
