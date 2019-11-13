import React, { Component } from "react";
import Shows from "./components/Shows";
import Footer from "../Movies/components/Footer";

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Shows />
        </main>
        <footer>
          <Footer/>
        </footer>
      </React.Fragment>
    );
  }
}

export default LandingPage;
