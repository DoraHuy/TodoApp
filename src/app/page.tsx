'use client'
import AddTodo from "@/app/_components/AddTodoItem/addTodoForm";
import Todos from "@/app/_components/TodoList/todos";
import { useState } from "react";


export default function Home() {

  type Todo = {
    id: number;
    content: string;
  };
  const [todo, setAddTodos] = useState<Todo[]>([]);

  const handleAddTodos = (contentTodoNew: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      content: contentTodoNew,
    }
    setAddTodos((prev) => [...prev, newTodo]);
  };

  return (
    <>
      <div className="TodoApp">
        <AddTodo onAddTodo={handleAddTodos} />
        <Todos todoList={todo} />
      </div>
    </>
  );
}
