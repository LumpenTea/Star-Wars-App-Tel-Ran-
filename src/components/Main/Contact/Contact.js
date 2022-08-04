import React, { useContext, useEffect, useState } from 'react'
import { StarWarsContext } from '../../../utils/constants';
import style from './contact.module.css'

const Contact = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const[planetsString, setPlanetsString] = useState('');

  const main = useContext(StarWarsContext).main;

  const getPlanets = async () => {
    if (main.checkTime('contactTime') || !localStorage.getItem('planets')) {
      const response = await fetch(`${main.base_url}/v1/planets`);
      const data = await response.json();
      setIsLoading(false);
      let planets = data.map(planet => planet.name);
      setPlanetsString(planets.toString());
      setPlanets(planets);
    } else {
      setIsLoading(false);
      setPlanets(localStorage.getItem('planets').split(','));
    }
  }

  useEffect(() => {
    getPlanets();
    if(planetsString){
      localStorage.setItem('planets', planetsString);
    }
  }, [planetsString]);

  if (isLoading) {
    return (
      <div className='spinner-border text-light'></div>
    )
  } else {
    return (
      <div className={style.grid}>
        <input type='text' placeholder='First Name' className={style.topItem}></input>
        <input type='text' placeholder='Last Name'></input>

        <select>
          {planets.map(value => <option key={value}>{value}</option>)}
        </select>

        <textarea placeholder='Your message'></textarea>
        <button className={`${style.button} btn btn-success`}>Send</button>
      </div>
    )
  }
}

export default Contact