import React from 'react'
import DreamTeam from './DreamTeam/DreamTeam'
import FarGalaxy from '../FarGalaxy/FarGalaxy'
import LukeSection from './LukeSection'

const Home = () => {
    
    return (
        <main className='clearfix'>
            <LukeSection />
            <DreamTeam  />
            <FarGalaxy />
        </main>
    )
}

export default Home