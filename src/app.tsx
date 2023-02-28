import React from 'react';
import './app.css';
import Todos from "./components/todos/todos";
import NewTodo from "./components/new-todo/new-todo";
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <TodosContextProvider>
            <NewTodo/>
            <Todos/>
        </TodosContextProvider>
    );
}

export default App;
