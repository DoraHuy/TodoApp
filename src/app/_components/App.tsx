'use client';

import DeleteBtn from "@/app/_components/formDeleteForm";
import TodoInput from "@/app/_components/formInputTodo";
import TodoList from "@/app/_components/todoListForm";
import TodoShow from "@/app/_components/btnShowForm";
import { useState } from "react";

type Todo = {
    id: string;
    content: string;
    done: boolean;
};

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoMain, setTodoMain] = useState<Todo[]>([]);

    //ontogle
    const handleTodos = (todoList: Todo[]): void => {
        setTodos(todoList);
        setTodoMain(todoList);
    }

    //hàm show all
    const showAll = (): void => {
        setTodos([...todoMain]);
    }

    //hàm show done
    const showDone = (): void => {
        setTodos([...todoMain].filter(element => {
            return element.done === true;
        }));
    }

    //hàm show todos
    const showTodos = (): void => {
        setTodos([...todoMain].filter(element => {
            return element.done === false;
        }));
    }

    //giao diện
    return (
        <>
            <TodoInput todoList={todos} onChangeTodos={handleTodos} />
            <TodoShow onShowAll={showAll} onShowDone={showDone} onShowTodos={showTodos} />
            <TodoList
                todoList={todos}
                onChangeTodos={handleTodos}
            />
            <DeleteBtn todoList={todos} onChangeTodos={handleTodos} />
        </>
    );
}

export default App;