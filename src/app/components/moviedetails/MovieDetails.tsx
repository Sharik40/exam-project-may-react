'use client'

import React from 'react';
import {MoviesListResult} from "@/app/page";


const MovieDetails = ({ movie }: { movie: MoviesListResult }) => {


    console.log(movie)

    return (
        <div className="movie-details-page">
            <h1>Hello</h1>
        </div>
    );
};

export default MovieDetails;
