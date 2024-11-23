import React, {FC} from 'react';
import NavLinkComponent from "@/app/components/nav-link/NavLinkComponent";

export type GenreType = {
    id: number,
    name: string
}

export type Props = {
    genreObj : {genres: GenreType[]}
}

const GenresComponent:FC<Props> = ({genreObj: {genres}}) => {
    return (
        <div>
            {
                genres.map((genre) => <NavLinkComponent path='/genres' queryId={genre.id} queryName={genre.name} key={genre.id}><div>{genre.name}</div></NavLinkComponent>)
            }
        </div>
    );
};

export default GenresComponent;
