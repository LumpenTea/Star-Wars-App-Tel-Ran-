import React from 'react'

class AboutMe extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  // {
  //   "id": 1,
  //   "edited": "2014-12-20T21:17:56.891Z",
  //   "name": "Luke Skywalker",
  //   "created": "2014-12-09T13:50:51.644Z",
  //   "gender": "male",
  //   "skin_color": "fair",
  //   "hair_color": "blond",
  //   "height": "172",
  //   "eye_color": "blue",
  //   "mass": "77",
  //   "homeworld": 1,
  //   "birth_year": "19BBY",
  //   "image": "luke_skywalker.jpg"
  // }

  componentDidMount() {
    fetch(`${this.props.base_url}/v1/peoples/1`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          birthYear: data.birth_year,
          gender: data.gender,
          hairColor: data.hair_color,
          eyeColor: data.eye_color,
          weight: data.mass + 'kg',
          height: data.height
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className='spinner-border text-light'></div>
      )
    } else {
      return (
        <div className='text-center'>
          <h2>Gender: {this.state.gender} </h2>
          <h2>Birthday: {this.state.birthYear}</h2>
          <h2>Hair color: {this.state.hairColor}</h2>
          <h2>Eye color: {this.state.eyeColor}</h2>
          <h2>Weight: {this.state.weight}</h2>
          <h2>Height: {this.state.height} </h2>
        </div>
      )
    }
  }
}

export default AboutMe