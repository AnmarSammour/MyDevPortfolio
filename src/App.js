import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import "./App.module.css";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div>
        <Header onNavigate={scrollToSection} />
          <main>
            <section id="home">
              <Hero />
            </section>
          </main>
      </div>
    </Router>
  );
}

export default App;
