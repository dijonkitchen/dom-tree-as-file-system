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
      if (doc && doc.children) {
        this.setState({
          head: doc.head,
          body: doc.body
        })
      }
    }
  }

  renderFileTree(parent, counter = 0) {
    if (parent && parent.children.length > 0) {
      let fileTree = []
      for (const child of parent.children) {
        fileTree.push(
          <details
            key={counter}
          >
            <summary>
              {child.nodeName.toLowerCase()}
            </summary>
            {this.renderFileTree(child, counter += 1)}
          </details>
        )
      }

      return fileTree
    } else if (parent) {
      return parent.innerText
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
        {this.renderFileTree(this.state.body)}
        {this.renderFileTree(this.state.head)}
      </div>
    );
  }
}

export default App;
