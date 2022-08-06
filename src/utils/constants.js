import React from 'react';
import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

export const StarWarsContext = React.createContext();
export const dreamTeam = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9];
export const base_url = 'https://sw-info-api.herokuapp.com';

export const checkTime = (time) => {
    if (localStorage.getItem(time)) {
        const thirtyDaysMiliseconds = 60 * 60 * 24 * 30 * 1000;
        const timeAndThirty = +localStorage.getItem(time) + thirtyDaysMiliseconds;
        return Date.now() > timeAndThirty;
    } else {
        localStorage.setItem(time, JSON.stringify(Date.now()));
        checkTime(time); //never get in else again until deleting time from local storage
    }
}