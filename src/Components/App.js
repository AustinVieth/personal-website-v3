import Hero from "./Hero";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Work from "./Work";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

//Eventually pull all information to be passed in at the app level so another user can easily customize their page
const navItems = ["About", "Work", "Projects", "Contact"];

function App() {
  return (
    <div className="App">
      <NavBar items={navItems} />
      <Hero />
      <AboutMe />
      <Work />
      <Projects />
      <ContactMe />
      <footer>
        <span>Designed and Built by Austin Vieth</span>
        <span>
          Inpired by{" "}
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
          >
            Brittany Chiang
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
