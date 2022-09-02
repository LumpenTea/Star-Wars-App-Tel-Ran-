import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { characters, checkTime, StarWarsContext } from '../../utils/constants';
import style from './about.module.css'

const AboutMe = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [infoString, setInfoString] = useState('');
  const { hero } = useParams();
  const { setHero } = useContext(StarWarsContext);

  //Creating component//
  //Checking if local storage have time
  //If have not time -> set time -> set info from server

  //Using Component//
  //Checking time with function from units constants
  //If return true -> set info from server -> set new time
  //if false -> set info to state from local storage -> set new time

  const getHeroData = async () => {
    if (checkTime('aboutTime', hero) || !localStorage.getItem(`${hero}`)) {
      const response = await fetch(characters[hero].url);
      const data = await response.json();
      let infoData = {
        birthYear: data.birth_year,
        gender: data.gender,
        hairColor: data.hair_color,
        eyeColor: data.eye_color,
        weight: data.mass + 'kg',
        height: data.height
      }
      setInfoString(JSON.stringify(infoData));
      setInfo(infoData);
      setIsLoading(false);
    } else {
      const info = JSON.parse(localStorage.getItem(`${hero}`));
      setIsLoading(false);
      setInfo(info);
    }
  }

  useEffect(() => {
    setHero(hero);
    getHeroData();
    if (infoString) {
      localStorage.setItem(`${hero}`, infoString);
    }
  }, [infoString, hero]);

  if (isLoading) {
    return (
      <div className='spinner-border text-light'></div>
    )
  } else {
    return (
      <div className='d-flex justify-content-center'>
        <div className={style.about}>
          <h2>Gender: {info.gender} </h2>
          <h2>Birthday: {info.birthYear}</h2>
          <h2>Hair color: {info.hairColor}</h2>
          <h2>Eye color: {info.eyeColor}</h2>
          <h2>Weight: {info.weight}</h2>
          <h2>Height: {info.height} </h2>
        </div>
      </div>
    )
  }
}

export default AboutMe