import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import "./Todo.css"



function Todoapp() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])



    function handleSubmit(e) {
        e.preventDefault()
        if (task.trim() === "") return;
        setTodos([
            ...todos,
            { id: Date.now(), todo: task, completed: false }
        ])

    }

    function handleToggle(id) {
        setTodos(todos.map((each) => (
            each.id === id ?
             { ...each, completed: !each.completed } : each
        )))
    }

    function handleDelete(id) {
        setTodos(todos.filter((each) => (each.id !== id)))

    }
    return (<>
        <h1 >Create Your To-Do-List...</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder="Enter your task" onChange={(e) => (setTask(e.target.value))} />
            <button>Add <IoAddOutline /></button>
        </form>
        <div className="tasks">
            {todos.map((each) => (
                <div className="task" key={each.id}>
                    <p style={{ textDecoration: each.completed ? "line-through" : "none" }}>
                        {each.todo}
                    </p>

                    <input type="checkbox" checked={each.completed} onChange={()=>(handleToggle(each.id))} />


                    <button onClick={() => handleDelete(each.id)}>Delete <span><MdDelete /></span></button></div>
            ))}
        </div>
    </>)
}

export default Todoapp;