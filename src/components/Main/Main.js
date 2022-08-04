import React, { useContext } from "react";
import { StarWarsContext } from "../../utils/constants";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import StarWars from "./StarWarsInfo/StarWars";

const Main = () => {

    const data = useContext(StarWarsContext);

    switch (data.page) {
        case data.navItems[1]:
            return <AboutMe />
        case data.navItems[2]:
            return <StarWars />
        case data.navItems[3]:
            return <Contact />
        default: return <Home />
    }
}

export default Main;