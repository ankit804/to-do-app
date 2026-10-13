import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

function Todoform() {
    const [text, setText] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        if(text.trim()==="") return ;
        setText("")
    }
    return (<>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your task.." />
            <button>Add <span><IoAddOutline /></span> </button>
        </form>
    </>)
}

function Todoapp() {
    return(<>
    <h1 >Create Your To-Do-List...</h1>
    {Todoform()}
    </>)
}

export default Todoapp;