'use client'

import React from 'react';
import {MoviesListResult} from "@/app/page";
import {useRouter } from "next/navigation";


const MovieInfoComponent = ({movie} :{movie: MoviesListResult}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500`;
    const router = useRouter();


    const handleClick = () => {
        router.push(`/movie/${movie.id}`);
    };

    return (
        <div className="movie-box" onClick={handleClick}>
            <img src={imageUrl+movie.poster_path} alt={movie.title}/>
            <p>{movie.title}</p>
            <div>{movie.overview}</div>
        </div>
    );
};

export default MovieInfoComponent;
