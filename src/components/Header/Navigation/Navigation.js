import React from 'react'
import NavItem from './NavItem'

const Navigation = ({ changePage, navItems }) => {
    return (
        <nav className='fixed-top mt-2 ms-4'>
            <ul className='nav'>
                {navItems.map(item => <NavItem itemTitle={item} key={item} changePage={changePage} />)}
            </ul>
        </nav>
    )
}

export default Navigation