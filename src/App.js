import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onReady(request) {
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        const doc = request.response.cloneNode(true)
        console.log(doc)
        const head = doc.head
        const body = doc.body
        console.log(head)
        console.log(body)
    }
  }

  requestInfo() {
    const request = new XMLHttpRequest()
    const CORSproxy = 'https://cors-anywhere.herokuapp.com/'
    let link = CORSproxy + 'https://example.com'

    request.open('GET', link)
    request.responseType = 'document'
    request.onreadystatechange = () => this.onReady(request)
    request.send()
  }

  render() {
    this.requestInfo()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
