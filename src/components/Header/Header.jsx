import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
                    <Link to="/" className="logo">Tarkvaraarendaja õpimapp</Link>
                    <button id='mobMenu'>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </li>
                <li>
                    <Link to="/">Avaleht</Link>
                </li>
                <li>
                    <Link to="/pohiopingud">Põhiõpingud <FontAwesomeIcon className='ico' icon={faChevronDown}/></Link>
                    <ul>
                        <li><Link to="/progalused">Progremmeerimise alused</Link></li>
                        <li><Link to="/it1">IT valdkonna alusteadmised 1</Link></li>
                        <li><Link to="/it2">IT valdkonna alusteadmised 2</Link></li>
                        <li><Link to="/digioskused">Digioskuste kujundamine</Link></li>
                        <li><Link to="/andmebaasid">Andmebaasisüsteemid</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="valikopingud">Valikõpingud</Link>
                </li>
                <li>
                    <Link to="ettevõtepraktika">Ettevõtepraktika</Link>
                </li>
                {/* <li>
                    <Link to="digioskused">Digioskuste kujundamine</Link>
                </li> */}
            </ul>
        </header>
    );
}

export default Header;