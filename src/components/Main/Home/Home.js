import React from 'react'
import DreamTeam from './DreamTeam'
import FarGalaxy from '../FarGalaxy'
import LukeSection from './LukeSection'

const Home = ({ hero, setHero }) => {
    return (
        <main className='clearfix'>
            <LukeSection hero={hero} />
            <DreamTeam setHero={setHero} hero={hero} />
            <FarGalaxy />
        </main>
    )
}

export default Home