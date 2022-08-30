import React, { useContext } from "react";
import { StarWarsContext } from "../../utils/constants";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Home from "./Home/Home";
import StarWars from "./StarWars";
import { Routes, Route } from 'react-router-dom';
import Error from "./Error";

const Main = () => {

    const {navItems, setHero} = useContext(StarWarsContext);

    return(
        <Routes>
            {['/', '/:hero', navItems[0].route, `/${navItems[0].route}/:hero`].map(element => <Route path={element} key={element} element={<Home setHero={setHero} />} />)}
            <Route path={`${navItems[1].route}/:hero`} element={<AboutMe />} />
            <Route path={`${navItems[2].route}/:hero`} element={<StarWars />} />
            <Route path={`${navItems[3].route}/:hero`} element={<Contact />} />
            <Route path={'*'} element={<Error />} />
        </Routes>
    )
}

export default Main;