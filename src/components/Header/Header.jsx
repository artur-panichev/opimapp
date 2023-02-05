import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

function Header(){

    useEffect(() => {
        const body = document.querySelector('body');
        const header = document.querySelector('header');
        const root = document.getElementById('root');
        const bodyMargin = () => {
            body.style.marginTop = header.clientHeight + 'px';
            root.style.minHeight = window.innerHeight - header.clientHeight + 'px';
        }
        
        bodyMargin();

        window.addEventListener('resize', bodyMargin);

        let displayMenu = false;

        const menuBtn = document.getElementById('mobMenu');
        menuBtn.addEventListener('click', () => {
            if(!displayMenu){
                displayMenu = !displayMenu;
                header.style.cssText = '--displayMenu: block;';
            } else{
                displayMenu = !displayMenu;
                header.style.cssText = '--displayMenu: none;'
            }
            bodyMargin();
            
        })

    })

    return(
        <header>
            <ul>
                <li>
                    <Link to="/" className="logo">Artur Panitšev</Link>
                    <button id='mobMenu'>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
                <li>
                    <Link to="/">Koduleht</Link>
                </li>
                <li>
                    <Link to="/progalused">Programmeerimise alused</Link>
                </li>
                <li>
                    <Link to="it1">IT valdkonna alusteadmised 1</Link>
                </li>
                <li>
                    <Link to="it2">IT valdkonna alusteadmised 2</Link>
                </li>
                <li>
                    <Link to="digioskused">Digioskuste kujundamine</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;