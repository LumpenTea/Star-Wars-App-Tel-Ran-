import React, { useContext } from "react";
import { StarWarsContext } from "../../utils/constants";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import StarWars from "./StarWarsInfo/StarWars";

const Main = () => {

    const data = useContext(StarWarsContext);

    switch (data.page) {
        case data.navItems[1].route:
            return <AboutMe />
        case data.navItems[2].route:
            return <StarWars />
        case data.navItems[3].route:
            return <Contact />
        default: return <Home hero={data.hero} setHero={data.setHero} />
    }
}

export default Main;