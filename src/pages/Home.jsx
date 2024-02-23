import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full">
            {/* This first section is the first hero section that discusses the recipe search system */}
            <section className="hero">
                <div className='header_container'>
                    <header className="hero_header">
                        <h1>
                            Check Out Our Recipe Search System!
                        </h1>
                        <p>
                            This React application uses Node.js to process the backend. It also uses Edamam`s Recipe API to help you
                            search for recipes based of many factors. Check it out below!
                        </p>
                        <Link to='/recipes' className="link"><button className="hero_btn">Recipes</button></Link>
                    </header>
                </div>
            </section>

            {/* Small section to separate the hero sections */}
            <div className="bar">
                <h1>Search For Over 2.3 Million Recipes!</h1>
            </div>

            {/* This is the second hero that discuesses pasta to the user */}
            <section className="pasta_hero">
                <div className="pasta_hero_container">
                    <header className="pasta_hero_header">
                        <h1>
                            Are You A Fan of Pasta?
                        </h1>
                        <p>
                            Check out all the pasta recipes that are listed in Edamam`s Recipe API. There is a large selection such as Frittata Pasta,
                             Tomato & Nectarine Pasta, Tofu Pesto Pasta, Cauliflower Pasta, and more! Click the button and just type in pasta
                        </p>
                        <Link to='/recipes' className="link"><button className="hero_btn">Recipes</button></Link>
                    </header>
                </div>
            </section>
        </div>
    );
};

export default Home;