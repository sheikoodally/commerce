// import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
