import React, { useContext } from 'react'
import { characters, StarWarsContext } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const Friend = ({ friend }) => {

    let page = window.location.href.split('/')[3];
    page = page ? page : 'home';
    const {setHero, setPage} = useContext(StarWarsContext);

    return (
        <Link className='col-sm-4 p-1' to={`/${page}/${friend}`}><img onClick={() => {setHero(friend); setPage(page)}} src={characters[friend].img} className='col-sm-12' alt='friend'></img></Link>
    )
}

export default Friend