import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardImgOverlay,
  CardFooter,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import Pagination from "../../Movies/components/Pagination";

class Shows extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      totalResults: 0,
      currentPage: 1,
    };
    this.apiKey = "92c4fb269572abaa55a47365c7b1d579"
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ shows: [...data.results], totalResults: data.total_results });
      })
  }

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ shows: [...data.results], currentPage: pageNumber });
      })
  }


  render() {
    const IMAGE = "https://image.tmdb.org/t/p/w500";

    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="container">
        <h1 className="title-rated">Top Rated Shows:</h1>
        <div className="row">
          {this.state.shows.map(show => (
            <React.Fragment key={show.id}>
              <Card inverse className="cartas-rated">

                <CardImg
                  src={IMAGE + show.backdrop_path}
                  alt="Card image"
                  className="movies"
                />
                <CardImgOverlay>
                  <CardTitle className="card-title">{show.name}</CardTitle>
                </CardImgOverlay>
                <NavLink to= {`/AboutTV/${show.id}`}>
                  <CardFooter className="footer-card">
                    <p>Rating: {show.vote_average} </p>
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

export default Shows;
