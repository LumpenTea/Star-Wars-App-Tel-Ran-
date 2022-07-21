import React from 'react';
import Friend from './Friend/Friend';
import styles from './dreamTeam.module.css'

class DreamTeam extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            zoomOut: true,
            photo: null
        }
    }

    zoomImage = (photo, zoom) => {
        this.setState({
            zoomOut: zoom,
            photo: photo
        })
    }

    render() {
        if (this.state.zoomOut) {
            return (
                <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                    <h2 className='col-sm-12 text-center'>Dream Team</h2>
                    {this.props.dreamTeam.map((value, index) => <Friend zoomImage={this.zoomImage} photo={value} key={index} number={index + 1} zoom={this.state.zoomOut} />)}
                </section>
            )
        } else {
            return(
                <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
                    <h2 className='col-sm-12 text-center'>Dream Team</h2>
                    <Friend zoomImage={this.zoomImage} photo={this.state.photo} zoom={this.state.zoomOut} number='0'/>
                </section>
            )
        }
    }
}

export default DreamTeam;