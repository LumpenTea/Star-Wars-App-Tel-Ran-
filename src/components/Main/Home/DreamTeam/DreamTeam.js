import React, { useContext, useState } from 'react';
import Friend from './Friend/Friend';
import styles from './dreamTeam.module.css'
import { dreamTeam } from '../../../../utils/constants';

const DreamTeam = () => {

    const [zoomOut, setZoomOut] = useState(true);
    const [photo, setPhoto] = useState(null);

    const zoomImage = (photo, zoom) => {
        setZoomOut(zoom);
        setPhoto(photo);
    }

    if (zoomOut) {
        return (
            <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                <h2 className='col-sm-12 text-center'>Dream Team</h2>
                {dreamTeam.map((value, index) => <Friend zoomImage={zoomImage} photo={value} key={index} number={index + 1} zoom={zoomOut} />)}
                <h4 className='col-sm-12 text-center'>Click on us!</h4>
            </section>
        )
    } else {
        return (
            <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                <h2 className='col-sm-12 text-center'>Dream Team</h2>
                <Friend zoomImage={zoomImage} photo={photo} zoom={zoomOut} number='0' />
                <h4 className='col-sm-12 text-center'>Click on us!</h4>
            </section>
        )
    }
}

export default DreamTeam;