import React from 'react'
import styles from './starWarsInfo.module.css'

const StarWars = ({ starWarsPage }) => {
    return (
        <div className={styles.info}>
            <p>{starWarsPage.StarWarsInfo}</p>
        </div>
    )
}

export default StarWars