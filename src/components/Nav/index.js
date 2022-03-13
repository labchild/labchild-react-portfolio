import React from "react";

const Nav = (props) => {
    const {
        categories,
        currentCategory,
        setCurrentCategory
    } = props;
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
                        <a href="#portfolio" onClick={() => setCurrentCategory(categories[1])}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#resume" onClick={() => setCurrentCategory(categories[2])}>
                            Resume <span class="fa fa-download"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setCurrentCategory(categories[3])}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;