import React from 'react';
import NavLinkComponent from "@/app/components/nav-link/NavLinkComponent";

const Menu = () => {
    return (
        <header>
            <ul className="nav">
                <li>
                    <NavLinkComponent path={''}>home</NavLinkComponent>

                </li>
                <li>
                    <NavLinkComponent path={'/genres'}>genres</NavLinkComponent>
                </li>

            </ul>
        </header>
    );
};

export default Menu;
