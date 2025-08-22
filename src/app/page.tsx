'use client'
import DeleteBtn from "@/app/_components/TodoDelete/formDeleteForm";
import TodoInput from "@/app/_components/TodoInput/formInputTodo";
import TodoList from "@/app/_components/TodoList/todoListForm";
import TodoShow from "@/app/_components/TodoShow/btnShowForm";
import { useState } from "react";

type Todo = {
  id: string,
  content: string,
  done: boolean
};

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoContent: string) => {
    if (todoContent.trim().length === 0) {
      alert("Bạn cần nhập chuỗi");
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      content: todoContent,
      done: false
    }
    setTodos([...todos, todo]);
  }

  return (
    <>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoShow />
      <TodoList todoList={todos} />
      <DeleteBtn />
    </>
  );
}
