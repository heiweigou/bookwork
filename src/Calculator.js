/**
 * Created by jiaow on 2/03/2018.
 */
import React from 'react'

const scale={
    'c':'celsius',
    'f':'fahrenheit'
}


function Boil(props) {
    if (parseFloat(props.temp)>100)
        return (<p>the water will boil</p>)
    else
        return(<p>the water would NOT boil</p>)
}
class TemparatureInput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tempature:''
        }
    }

    handleChange=(e)=>{
        this.props.onChangeHandler(e.target.value)

    }

    render(){
        const temp=this.props.temp;
        const scaleInput=this.props.scale;
        return(
            <div>
                <fieldset>
                    <legend>input tempareature in {scale[scaleInput]}</legend>
                    <input value={this.props.temp} onChange={this.handleChange}/>
                    <Boil temp={temp}/>
                </fieldset>
            </div>
        )
    }
}
class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            tempature:''
        }

    }

    handChange=(temp)=>{
        this.setState({
            tempature:temp
        })
    }
    render(){

        const temperature=this.state.tempature
        return(
            <div>
                <TemparatureInput scale="c" temp={temperature} onChangeHandler={this.handChange}/>
                <TemparatureInput scale="f" temp={temperature} onChangeHandler={this.handChange}/>
            </div>
        )
    }
}

export default Calculator