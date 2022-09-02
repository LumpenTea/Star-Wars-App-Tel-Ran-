import Navigation from "./Navigation";
import styles from './header.module.css';
import { characters, StarWarsContext } from "../../utils/constants";
import { useContext } from "react";

const Header = () => {

    const { hero } = useContext(StarWarsContext);

    return (
        <header className={styles.header}>
            <Navigation />
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    )
}

export default Header;