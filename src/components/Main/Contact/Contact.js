import React, { useContext, useEffect, useState } from 'react'
import { FunctionalContext, StarWarsContext } from '../../../utils/constants';
import style from './contact.module.css'

const Contact = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);

  const functional = useContext(StarWarsContext);

  const getPlanets = async () => {
    if (functional.main.checkTime('contactTime') || !localStorage.getItem('planets')) {
      const response = await fetch(`${functional.main.base_url}/v1/planets`);
      const data = await response.json();
      setIsLoading(false);
      setPlanets(data.map(planet => planet.name));
    } else {
      setIsLoading(false);
      setPlanets(localStorage.getItem('planets').split(','));
    }
  }

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    if(!isLoading){
      localStorage.setItem('planets', planets.toString());
    }
  }, [isLoading]);

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