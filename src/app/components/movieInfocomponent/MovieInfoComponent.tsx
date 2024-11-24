'use client'

import React from 'react';
import {MoviesListResult} from "@/app/page";
import {useRouter} from "next/router";


const MovieInfoComponent = ({movie} :{movie: MoviesListResult}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500`;

    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: `/movie/${movie.id}`,
            query: { ...movie },
        }).catch(e => {
            console.log(e)});
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
