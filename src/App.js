import React, { Component } from "react";
import "./App.css";
import LandingPage from "./pages/Movies/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./pages/Movies/components/Header";
import Footer from "./pages/Movies/components/Footer";
import MovieInfo from "./pages/Movies/components/MovieInfo";
import PopularMovies from "./pages/Movies/components/PopularMovies";
import PopularShows from "./pages/TV/components/PopularShows";
import Shows from "./pages/TV/components/Shows";
import ShowInfo from "./pages/TV/components/ShowInfo";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header/>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/PopularMovies" component={PopularMovies} />
              <Route path="/About/:id" component={MovieInfo} />
              <Route path="/tv" component = {Shows}/>
              <Route path="/PopularShows" component = {PopularShows}/>
              <Route path = "/AboutTV/:id" component = {ShowInfo}/>
              <Route
                render={() => <h3>Oops seems that there's nothing in here!</h3>}
              />
            </Switch>
           <Footer/> 
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
