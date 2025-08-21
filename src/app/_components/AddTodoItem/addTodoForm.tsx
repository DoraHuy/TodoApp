import { ClipboardPlus } from "lucide-react";
import React, { useState } from "react";
type AddTodoProps = {
    onAddTodo: (content: string) => void;
};
const AddTodo = ({ onAddTodo }: AddTodoProps) => {
    const [contentTodoItem, setContentTodoItem] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContentTodoItem(e.target.value);
    }

    const handleClick = () => {
        onAddTodo(contentTodoItem);
        setContentTodoItem("");
        setTimeout(() => { alert("Thêm mới thành công") }, 200);
    }

    return (
        <>
            <div className="formAddTodo w-[60%] mx-[auto] mt-[50px] ">
                <h2 className="titleAddTodo text-center text-3xl font-bold mb-[10px]">Todo Input</h2>
                <div className="inputAdd flex px-[10px] py-[5px] border-2 rounded-xl border-gray-300 mb-[10px]">
                    <div className="inputIcon w-[5%] px-[10px] py-[3px]">
                        <ClipboardPlus />
                    </div>
                    <input type="text" className="inputContent w-[90%] px-[10px] py-[3px]" id="inputContent" value={contentTodoItem} onChange={(e) => handleChange(e)} />
                </div>
                <button className="btnAddTodo px-[10px] py-[5px] bg-[#00A4B8] w-full border-2 rounded-2xl cursor-pointer" onClick={() => handleClick()} >Add new task</button>
            </div>
        </>
    )
}

export default AddTodo; 