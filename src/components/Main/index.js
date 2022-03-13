import React from "react";
import ProjectList from "../ProjectList";
import ContactForm from "../ContactForm";

const Main = (props) => {
    const { currentCategory } = props
    
    return (
        <main category={currentCategory}>
            {currentCategory !== 'Portfolio' ? (
                <ContactForm />
            ) : (
                <ProjectList />
            )}
        </main>
    )
};

export default Main;