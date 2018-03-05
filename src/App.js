import React, { Component } from 'react';
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

  requestInfo() {
    const request = new XMLHttpRequest()
    const CORSproxy = 'https://cors-anywhere.herokuapp.com/'

    request.open('GET', CORSproxy + this.state.link)
    request.responseType = 'document'
    request.onreadystatechange = () => this.onReady(request)
    request.send()
  }

  onReady(request) {
    if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        const doc = request.response
        const html = doc.children[0].children
    }
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
