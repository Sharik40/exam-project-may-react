'use client'
import React, {useEffect, useState} from 'react';
import MovieInfoComponent from "@/app/components/movieInfocomponent/MovieInfoComponent";
import Pagination from "@mui/material/Pagination";
import {MoviesListResult} from "@/app/models/MoviesListResult";
import {IBasicMoivesListResponce} from "@/app/models/IBasicMoivesListResponce";
import {options} from "@/app/services/api.services";



const Home = () => {
        const [currentPage, setCurrentPage] = useState<number>(1);
        const [results, setResults] = useState<MoviesListResult[]>([])


        useEffect(() => {
            const getMovies = () => {
                fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-UK&page=${currentPage}&sort_by=popularity.desc`, options)
                    .then(res => res.json())
                    .then((res: IBasicMoivesListResponce) => {
                        setCurrentPage(res.page);
                        setResults(res.results);
                    })
                    .catch(err => console.error(err));

            }

            getMovies();
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
                <h1>Popular</h1>
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
