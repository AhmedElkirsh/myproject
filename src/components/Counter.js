import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count:0,
        content:"Hello!",
        error:""
    };

    render() {
        let increase = ()=>{
            this.setState({
                count: this.state.count +1
            })
            CheckError()
        }

        let decrease = ()=>{
            this.setState({
                count: this.state.count -1
                
            });
            ShowError()
        }

        let changeContent=()=>{
            this.setState({
                //...this.state;
                content: "Surprise!"
                    
            })
        }

        let ShowError=()=>{
            this.state.count<=0 ? 

                this.setState({
                    count: 0,
                    error: "Error: the count can't be negative!"
                })
                :
                this.setState({
                    error: this.state.error
                })
        }

        let CheckError=()=>{
            this.state.count>=0 ? 

                this.setState({
                    error: ""
                })
                :
                this.setState({
                    error: this.state.error
                })

        }

        return (
            <div className='container py-5'>
                <h3>Counter: {this.state.count}</h3>
                <p>{this.state.error}</p>
                <div className='d-flex gap-2'>
                    <button className='btn btn-success py-2 px-4' onClick={increase} >+</button>
                    <button className='btn btn-danger py-2 px-4' onClick={decrease} >-</button>
                </div>
               
            </div>
        )        
    }      
}