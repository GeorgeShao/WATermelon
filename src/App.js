import React, { Component } from 'react'
import Header from './components/Header';
import Page from './pages/Page';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div classname="App">
        <Header />
        <Page />
      </div>
    )
  }
}
