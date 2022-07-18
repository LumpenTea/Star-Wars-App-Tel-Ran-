import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className='row align-items-center m-0 w-100'>
            <div className='btn btn-danger col-sm-2 offset-2 mx-auto'>
                <p className='m-0'>Send me an <span className={`${styles.email} text-uppercase`}>email</span></p>
            </div>
        </footer>
    )
}

export default Footer;