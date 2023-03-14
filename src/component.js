import {v4 as uuidV4} from 'uuid'
import  React,{useState} from 'react'

export function ToDoList() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    
    function onInputChange(e) {
        setInput(e.target.value)
    }
    
    function onSubmit(e) {
        // e.preventDefault()
        setTodos([...todos, { id: uuidV4(), title: input, completed : false }]);
        setInput("");
    }
    function handleComplete(todo) {
        setTodos(
            todos.map((items)=>{
                if(items.id === todo.id){
                    return {...items, completed: !items.completed}
                }
                return items
            })
        )
    }

    function handleDelete({id}) {
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    return (
        <>
        {/* <div>
            {todos.map((todo)=>{
                <li key={todo.id}>
                    <span>{todo.title}</span>
                </li>
            })}
        </div> */}
         <ul>
        {todos.map((m) => (
            <div>
          <li style={{ listStyleType: "none" }} key={m.id}>
            <span>{m.title}</span> 
            <div><button onClick={()=>handleComplete(todos)}>Complete</button></div>
            <div><button onClick={()=>handleDelete(todos)}>Delete</button></div>
          </li>
            </div>
        ))}
      </ul>
        <input type="text" onChange={onInputChange}/>
        <button onClick={onSubmit}>Submit</button>
        </>
    )
}