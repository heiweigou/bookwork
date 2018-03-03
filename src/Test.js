/**
 * Created by jiaow on 25/02/2018.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App";


function List(props) {
   return props.value.map(item=><p>{item}</p>

    )

}

class Tick extends React.Component {
    constructor() {
        super();
        this.state = {
            number:0
        }
    }

    componentDidMount() {
        setInterval(this.clock,1000)
    }

    clock = () => {
        this.setState((prevState,props)=>{
            return{
                number:prevState.number+1
}



        })
    }

    render() {

        const mess=[1,5,4,2,3]
        return (
            <div>
                <p>{this.state.number}</p>
               <List value={mess}/>
            </div>
        )
    }
}
export default Tick;