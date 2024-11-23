'use client'

import React, {useEffect, useState} from 'react';
import GenresComponent, {GenreType} from "@/app/components/genrescomponent/GenresComponent";


const Page = () => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTdhZDc3N2ZhNzU2ZjJhYTQwYzY0NGVhN2Q1NTkxZiIsIm5iZiI6MTczMjIxMjU1MC45ODI3OTI0LCJzdWIiOiI2NzNmNjZmNzYyYmQ3OGU1NzE1OGIzNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cUpWhgywQeE88q8NU9Goni1k5ie6IGlaax5qc4t6h6A'
        }
    };

    const [genres, setGenres] = useState<{genres: GenreType[] }>({genres:[]})

    useEffect(() => {
        const getGenres = async () => {
            await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
                .then((res) => res.json())
                .then((res) => {setGenres(res)})
        }

        getGenres().catch(e => {
            console.log(e)})
    }, []);


    return (
        <div>
            <GenresComponent genreObj={genres}/>
        </div>
    );
};

export default Page;
