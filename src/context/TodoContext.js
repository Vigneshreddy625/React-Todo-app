import React, { useContext } from "react";
import { createContext } from "react";

export  const Todolist = createContext({
    todos: [{
        id: 1,
        todo : "New Todo",
        completed : false
    }],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo  : (id) => {},
    toggleComplete : (id) => {}
})

export  const TodoProvider = Todolist.Provider;

export const useTodo = () => {
    return useContext(Todolist)
}