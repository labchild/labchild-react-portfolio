import React from "react";

const Nav = (props) => {
    const {
        currentSection,
        handleSectionSelect
    } = props;
    return (
        <header className="d-flex flex-row justify-content-between">
            <h2 className="lead font-weight-bold">
                <a href="/" 
                onClick={() => { handleSectionSelect('Home') }}
                className="text-secondary nav-link">
                    Lelah Bates Childs
                </a>
            </h2>
            <nav>
                <ul className="d-flex flex-row">
                    <li>
                        <a
                            href="#about"
                            onClick={() => { handleSectionSelect('About') }}
                            className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            onClick={() => { handleSectionSelect('Portfolio') }}
                            className={currentSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Resume"
                            onClick={() => { handleSectionSelect('Resume') }}
                            className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume <span class="fa fa-download"></span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => { handleSectionSelect('Contact') }}
                            className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Nav;