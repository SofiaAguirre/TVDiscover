import React, { useState, useEffect } from 'react';
import Back from "./back";

function ShowInfo({ match }) {
    const IMAGE = "https://image.tmdb.org/t/p/w500";
    useEffect(() => {
        fetchShow();
    }, []);
    const [show, setShow] = useState({});
    const fetchShow = async () => {
        const fetchShow = await fetch(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=92c4fb269572abaa55a47365c7b1d579&language=en-US`)
        const show = await fetchShow.json();
        setShow(show);
        console.log(show)
    };
    return (
        <div className="container">
            <Back/>
            <p className="movieTitle">{show.name}</p>
            <div className="row">
                <div className="col-lg-6">
                    <img src={IMAGE + show.poster_path} alt="movie-poster" className="movieDetail" />
                </div>
                <div className="col-lg-6">
                    <p className="overview">{show.overview}</p>
                </div>
            </div>
            <p className ="release-date">Release Date: {show.first_air_date}</p>
        </div>
    )

}


export default ShowInfo