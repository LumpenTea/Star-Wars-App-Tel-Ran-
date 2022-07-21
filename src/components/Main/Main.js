import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import StarWars from "./StarWarsInfo/StarWars";

const Main = ({ currentPage, main, navItems }) => {

    switch (currentPage) {
        case navItems[1]:
            return <AboutMe base_url={main.base_url} checkTime={main.functions.checkTime} />
        case navItems[2]:
            return <StarWars starWarsPage={main.starWarsPage} />
        case navItems[3]:
            return <Contact base_url={main.base_url} checkTime={main.functions.checkTime} />
        default: return <Home main={main} />
    }
}

export default Main;