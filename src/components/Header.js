const Header = () =>{
    return(
        <header>
            <nav className='fixed-top mt-2 ms-4'>
                <ul className='nav'>
                    <li className='nav-item btn btn-danger mx-1'>Home</li>
                    <li className='nav-item btn btn-danger mx-1'>About</li>
                    <li className='nav-item btn btn-danger mx-1'>Star wars</li>
                    <li className='nav-item btn btn-danger mx-1'>Contact</li>
                </ul>
            </nav>
            <h1 className='text-center py-4'>Luke Skywalker</h1>
        </header>
    )
}

export default Header;