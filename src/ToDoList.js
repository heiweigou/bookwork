/**
 * Created by jiaow on 3/03/2018.
 */
import React from 'react'

class List extends React.Component{

    onDeleteHandler=(e)=>{
    const node=e.target.parentNode.innerText
        const str=node.replace('finish','')

        this.props.deleteHandler(str)
    }

    render(){
        const list=this.props.items;
        const items= list.map(item=>{
            return <p>{item}<a href="#" className="text-danger float-right" onClick={this.onDeleteHandler}>finish</a></p>
        })
        return(
            <div>
            {items}
            </div>
        )
    }



}

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typeText: '',
            list: []
        }
    }

    changeHandler = (e) => {
        this.setState({
            typeText: e.target.value
        })
    }

    deleteHander=(isDelete)=>{
        const list=this.state.list;
        const position=list.indexOf(isDelete);

        list.splice(position,1)
        this.setState({list:list})
    }

    addToList = (e) => {
        if (e.which === 13) {

            const list = this.state.list;
            const text = this.state.typeText;

            list.push(text);
            this.setState({
                list: list
            })
        }
    }

    render() {


        return (
            <div>
                <input type="text" value={this.state.typeText} onChange={this.changeHandler} onKeyUp={this.addToList}/>
               <List items={this.state.list} deleteHandler={this.deleteHander}/>
            </div>
        )
    }
}

export default ToDoList