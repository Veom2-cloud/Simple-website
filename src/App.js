import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import React from "react";
import Header from "./Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Container } from "react-bootstrap";

import Footer from "./footer";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={Homepage} exact />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Service" component={Service} />


      </Container>
      <Footer />
    </Router>
  );
}
export default App;
