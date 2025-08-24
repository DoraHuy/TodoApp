'use client'
import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";

type Todo = {
    id: string,
    content: string,
    done: boolean
};

type TodoListProps = {
    todoList: Todo[];
    onDeleteItem: (id: string) => void;
    onEditContent: (id: string, content: string) => void;
    onCheck: (id: string, isDone: boolean) => void;
};

const TodoList = ({ todoList, onDeleteItem, onEditContent, onCheck }: TodoListProps) => {
    const [idEdit, setIdEdit] = useState<string>("");
    const [contentTodo, setContentTodo] = useState<string>("");
    // start Delete item

    const handleDeleteItem = (idItem: string) => {
        if (typeof onDeleteItem !== 'function') {
            console.error('onDeleteItem is not a function:', onDeleteItem);
            return;
        }
        onDeleteItem(idItem);
    }

    //end delete item

    // start fix content item

    const handleDoubleClick = (id: string, content: string) => {
        setIdEdit(id);
        setContentTodo(content)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContentTodo(e.target.value);
    }

    const handleSaveKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onEditContent(idEdit, contentTodo)
            setIdEdit("");
            setContentTodo("");
        }

    }

    const handelClickEdit = () => {
        onEditContent(idEdit, contentTodo)
        setIdEdit("");
        setContentTodo("");
    }

    // end fix content item

    //start check 
    const handleCheckClick = (itemId: string, checked: boolean) => {
        onCheck(itemId, checked);
        const inputElement = document.getElementById("inp" + itemId);
        if (inputElement) {
            if (checked) {
                inputElement.classList.add("line-through");
            } else {
                inputElement.classList.remove("line-through");
            }
        }
    }

    return (
        <>
            <div
                className="todoList w-[60%] mx-auto mt-[40px] overflow-auto
                         h-[35vh] border-2 border-solid border-gray-200 px-[10px] py-[10px]"
            >
                {todoList.map(item => {
                    const isRead = item.id === idEdit;
                    return (
                        <div className="todoItem flex border-2 border-solid border-gray-200 px-[20px] py-[10px] mb-[10px]" key={item.id} data-id={item.id} >

                            <input type="text" className="inputContentItem w-[80%]"
                                readOnly={!isRead}
                                value={isRead ? contentTodo : item.content}
                                onDoubleClick={() => { handleDoubleClick(item.id, item.content) }}
                                onChange={(e) => handleChange(e)}
                                onKeyDown={(e) => { handleSaveKeydown(e) }}
                                id={"inp" + item.id}
                            />

                            <div className="btnHandleItem flex items-center justify-around flex-1">
                                <input type="checkbox"
                                    className="btnDone w-[23px] h-[23px] ${item.done ? 'line-through text-gray-500' : ''}"
                                    checked={item.done}
                                    onChange={(e) => { handleCheckClick(item.id, e.target.checked) }}
                                />
                                <button className="btnSua hover:text-yellow-400 cursor-pointer" onClick={() => { handelClickEdit() }}>
                                    <Pencil />
                                </button>
                                <button className="btnXoa hover:text-red-600" onClick={() => handleDeleteItem(item.id)}>
                                    <Trash2 />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoList;