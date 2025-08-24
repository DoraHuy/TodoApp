'use client';

import DeleteBtn from "@/app/_components/TodoDelete/formDeleteForm";
import TodoInput from "@/app/_components/TodoInput/formInputTodo";
import TodoList from "@/app/_components/TodoList/todoListForm";
import TodoShow from "@/app/_components/TodoShow/btnShowForm";
import { useState } from "react";

type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoMain, setTodoMain] = useState<Todo[]>([]);

  // Hàm thêm todo mới
  const handleAddTodo = (todoContent: string) => {
    if (todoContent.trim().length === 0) {
      alert("Bạn cần nhập chuỗi");
      return;
    }
    const todo: Todo = {
      id: Date.now().toString(),
      content: todoContent,
      done: false,
    };
    setTodos([...todos, todo]);
    setTodoMain([...todos, todo]);
    alert("Thêm thành công");
  };

  // Hàm xóa todo
  const handleDeleteTodoItem = (todoItemId: string): void => {
    const todosDeleteItem = todos.filter((item) => item.id !== todoItemId);
    setTodos(todosDeleteItem);
    setTodoMain(todosDeleteItem);
  }

  //hàm sửa
  const handleEditContent = (todoItemId: string, todoItemContent: string): void => {
    const arrLastEdit = todos.map(element => {
      if (element.id === todoItemId && todoItemContent.trim().length !== 0) {
        return { ...element, content: todoItemContent };
      } else {
        alert("Không để rỗng");
      }
      return element;
    });
    setTodos(arrLastEdit);
    setTodoMain(arrLastEdit);
  }

  //hàm check
  const handleCheck = (todoItemId: string, isDone: boolean): void => {
    const arrLastEdit = todos.map(element => {
      if (element.id === todoItemId) {
        return { ...element, done: isDone }
      }
      return element;
    });
    setTodos(arrLastEdit);
    setTodoMain(arrLastEdit);
  }

  //hàm xóa All
  const xoaAll = (arr: Todo[]): void => {
    setTodos(arr);
    setTodoMain(arr);
  }

  //hàm xóa done
  const xoaDone = (): void => {
    const arrDeleteDone = todos.filter(todo => {
      return todo.done === false;
    })
    setTodos(arrDeleteDone);
    setTodoMain(arrDeleteDone);
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
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoShow onShowAll={showAll} onShowDone={showDone} onShowTodos={showTodos} />
      <TodoList
        todoList={todos}
        onDeleteItem={handleDeleteTodoItem}
        onEditContent={handleEditContent}
        onCheck={handleCheck}
      />
      <DeleteBtn onDeleteAll={xoaAll} onDeleteDone={xoaDone} />
    </>
  );
}