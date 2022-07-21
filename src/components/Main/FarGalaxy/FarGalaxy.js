import styles from './farGalaxy.module.css';
import React from 'react';

class FarGalaxy extends React.Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         opening_crawl: 'Loading...'
      }
    }

    getFilmCrawl = async() => {
        const film = Math.floor((Math.random() * 6) + 1);
        const response = await fetch(`${this.props.base_url}/v1/films/${film}`);
        const data = await response.json();
        this.setState({opening_crawl: data.opening_crawl});
        sessionStorage.setItem('opening_crawl', this.state.opening_crawl);
    }

    componentDidMount(){
        let text = sessionStorage.getItem('opening_crawl');
        if(text){
            this.setState({opening_crawl: text});
        } else {
            this.getFilmCrawl();
        }
    }
    
    render() {
        return (
            <p className={styles.farGalaxy}>{this.state.opening_crawl}</p>
        )
    }
}

export default FarGalaxy;