import React from 'react'
import { characters } from '../../../utils/constants'
import { Link } from 'react-router-dom'

const Friend = ({ friend }) => {

    let page = window.location.href.split('/')[3];
    page = page ? page : 'home';

    return (
        <Link className='col-sm-4 p-1' to={`/${page}/${friend}`}><img src={characters[friend].img} className='col-sm-12' alt='friend'></img></Link>
    )
}

export default Friend