import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      link: 'https://example.com'
    }
  }

  componentDidMount() {
    this.requestInfo()
  }

  onChangeHandler(event) {
    this.setState({
      link: event.target.value
    }, this.requestInfo)
  }

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

    request.open('GET', CORSproxy + this.state.link)
    request.responseType = 'document'
    request.onreadystatechange = () => this.onReady(request)
    request.send()
  }

  render() {
    return (
      <div className="App">
        <input
          placeholder='link'
          value={this.state.link}
          onChange={event => this.onChangeHandler(event)}
        />
      </div>
    );
  }
}

export default App;
