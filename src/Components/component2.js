import { useState } from "react";


export function Comp2() {

    const [count, setCount] = useState(0)
    
    function increase(){
        setCount(count + 1)
    }

    function decrease() {
        if(count>0){
            setCount(count -1)
        }
        else{
            setCount(count)
        }
    }
    return(
        <div style={{margin:100}}>
            <h1 style={{color:'red', fontSize:60}}>{count}</h1>
            <button onClick={increase} style={{marginRight:5}}>Increase Count</button>
            <button onClick={decrease} style={{marginLeft:5}}>Decrease Count</button>
        </div>
    )
}