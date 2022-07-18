import React from 'react'
import styles from './friend.module.css'

const Friend = ({ photo, number }) => {

    let friendStyle = 'col-sm-4 p-1 '

    if (number === 7) {
        friendStyle += styles.bottomLeft;
    }
    if (number === 9) {
        friendStyle += styles.bottomRight;
    }

    return (
        <img src={photo} className={friendStyle} alt='friend'></img>
    )
}

export default Friend