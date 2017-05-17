import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'

function retrieveUrls({data}) {
  console.log(data)
  const { data: dataArr } = data
  const urls = dataArr.map(gif => gif.images.fixed_height.url)
  return urls
}

class Giphy extends Component {
  state = { 
    urls: [],
    elements: 1,
    status: "",
    value: ""
  }

  changeNumberOfVisibleGifs = () => {
    this.setState(prevState => ({elements: prevState.elements + 1}))
  }

  handleInputChange = (e) => this.setState({ value: e.target.value })

  handleFocus = (e) => e.target.select()

  handleNumberOfElemntsChange = (e) => this.setState({elements: e.target.value})
  
  handleSubmit = (e) => {
      this.setState({status: `Fetching ${this.state.value}...`})
      axios.get('http://api.giphy.com/v1/gifs/search',{
        params: {
            q: this.state.value,
            limit: this.state.elements,
            api_key: 'dc6zaTOxFJmzC'
        }
      })
      .then(data => retrieveUrls(data))
      .then(urls => this.setState({ urls: [...this.state.urls, ...urls] }))
      .then(() => this.setState({ status: "Fetching is done"}))
      .catch(error => {
        this.setState({ status: `Error occured while loading data: ${error.message}`, value: "" })
      })
      
      e.preventDefault()
  }

  render() {
    const {elements, urls, status} = this.state

    const displayStatus = status.split(' ')[0] === "Error"? 
                        <p style={{color: 'red'}}>{status}</p> : <p>{status}</p>

    return (
      <div>
          <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                  <FormControl type="text" value={this.state.value} 
                          placeholder="Type of GIF" onChange={this.handleInputChange}
                          onFocus={this.handleFocus} required />
              </FormGroup>
              {' '}
              <FormGroup>
                  <FormControl type="number" value={elements} min={0}
                              onChange={this.handleNumberOfElemntsChange}/>
              </FormGroup>
              {' '}
              <Button type="submit" bsStyle="primary">Load GIFs</Button>
          </Form>

          {displayStatus}

          <div className="flex">
              {urls.map(gif => <div key={gif} className="flex-item"><img src={gif} /></div>)}
          </div>
      </div>
    );
  }
}

export default Giphy;