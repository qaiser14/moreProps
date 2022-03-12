import React, { Component } from 'react'
import data from './Data'
import Nav from './Nav'
import Banner from './Banner'


class App extends Component {
  state ={
    webData:data

  }
  
  
  render() {
   
    return (
     
     <div>

       <Nav  nav_data={this.state.webData} />
        <Banner banner_data={this.state.webData} />

      {/* {response} */}


      </div>
    )
  }
}

export default App
