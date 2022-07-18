import React from 'react'
import DreamTeam from './DreamTeam/DreamTeam'
import FarGalaxy from '../FarGalaxy/FarGalaxy'
import LukeSection from './LukeSection'

const Home = ({ homePage }) => {
    return (
        <main className='clearfix'>
            <LukeSection hero={homePage.hero} />
            <DreamTeam dreamTeam={homePage.dreamTeam} />
            <FarGalaxy />
        </main>
    )
}

export default Home