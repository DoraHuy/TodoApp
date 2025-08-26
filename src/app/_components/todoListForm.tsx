'use client'
import TodoItem from "@/app/_components/todoItem";
import React from "react";

type Todo = {
    id: string;
    content: string;
    done: boolean;
};

interface TodoListProps {
    todoList: Todo[];
    onChangeTodos: (todos: Todo[]) => void;
}

const TodoList = ({ todoList, onChangeTodos }: TodoListProps) => {
    // Hàm xóa todo
    const handleDeleteTodoItem = (todoItemId: string): void => {
        const todosDeleteItem = todoList.filter((item) => item.id !== todoItemId);
        onChangeTodos(todosDeleteItem);
    };

    // Hàm sửa
    const handleEditContent = (todoItemId: string, todoItemContent: string): void => {
        const arrLastEdit = todoList.map((element) => {
            if (element.id === todoItemId && todoItemContent.trim().length !== 0) {
                return { ...element, content: todoItemContent };
            }
            return element;
        });
        onChangeTodos(arrLastEdit);
    };

    // Hàm check
    const handleCheck = (todoItemId: string, isDone: boolean): void => {
        const arrLastEdit = todoList.map((element) => {
            if (element.id === todoItemId) {
                return { ...element, done: isDone };
            }
            return element;
        });
        onChangeTodos(arrLastEdit);
    };

    return (
        <div
            className="todoList w-[60%] mx-auto mt-[40px] overflow-auto
                       h-[35vh] border-2 border-solid border-gray-200 px-[10px] py-[10px]"
        >
            {todoList.map((item) => (
                <TodoItem
                    key={item.id}
                    todoItem={item}
                    onDelete={() => handleDeleteTodoItem(item.id)}
                    onCheckDone={handleCheck}
                    onEdit={handleEditContent}
                />
            ))}
        </div>
    );
};

export default TodoList;
