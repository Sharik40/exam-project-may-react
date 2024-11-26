'use client'

import React, {useEffect, useState} from 'react';
import GenresComponent, {GenreType} from "@/app/components/genrescomponent/GenresComponent";
import {options} from "@/app/services/api.services";


const Page = () => {

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
