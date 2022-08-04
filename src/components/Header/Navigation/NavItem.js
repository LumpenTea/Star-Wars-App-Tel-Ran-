import React, { useContext } from 'react'
import { StarWarsContext } from '../../../utils/constants';

const NavItem = ({ itemTitle }) => {

    const setPage = useContext(StarWarsContext).setPage;

    return (
        <li onClick={() => setPage(itemTitle)} className='nav-item btn btn-danger mx-1' >{itemTitle}</li>
    )
}

export default NavItem