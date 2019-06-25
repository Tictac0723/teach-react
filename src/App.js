import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//import the different components you want to use here.
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Gif/Gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      results: []
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState.searchTerm, this.state.searchTerm)
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.handleSubmit();
    }
  }

  receiveUserInput = (userInput) => {
    this.setState({ searchTerm: userInput })
  }

  handleSubmit = async () => {
    const apiKey = 'wS2bhDsuUv2j83gqz4dyU8D6v92JfOsQ';
    var response = await axios.get('http://api.giphy.com/v1/gifs/search?q=' + this.state.searchTerm + '&rating=pg&api_key=' + apiKey);
    this.setState({ results: response.data.data });
  }

  render() {
    if (this.state.searchTerm === null) {
      return (
        <div>
          {/* this is where you will call those components you want to see */}
          <Header />
          <br />
          <Search handleUserInput={this.receiveUserInput} />
          <br />
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <br />
          <Card data={this.state.results} />
        </div>
      )
    };
  }
}

export default App;
