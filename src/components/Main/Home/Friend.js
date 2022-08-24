import React, { useContext } from 'react'
import { characters, StarWarsContext } from '../../../utils/constants'

const Friend = ({ friend }) => {

    const data = useContext(StarWarsContext);
    return (
        <a className='col-sm-4 p-1' href={`#/${data.page}/${data.hero}`}><img onClick={() => data.setHero(friend)} src={characters[friend].img} className='col-sm-12' alt='friend'></img></a>
    )
}

export default Friend