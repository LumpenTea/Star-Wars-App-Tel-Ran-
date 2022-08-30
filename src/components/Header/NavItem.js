import { useContext } from "react"
import { StarWarsContext } from "../../utils/constants"
import { Link } from 'react-router-dom'

const NavItem = ({ item }) => {
    const { hero } = useContext(StarWarsContext);

    return (
        <li className='nav-item btn btn-danger mx-1' >
            <Link to={`${item.route}/${hero}`}>{item.title}</Link>
        </li>
    )
}

export default NavItem