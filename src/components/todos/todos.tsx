import React, { useContext } from "react";
import TodoItem from "../todo-item/todo-item";
import classes from "./todos.module.css";
import { TodosContext } from "../../store/todos-context";

// React.FC -> type annotation
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;
