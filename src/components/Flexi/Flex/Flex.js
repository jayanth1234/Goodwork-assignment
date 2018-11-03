import React, { Component } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../Flex/Flex.css';

class Flex extends Component {
    state = {
        name: "",
        state: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        alert("My name is " + this.state.name + " and I am from " + this.state.state);
        this.setState({
            name: "",
            state: ""
        })
    }

    render() {
        let st =[]
        st = this.props.config[1].values.map(val => {
            return val;
        })
        return (
            <form className="container">
                <div>
                    <span>Name :</span> <input 
                            placeholder={this.props.config[0].label} 
                            value={this.state.name} 
                            onChange={e => this.setState({name: e.target.value})}/>
                </div>
                <br/><br/>
                <div>
                    <span>State :</span> <input list="states" 
                            placeholder={this.props.config[1].label} 
                            value={this.state.state} 
                            onChange={e => this.setState({state: e.target.value})}/>
                    <datalist id="states">
                        <option value={st[0]} />
                        <option value={st[1]} />
                        <option value={st[2]} />
                    </datalist>
                </div>
                <br/>
                <div>
                    <button className="btn" type="submit" onClick={e => this.onSubmit(e)}>Submit</button>
                </div>
            </form>       
        )
    }
} 

export default Flex;