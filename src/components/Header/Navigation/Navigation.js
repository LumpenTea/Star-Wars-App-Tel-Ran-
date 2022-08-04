import React, { useContext } from 'react'
import { StarWarsContext } from '../../../utils/constants';
import NavItem from './NavItem'

const Navigation = () => {
    
    const data = useContext(StarWarsContext);

    return (
        <nav className='fixed-top mt-2 ms-4'>
            <ul className='nav'>
                {data.navItems.map(item => <NavItem key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation