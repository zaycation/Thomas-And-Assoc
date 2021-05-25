import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage.js";
import About from "./pages/AboutPage.js";
import Contact from "./pages/ContactPage.js";
import Services from "./pages/ServicesPage.js";
import CommGal from "./pages/CommGallery";
import AutoGal from "./pages/AutoGallery";

import Nav from "./components/nav";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/auto-gallery">
            <AutoGal />
          </Route>
          <Route path="/commercial-residential-gallery">
            <CommGal />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
