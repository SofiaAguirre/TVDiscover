import React, { useState, useEffect } from 'react';
import Back from "./back";

function MovieInfo({ match }) {
    const IMAGE = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        fetchMovie();
    }, []);
    const [movie, setMovie] = useState({});
    const fetchMovie = async () => {
        const fetchMovie = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=92c4fb269572abaa55a47365c7b1d579&language=en-US`)
        const movie = await fetchMovie.json();
        setMovie(movie);
        console.log(movie)
    };
    return (
        <div className="container">
            <Back/>
            <p className="movieTitle">{movie.title}</p>
            <div className="row">
                <div className="col-lg-6">
                    <img src={IMAGE + movie.poster_path} alt="movie-poster" className="movieDetail" />
                </div>
                <div className="col-lg-6">
                    <p className="overview">{movie.overview}</p>
                </div>
            </div>
            <p className ="release-date">Release Date: {movie.release_date}</p>
        </div>
    )

}


export default MovieInfo