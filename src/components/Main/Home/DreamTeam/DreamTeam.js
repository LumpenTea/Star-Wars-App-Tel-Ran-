import React, { useContext, useState } from 'react';
import Friend from './Friend/Friend';
import styles from './dreamTeam.module.css'
import { StarWarsContext } from '../../../../utils/constants';

const DreamTeam = () => {

    const [zoomOut, setZoomOut] = useState(true);
    const [photo, setPhoto] = useState(null);

    const data = useContext(StarWarsContext).main.homePage;

    const zoomImage = (photo, zoom) => {
        setZoomOut(zoom);
        setPhoto(photo);
    }

    if (zoomOut) {
        return (
            <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                <h2 className='col-sm-12 text-center'>Dream Team</h2>
                {data.dreamTeam.map((value, index) => <Friend zoomImage={zoomImage} photo={value} key={index} number={index + 1} zoom={zoomOut} />)}
            </section>
        )
    } else {
        return (
            <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                <h2 className='col-sm-12 text-center'>Dream Team</h2>
                <Friend zoomImage={zoomImage} photo={photo} zoom={zoomOut} number='0' />
            </section>
        )
    }
}

export default DreamTeam;