import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenresLayout metadata',
    description: ' metadata',
}

type Props = { children: React.ReactNode }

const GenresLayout = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default GenresLayout;
