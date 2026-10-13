import { useState } from "react";

function Todoform(){
    const [text,setText] = useState("")
 return (<>
    <Form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={()=>setText(e.target.value)} />
    </Form>
 </>)
}

function Todoapp(){
    return Todoform()
}

export default Todoapp;