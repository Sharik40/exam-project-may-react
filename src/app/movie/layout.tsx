import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MovieFirst metadata',
    description: 'MovieFirst metadata',
}

type Props = { children: React.ReactNode }

const MovieFirst = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MovieFirst;
