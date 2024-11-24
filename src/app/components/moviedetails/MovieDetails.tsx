'use client'

import React from 'react';
import {useRouter} from "next/router";

const MovieDetails = () => {

    const router = useRouter();
    const { query } = router;

    return (
        <div className="movie-details-page">
            <h1>{query.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${query.poster_path}`} alt='qwf'/>
            <p>{query.overview}</p>
            <p>Release Date: {query.release_date}</p>
            <p>Rating: {query.vote_average}</p>
        </div>
    );
};

export default MovieDetails;
