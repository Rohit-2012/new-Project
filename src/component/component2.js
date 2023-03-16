import {useState} from 'react'
export function Component2() {
    const [input, setInput] = useState('')

    function handleChange(e){
        // console.log(e.target.value);
        let totalChar = e.target.value
        if(totalChar.length<=100){
            setInput(totalChar)
        }
    }

    return (
        <form>
            <textarea onChange={handleChange} value = {input} style= {{width:500, height:500}}/>
        </form>
    )
}