import { createContext,useContext } from "react";
import React from "react";
export const todoContext = React.createContext({
    todos:[{
        id:1,
        todo : "TODO MSG",
        complete: false
    }],
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    toggletodo: (id)=>{},
})

export const TodoProvider = todoContext.Provider

export const useTodo = ()=>{
    return useContext(todoContext);
}