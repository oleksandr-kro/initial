import React, {Component} from 'react';
import './style.css';



class Todo extends Component {
    constructor(props) {
        super(props);
        let {todo} =this.props
        this.state = {todo}
    }
    changeStatus= ()=>{
        let {todo}= this.state
        todo.completed = !todo.completed
        this.setState({todo})
    };
    render() {

        return (
            <div>
            <span>id:</span><p>{ this.state.todo.id}</p>
            <br/>
            <span>title:</span><p>{ this.state.todo.title}</p>
            <br/>
            <span>completed:</span><p className={'status'}>{ this.state.todo.completed.toString()}</p>
            <button className={'btn'} onClick={()=>this.changeStatus( this.state.todo)} style={{backgroundColor: this.state.todo.completed === false ? "red": 'green'}} >Change</button>
            <hr/>
            </div>
        );
    }
}

export default Todo;
