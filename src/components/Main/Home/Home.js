import React from 'react'
import DreamTeam from './DreamTeam/DreamTeam'
import FarGalaxy from '../FarGalaxy/FarGalaxy'
import LukeSection from './LukeSection'

const Home = ({ main }) => {
    return (
        <main className='clearfix'>
            <LukeSection hero={main.homePage.hero} />
            <DreamTeam dreamTeam={main.homePage.dreamTeam} />
            <FarGalaxy base_url={main.base_url} />
        </main>
    )
}

export default Home