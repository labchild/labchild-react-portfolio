import React from "react";

const Nav = () => {
    return (
        <header className="flex-row">
            <h2>
                <a href="/">
                    labchild
                    <span>Lelah Bates Childs</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;