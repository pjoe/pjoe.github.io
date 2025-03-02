import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundGradient from "./components/BackgroundGradient";

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Pelle Johnsen | Professional Resume";
  }, []);

  return (
    <BackgroundGradient className="bg-background-dark text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </BackgroundGradient>
  );
}

export default App;
