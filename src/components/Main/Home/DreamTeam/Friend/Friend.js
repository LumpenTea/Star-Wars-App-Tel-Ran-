import React from 'react'

const Friend = ({ photo, updateHero }) => {

    return (
        <img onClick={() => updateHero(photo)} src={photo} className='col-sm-4 p-1' alt='friend'></img>
    )
}

export default Friend