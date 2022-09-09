import React, {useEffect, useState, useRef} from 'react'
let IncValue = 0;
export default function CounterFun() {
    //hooks are either built-in or user-made.. they act like states in classes
    // you should declare hookes in a function before return, preferably the first 
    // thing after declaring the component function

    let [counter, setCounter] = useState(0);
    /* let [State, setState] = useState({
        counter:0,
        title:"Hello there!"
    }) */
    // the useState function is a built in hook "function"
    // it takes the initial value as its parameter
    // which return a value "counter" and a "function"
    // in the form of an array
    // it's a convention to name them like such
    // [something, setsomething]
    // u can use as many useState Functions as u want
    let increase = ()=>{
        setCounter(counter+1)
    }
    let decrease = ()=>{
        setCounter(counter-1)
    }
    
    
    let inputValue = useRef(null);
    let [IncValue,setIncValue]= useState(0)
    let useRefIncrease=()=>{
        let TakenValue = inputValue.current.valueAsNumber
        setCounter(counter+TakenValue)
    }
    let updateButton = ()=>{
        setIncValue(inputValue.current.valueAsNumber)
    }
    // useEffect can be used as three things
    // 1- componentDidAmount => always 
    // 2- componentUpdated => if dependency list is not declared then for all state changes
    //                        if declared as [state] then updated when that state changes
    // 3- componentWillUnmount => when the function returns another function'typically an alert or termination of a process' 
    //                            the willUnmount useEffect is placed in the component that will dissapear 
    //                            the cause of the unmounting must be external (ex. parent function)
    useEffect(()=>{
        console.log("did amount");
    },[])
    useEffect(()=>{
        console.log(counter);
    },[counter])
    //clean-up effect
    useEffect(()=>{
        return function(){
          /* alert("hello") */
        }
      },[])

    /* let changetitle = ()=>{
        setState({
            ...State,
            title:"Goodbye!"
        })
    }
     let increase = ()=>{
        setState({
                ...State,
                counter:State.counter+1
            })
    }
    let decrease = ()=>{
        setState({
            ...State,
            counter:State.counter-1
        })
    } */
    // u can use the code above if u decide to declare multible propirties
    // in one hook ,, although it's not recommended as u can set multiple
    // hooks with ease 
    // not that while using component functions, u need to call the entire
    // object first so unmodified data don't get removed from object
    // however, this is not the case in class components
    
  return (
    
        <div className='d-flex flex-column p-3 justify-content-center align-items-center'>
            <h2>
                counter is: {counter}
            </h2>
            
            <div className='d-flex gap-3'>
                <button className='btn btn-success px-3 py-2' onClick={increase}>+</button>
                <button className='btn btn-danger px-3 py-2' onClick={decrease}>-</button>
                <button className='btn btn-primary px-3 py-2' onClick={useRefIncrease}>{`Increment by ${IncValue}`}</button>
                <input type='number'defaultValue={0} ref={inputValue} onChange={updateButton}></input>
                
            </div>
        </div>
    
    
    
  )
}
