import React from 'react'
import styles from './friend.module.css'

const Friend = ({ photo, number, zoomImage, zoom }) => {

    let friendStyle = zoom ? `${styles.bigBorder} col-sm-12 p-2` : 'col-sm-4 p-1 ';

    if (number === 7) {
        friendStyle += styles.bottomLeft;
    }
    if (number === 9) {
        friendStyle += styles.bottomRight;
    }

    return (
        <img onClick={() => zoomImage(photo, !zoom)} src={photo} className={friendStyle} alt='friend'></img>
    )
}

export default Friend