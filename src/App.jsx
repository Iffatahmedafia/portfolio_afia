// import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import About from "./Components/About/About";
// import Experience from "./Components/Experience/Experience";
// import Projects from "./Components/Projects/Projects";
// import Footer from "./Components/Footer/Footer";


// function App() {
//   return (
//   <div className="bg-[#1e293b] h-auto w-full overflow-hidden">
//     <Navbar />
//     <Home />
//     <About />
//     <Experience />
//     <Projects />
//     <Footer />
//   </div>
//   );
// }

// export default App

import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isLight = theme === "light";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? "bg-slate-100 text-slate-900" : "bg-slate-950 text-white"
      }`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Home theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Experience theme={theme} />
        {/* <About theme={theme} /> */}
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
