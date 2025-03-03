import React,{useState} from "react";
import { useTodo } from "../context/todo";

function TodoForm() {
    const [todo,settodo] = useState("")
    const {addtodo} = useTodo()
    
    const adds =(e)=>{
        e.preventDefault()

        if(!todo) return

        addtodo({todo,complete:false})
        settodo("")
    }
    return (
        <form  className="flex" onSubmit={adds}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange={(e)=> settodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

