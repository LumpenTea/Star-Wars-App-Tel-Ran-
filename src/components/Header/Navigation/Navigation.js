import React, { useContext } from 'react'
import { StarWarsContext } from '../../../utils/constants';
import NavItem from './NavItem'

const Navigation = () => {
    
    const navItems = useContext(StarWarsContext).navItems;

    return (
        <nav className='fixed-top mt-2 ms-4'>
            <ul className='nav'>
                {navItems.map(item => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation