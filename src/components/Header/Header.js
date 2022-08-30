import Navigation from "./Navigation";
import styles from './header.module.css'
import { useContext } from "react";
import { characters, StarWarsContext } from "../../utils/constants";
import { Route, Routes } from "react-router-dom";

const Header = () => {

    const { navItems } = useContext(StarWarsContext);
    
    const getPathes = () => {
        const pathes = [];
        const keys = Object.keys(characters);
        for(let i = 0; i < navItems.length; i++){
            for(let j = 0; j < keys.length; j++){
                pathes.push(`${navItems[i].route}/${keys[j]}`);
            }
        }
        return pathes;
    }
    
    return (
        <header className={styles.header}>
            <Navigation />
            <Routes>
                {getPathes().map(path => <Route path={path} element={<h1 className="text-center py-4">{characters[path.split('/')[1]].name}</h1>} />)}
            </Routes>
        </header>
    )
}

export default Header;