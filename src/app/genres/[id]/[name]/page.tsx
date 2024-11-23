'use client'

import React, {FC, useEffect, useState} from 'react';
import {MoviesListRes, MoviesListResult} from "@/app/page";
import Pagination from "@mui/material/Pagination";
import MovieInfoComponent from "@/app/components/movieInfocomponent/MovieInfoComponent";

type Params = { id: string, name: string }


type MyProps = {
    params: Promise<Params>;
}


const Page : FC<MyProps> =  ({ params }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [results, setResults] = useState<MoviesListResult[]>([])
    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTdhZDc3N2ZhNzU2ZjJhYTQwYzY0NGVhN2Q1NTkxZiIsIm5iZiI6MTczMjIxMjU1MC45ODI3OTI0LCJzdWIiOiI2NzNmNjZmNzYyYmQ3OGU1NzE1OGIzNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cUpWhgywQeE88q8NU9Goni1k5ie6IGlaax5qc4t6h6A'
        }
    };


    useEffect(() => {
        const resolveParams = async () => {
            const resolvedParams = await params;
            setId(resolvedParams.id);
            setName(resolvedParams.name);
        };

        resolveParams().catch(e => {
            console.log(e)});
    }, [params]);


    useEffect(() => {
        const getGenrePage = () => {
            if (!id) return;
            fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${currentPage}`, options)
                .then(res => res.json()).then((res: MoviesListRes) => {
                setCurrentPage(res.page);
                setResults(res.results);
            }).catch(err => console.error(err));
        }

        getGenrePage();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id, currentPage]);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <>
            <h1>{name}</h1>
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
        </>
    );
};


export default Page;
