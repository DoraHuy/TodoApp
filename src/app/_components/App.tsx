'use client';

import TodoShow from "@/app/_components/btnShowForm";
import DeleteBtn from "@/app/_components/formDeleteForm";
import TodoInput from "@/app/_components/formInputTodo";
import TodoList from "@/app/_components/todoListForm";
import { useEffect, useState } from "react";

type Todo = {
    id: string;
    content: string;
    done: boolean;
};

const App = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoMain, setTodoMain] = useState<Todo[]>([]);

    // Lấy dữ liệu từ localStorage
    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            const parsed = JSON.parse(savedTodos) as Todo[];
            setTodos(parsed);
            setTodoMain(parsed);
        }
    }, []);

    // Lưu dữ liệu vào localStorage khi todos thay đổi
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoMain));
    }, [todoMain]);

    //ontogle
    const handleTodos = (todoList: Todo[]): void => {
        setTodos(todoList);
        setTodoMain(todoList);
    };

    //hàm show all
    const showAll = (): void => {
        setTodos([...todoMain]);
    };

    //hàm show done
    const showDone = (): void => {
        setTodos(todoMain.filter((element) => element.done === true));
    };

    //hàm show todos
    const showTodos = (): void => {
        setTodos(todoMain.filter((element) => element.done === false));
    };

    //giao diện
    return (
        <>
            <TodoInput todoList={todos} onChangeTodos={handleTodos} />
            <TodoShow
                onShowAll={showAll}
                onShowDone={showDone}
                onShowTodos={showTodos}
            />
            <TodoList todoList={todos} onChangeTodos={handleTodos} />
            <DeleteBtn todoList={todos} onChangeTodos={handleTodos} />
        </>
    );
};

export default App;
