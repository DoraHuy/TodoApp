import { Pencil, Trash2 } from "lucide-react"
import React, { useState } from "react";

interface TodoItemType {
    id: string;
    content: string;
    done: boolean;
}

interface TodoItemProps {
    todoItem: TodoItemType;
    onDelete: (id: string) => void;
    onEdit: (id: string, content: string) => void;
    onCheckDone: (id: string, isDone: boolean) => void;
}

const TodoItem = ({ todoItem, onDelete, onEdit, onCheckDone }: TodoItemProps) => {
    const [isEdit, setIsEdit] = useState(false);
    const [itemContent, setItemContent] = useState(todoItem.content);

    const handleChange = () => {
        setIsEdit(true);
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemContent(e.target.value);
    }

    const handleEditContentItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onEdit(todoItem.id, itemContent);
            setIsEdit(false);
        }
    }

    const handleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
        onCheckDone(todoItem.id, e.target.checked);
    }

    return (
        <>
            <div
                className="todoItem flex border-2 border-solid border-gray-200 px-[20px] py-[10px] mb-[10px]" >
                {
                    isEdit ?
                        <input type="text" className="inputContentItem w-[80%]"
                            value={itemContent}
                            onChange={(e) => handleContentChange(e)}
                            onKeyDown={(e) => { handleEditContentItem(e) }}
                            autoFocus
                            id={"inp" + todoItem.id}
                        />
                        :
                        <p
                            className={`inputContentItem w-[80%] ${todoItem.done ? 'line-through text-gray-500' : ''}`}
                            id={"inp" + todoItem.id}
                            onDoubleClick={() => { handleChange() }}
                        >
                            {todoItem.content}
                        </p>


                }
                <div className="btnHandleItem flex items-center justify-around flex-1">
                    <input type="checkbox"
                        className="btnDone w-[23px] h-[23px] "
                        checked={todoItem.done}
                        onChange={(e) => { handleDone(e) }}
                    />
                    <button className="btnSua hover:text-yellow-400 cursor-pointer" onClick={() => handleChange()}>
                        <Pencil />
                    </button>
                    <button className="btnXoa hover:text-red-600" onClick={() => onDelete(todoItem.id)}>
                        <Trash2 />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TodoItem;