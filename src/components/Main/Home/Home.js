import React, { useEffect, useState } from 'react'
import mainHero from '../../../images/main.jpg'
import DreamTeam from './DreamTeam/DreamTeam'
import FarGalaxy from '../FarGalaxy/FarGalaxy'
import LukeSection from './LukeSection'

const Home = () => {

    const [hero, setHero] = useState(mainHero);

    useEffect(() => {
        console.log(hero);
    }, [hero]);

    return (
        <main className='clearfix'>
            <LukeSection hero={hero} />
            <DreamTeam setHero={setHero} hero={hero} />
            <FarGalaxy />
        </main>
    )
}

export default Home