import Navigation from "./Navigation/Navigation";
import styles from './header.module.css'

const Header = ({ changePage, navItems }) => {
    return (
        <header className={styles.header}>
            <Navigation changePage={changePage} navItems={navItems} />
            <h1 className='text-center py-4'>Luke Skywalker</h1>
        </header>
    )
}

export default Header;