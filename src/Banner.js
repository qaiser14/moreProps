import React, { Component } from 'react'

class Banner extends Component {
    render() {

        let response = this.props.banner_data.map((item,index)=>{
            return(
                <div>
                    <h1>
                        {item.banner_heading}
                            <br/>
                        {item.owner_name}
                    </h1>
                    
                    <p>{item.banner_para}</p>
                    <button>{item.banner_btn}</button>
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

export default Banner
