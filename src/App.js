import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";


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
      </div>
    </Router>
  );
}

export default App;
