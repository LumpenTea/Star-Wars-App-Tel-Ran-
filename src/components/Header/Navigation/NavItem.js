const NavItem = ({ item }) => {
    return (
        <li className='nav-item btn btn-danger mx-1' >
            <a href={`#/${item.route}`}>{item.title}</a>
        </li>
    )
}

export default NavItem