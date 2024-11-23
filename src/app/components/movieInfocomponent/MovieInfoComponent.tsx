import React from 'react';
import {MoviesListResult} from "@/app/page";


const MovieInfoComponent = ({movie} :{movie: MoviesListResult}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className="movie-box">
            <img src={imageUrl+movie.poster_path} alt={movie.title}/>
            <p>{movie.title}</p>
            <div>{movie.overview}</div>
        </div>
    );
};

export default MovieInfoComponent;
