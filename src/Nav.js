import React, { Component } from 'react'

 class Nav extends Component {
    render() {

        let response = this.props.nav_data.map((item,i)=>{
            return(
              <div>
      
                  <nav>
                    <li>
                      {item.li}
                    </li>
                    <li>{item.li1}</li>
                    <li>{item.li2}</li>
                    <li>{item.li3}</li>
      
                  </nav>
           
              </div>
            )
          })
      

        return (
            <div>
                {response}          
            </div>
        )
    }
}

export default Nav
