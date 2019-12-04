import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Home from './components/pages/home'

class App extends React.Component {
  state = {  }
  render() { 
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    );
  }
}
 
export default App;