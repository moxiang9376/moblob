//home.js
import React, { Component } from 'react';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "teststestsetset"
        };
    }

    // test = () => {
    //     React.common._http("get","123123123").then(res=>{
    //         console.log(res)
    //     })
    // }


    render() {
        return (
            <div onClick={this.test}></div>
        );
    }
}


