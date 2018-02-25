/**
 * Created by jiaow on 25/02/2018.
 */
import React from 'react'

class Test extends React.Component{
    constructor(){
        super();
        this.state={
            a:'a',
            b:'b'
        }
    }

    change=()=>{
        console.log(this.state)
        this.setState({c:'c',b:'not b'})
        console.log(this.state)


    }

    render(){
        return(
            <div onClick={this.change}>{this.state.b}</div>
        )
    }
}

export default Test