import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import NetworkContainer from './components/NetworkContainer'
import LoginForm from './components/LoginForm'
import UserProfile from './components/UserProfile'
const API = 'https://api.citybik.es/v2/networks'

class App extends React.Component {

  state={
    bikeShareNetworks: [],
    activeItem: 'BikeShareInternational',
    loggedInUser: null
  }

  // Managing NavBar state
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // Fetching list of bikeshare networks from City Bikes API.
  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({bikeShareNetworks: data.networks})
    })
  }

  currentPage = () => {
    switch (this.state.activeItem) {
      case "profile":
        return <UserProfile />
      case "home":
        return ;
      case "login":
        return <LoginForm />
      default:
        return <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>

    }
  }

  render() {

    return (
      <div className="App">
        <NavBar handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} loggedInUser={this.state.loggedInUser}/>
        {this.currentPage()}
        {/*
        <NetworkContainer bikeShareNetworks={this.state.bikeShareNetworks}/>
          <UserProfile /> */}
      </div>
    );
  }
}

export default App;
