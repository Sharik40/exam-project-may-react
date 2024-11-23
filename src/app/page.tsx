'use client'
import React, {useEffect, useState} from 'react';
import MovieInfoComponent from "@/app/components/movieInfocomponent/MovieInfoComponent";
import Pagination from "@mui/material/Pagination";


export type MoviesListResult = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MoviesListRes {
    page: number,
    results: MoviesListResult[],
    total_pages: number,
    total_results: number
}

const Home = () => {


        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTdhZDc3N2ZhNzU2ZjJhYTQwYzY0NGVhN2Q1NTkxZiIsIm5iZiI6MTczMjIxMjU1MC45ODI3OTI0LCJzdWIiOiI2NzNmNjZmNzYyYmQ3OGU1NzE1OGIzNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cUpWhgywQeE88q8NU9Goni1k5ie6IGlaax5qc4t6h6A'
            }
        };


        const [currentPage, setCurrentPage] = useState<number>(1);
        const [results, setResults] = useState<MoviesListResult[]>([])


        useEffect(() => {

            const kek = () => {
                fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-UK&page=${currentPage}&sort_by=popularity.desc`, options)
                    .then(res => res.json())
                    .then((res: MoviesListRes) => {
                        setCurrentPage(res.page);
                        setResults(res.results);
                    })
                    .catch(err => console.error(err));

            }

            kek();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, [currentPage]);

        const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
            setCurrentPage(value);
        };

        return (

            <div className="movies-page">
                <Pagination
                    count={200}
                    page={currentPage}
                    onChange={handleChange}
                    color="primary"
                    className='pagination-top'
                />
                {
                    results.map(movie => (
                        <MovieInfoComponent key={movie.id} movie={movie}/>
                    ))
                }
                <Pagination
                    count={200}
                    page={currentPage}
                    onChange={handleChange}
                    color="primary"
                />
            </div>
        );
    }
;

export default Home;
