import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenreLayout metadata',
    description: 'GenreLayout metadata',
}

type Props = { children: React.ReactNode }

const GenreLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default GenreLayout;
