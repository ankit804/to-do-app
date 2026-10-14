import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";



function Todoapp() {
    const [task,setTask] = useState("")
    const [todos,setTodos] = useState([])
    

    function handleSubmit(e){
       e.preventDefault()
       if (task.trim() === "") return;
       setTodos([
            ...todos,
            {id: Date.now(),todo: task}
        ])
       
    }

    function handleDelete(id){
        setTodos(todos.filter((each)=>(each.id !== id)))
        
    }
    return (<>
        <h1 >Create Your To-Do-List...</h1>
        <form onSubmit={handleSubmit }>
            <input type="text" value={task} placeholder="Enter your task" onChange={(e)=>(setTask(e.target.value))} />
            <button>Add <IoAddOutline/></button>
        </form>
        <div className="tasks">
            {todos.map((each)=>(
                <>
                 <p id={each.id}>{each.todo}</p>
                 <button onClick={()=>handleDelete(each.id)}>Delete</button></>
            ))}
        </div>
    </>)
}

export default Todoapp;