


// setPage={setPage}

import React from "react";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
//import Nav from './components/Nav';
import Landing from "./pages/Landing";
import About from "./pages/About";
//import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


// import Header from './components/Header';
// import Landing from './pages/Landing';
// import Nav from './components/Nav';
// import Home from './pages/Home';
// //import Projects from './components/Projects'
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import Footer from './components/Footer';
// import NotFound from './components/NotFound';


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