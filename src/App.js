import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: this.props.appData.header.navItems[0]
    }
  }

  changePage = page => {
    this.setState({ currentPage: page });
  }


  render() {
    return (
      <div className='container-fluid'>
        <Header changePage={this.changePage} navItems={this.props.appData.header.navItems} />
        <Main currentPage={this.state.currentPage} main={this.props.appData.main} navItems={this.props.appData.header.navItems} />
        <Footer />
      </div>
    );
  }
}

export default App;
