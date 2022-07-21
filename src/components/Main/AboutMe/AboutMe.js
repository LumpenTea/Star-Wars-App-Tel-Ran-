import React from 'react'

class AboutMe extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  //Creating component//
  //Checking if local storage have time
  //If have not time -> set time -> set info from server
  
  //Using Component//
  //Checking time with function from units constants
  //If return true -> set info from server -> set new time
  //if false -> set info to state from local storage -> set new time

  getHeroData = async () => {
    if (this.props.checkTime() || !localStorage.getItem('info')) {
      const response = await fetch(`${this.props.base_url}/v1/peoples/1`);
      const data = await response.json();
      this.setState({
        isLoading: false,
        info: {
          birthYear: data.birth_year,
          gender: data.gender,
          hairColor: data.hair_color,
          eyeColor: data.eye_color,
          weight: data.mass + 'kg',
          height: data.height
        }
      }, () => localStorage.setItem('info', JSON.stringify(this.state.info)))
    } else {
      const info = JSON.parse(localStorage.getItem('info'));
      this.setState({isLoading: false, info: info});
    }
  }

  componentDidMount() {
    this.getHeroData();
  }

  render() {

    if (this.state.isLoading) {
      return (
        <div className='spinner-border text-light'></div>
      )
    } else {
      return (
        <div className='text-center'>
          <h2>Gender: {this.state.info.gender} </h2>
          <h2>Birthday: {this.state.info.birthYear}</h2>
          <h2>Hair color: {this.state.info.hairColor}</h2>
          <h2>Eye color: {this.state.info.eyeColor}</h2>
          <h2>Weight: {this.state.info.weight}</h2>
          <h2>Height: {this.state.info.height} </h2>
        </div>
      )
    }
  }
}

export default AboutMe