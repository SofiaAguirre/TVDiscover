import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardFooter,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Pagination from "./Pagination";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      totalResults: 0,
      currentPage: 1,
    };
    this.apiKey = "92c4fb269572abaa55a47365c7b1d579"
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], totalResults: data.total_results });
      })
  }

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      })
  }


  render() {
    const IMAGE = "https://image.tmdb.org/t/p/w500";

    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="container">
        <h1 className="title-rated">Popular Movies:</h1>
        <div className="row">
          {this.state.movies.map(movie => (
            <React.Fragment key={movie.id}>
              <Card inverse className="cartas">
                <CardImg
                  src={IMAGE + movie.backdrop_path}
                  alt="Card image"
                  className="movies"
                />
                <CardImgOverlay>
                  <CardTitle className="card-title">{movie.title}</CardTitle>
                </CardImgOverlay>
                <NavLink to= {`/About/${movie.id}`}>
                  <CardFooter className="footer-card">
                    <p>Click here for Details</p>
                  </CardFooter>
                </NavLink>
              </Card>
            </React.Fragment>
          ))}
        </div>
        {this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ""}
      </div>
    );
  }
}

export default Movies;
