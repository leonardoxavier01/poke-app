import React, { useState } from 'react';
import logoPokemon from '@assets/images/logo.png'
import './styles.css';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {

    const [classOn, setClassOn] = useState(false);

    return (
        <header>
            <div className="container">
                <img className="logo-cyan" src={logoPokemon} alt="logo Cyan" />
                <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"}>home</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>about test</Link>
                            </li>
                            <li>
                                <a href="https://www.figma.com/file/JRMiIQLxO0QfVfux5VWZa5/Estudo-de-caso-Awari?node-id=0%3A1">design</a>
                            </li>
                            <li>
                                <a href="https://pokeapi.co/">Poke Api</a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>

        </header>

    )
}

export default HeaderMenu;