import styles from './farGalaxy.module.css';
import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../../../utils/constants';

const FarGalaxy = () => {

    const [openingCrawl, setOpeningCrawl] = useState('Loading...');
    const base_url = useContext(StarWarsContext).main.base_url;

    const getFilmCrawl = async () => {
        const film = Math.floor((Math.random() * 6) + 1);
        const response = await fetch(`${base_url}/v1/films/${film}`);
        const data = await response.json();
        setOpeningCrawl(data.opening_crawl);
        sessionStorage.setItem('opening_crawl', data.opening_crawl);
    }

    
    useEffect(() => {
        let text = sessionStorage.getItem('opening_crawl');
        if (text) {
            setOpeningCrawl(text);
        } else {
            getFilmCrawl();
        }
    }, []);

    return (
        <p className={styles.farGalaxy}>{openingCrawl}</p>
    )
}

export default FarGalaxy;