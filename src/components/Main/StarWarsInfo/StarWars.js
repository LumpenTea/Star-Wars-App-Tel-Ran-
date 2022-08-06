import React, { useContext } from 'react'
import { StarWarsContext } from '../../../utils/constants'
import styles from './starWarsInfo.module.css'

const StarWars = () => {
    
    const data = useContext(StarWarsContext);
    
    return (
        <div className={styles.info}>
            <p>{data.starWarsInfo}</p>
        </div>
    )
}

export default StarWars