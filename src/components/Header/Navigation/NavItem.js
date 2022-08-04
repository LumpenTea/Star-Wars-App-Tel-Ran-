import React, { useContext } from 'react'
import { StarWarsContext } from '../../../utils/constants';

const NavItem = ({itemTitle}) => {
    
    const data = useContext(StarWarsContext);
    
    return (
        <li onClick={() => data.setPage(itemTitle)} className='nav-item btn btn-danger mx-1' > {itemTitle}</li>
    )
}

export default NavItem