import React from 'react'
import style from './contact.module.css'

class Contact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  getPlanets = async () => {
    if (this.props.checkTime() || !localStorage.getItem('planets')) {
      const response = await fetch(`${this.props.base_url}/v1/planets`);
      const data = await response.json();
      this.setState({isLoading: false, planets: data.map(planet => planet.name)}, () => localStorage.setItem('planets', this.state.planets.toString()));
    } else {
      this.setState({isLoading: false, planets: localStorage.getItem('planets').split(',')})
    }
  }

  componentDidMount() {
    this.getPlanets();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className='spinner-border text-light'></div>
      )
    } else {
      return (
        <div className={style.grid}>
          <input type='text' placeholder='First Name' className={style.topItem}></input>
          <input type='text' placeholder='Last Name'></input>

          <select>
            {this.state.planets.map(value => <option key={value}>{value}</option>)}
          </select>

          <textarea placeholder='Your message'></textarea>
          <button className={`${style.button} btn btn-success`}>Send</button>
        </div>
      )
    }
  }
}

export default Contact