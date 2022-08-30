import React from 'react'
import DreamTeam from './DreamTeam'
import FarGalaxy from '../FarGalaxy'
import LukeSection from './LukeSection'
import { useParams } from 'react-router-dom'

const Home = ({ setHero }) => {

    let hero = useParams().hero;
    hero = hero ? hero : 'luke';

    return (
        <main className='clearfix'>
            <LukeSection hero={hero} />
            <DreamTeam setHero={setHero} hero={hero} />
            <FarGalaxy />
        </main>
    )
}

export default Home