import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movie metadata',
    description: 'Movie metadata',
}

type Props = { children: React.ReactNode }

const Movie = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default Movie;
