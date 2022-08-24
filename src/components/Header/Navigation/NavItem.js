import { useContext } from "react"
import { StarWarsContext } from "../../../utils/constants"

const NavItem = ({ item }) => {
    const{hero} = useContext(StarWarsContext);

    return (
        <li className='nav-item btn btn-danger mx-1' >
            <a href={`#/${item.route}/${hero}`}>{item.title}</a>
        </li>
    )
}

export default NavItem