


// setPage={setPage}

import React from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


const App = () => {return (

    <><Header />

<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/about" element={<About />} />
  {/* <Route path="/home" element={<Home />} /> */}
  <Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
</Routes>

<Footer /></>

);

};

export default App;