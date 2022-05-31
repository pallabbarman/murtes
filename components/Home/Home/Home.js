import React from "react";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Experience from "../Experience/Experience";
import Team from "../Team/Team";
import Template from "../Template/Template";

const Home = () => {
    return (
        <>
            <Banner />
            <Experience />
            <Team />
            <Template />
            <Blog />
        </>
    );
};

export default Home;
