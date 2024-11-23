'use client';
import React, {FC, ReactNode} from 'react';
import Link from "next/link";

type NavLinkComponentProps = {
    children: ReactNode;
    path: string;
    queryId?: number;
    queryName?: string;
}

const NavLinkComponent: FC<NavLinkComponentProps> = ({path, children, queryId, queryName}) => {
    return (
        <>
            <Link className="li-style" href={path+'/'+ (queryId ? queryId : '') + '/' + (queryName ? queryName : '')}>{children}</Link>
        </>
    );
};

export default NavLinkComponent;
