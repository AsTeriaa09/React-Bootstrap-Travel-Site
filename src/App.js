import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/pages/Signup";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" exact element={<Signup />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
