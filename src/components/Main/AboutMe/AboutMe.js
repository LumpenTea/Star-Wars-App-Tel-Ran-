import React, { useContext, useEffect, useState } from 'react'
import { StarWarsContext } from '../../../utils/constants';

const AboutMe = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  const functional = useContext(StarWarsContext);

  //Creating component//
  //Checking if local storage have time
  //If have not time -> set time -> set info from server

  //Using Component//
  //Checking time with function from units constants
  //If return true -> set info from server -> set new time
  //if false -> set info to state from local storage -> set new time

  const getHeroData = async () => {
    if (functional.main.checkTime('aboutTime') || !localStorage.getItem('info')) {
      const response = await fetch(`${functional.main.base_url}/v1/peoples/1`);
      const data = await response.json();
      setInfo({
        birthYear: data.birth_year,
        gender: data.gender,
        hairColor: data.hair_color,
        eyeColor: data.eye_color,
        weight: data.mass + 'kg',
        height: data.height
      });
      setIsLoading(false);
    } else {
      const info = JSON.parse(localStorage.getItem('info'));
      setIsLoading(false);
      setInfo(info);
    }
  }

  useEffect(() => {
    getHeroData();
  }, []);

  useEffect(() => {
    if(!isLoading){
      localStorage.setItem('info', JSON.stringify(info));
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className='spinner-border text-light'></div>
    )
  } else {
    return (
      <div className='text-center'>
        <h2>Gender: {info.gender} </h2>
        <h2>Birthday: {info.birthYear}</h2>
        <h2>Hair color: {info.hairColor}</h2>
        <h2>Eye color: {info.eyeColor}</h2>
        <h2>Weight: {info.weight}</h2>
        <h2>Height: {info.height} </h2>
      </div>
    )
  }
}

export default AboutMe