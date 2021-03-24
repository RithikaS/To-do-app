import React from 'react';
import './Counter.css'
class Counter extends React.Component {
    constructor(){
        super();
        this.state = {counter: 0};
    }
    render = ()=> {
        return (
        <React.Fragment>
            <CounterComp by={1} incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}></CounterComp>
            <CounterComp by={10} incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}></CounterComp>
            <CounterComp by={100} incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}></CounterComp>
            <span className="count">{this.state.counter}</span>
            <br></br><br></br>
            <button className="reset-btn" onClick={this.reset}>RESET</button>
        </React.Fragment>
        )
    }
    incrementMethod = (by)=>{
        this.setState({counter: this.state.counter + by});
    }
    decrementMethod = (by)=>{
        this.setState({counter: this.state.counter - by});
    }
    
    reset = () => {
        this.setState({counter: 0});
    }
}
class CounterComp extends React.Component {

    render() {
        return (
            <div className="counter">
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                <br></br><br></br>
            </div>
        )
    }
}


export default Counter;