'use client'
import { BookText } from "lucide-react";
import { useState } from "react";

interface TodoInputProps {
    onAddTodo: (content: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {

    const [contentInput, setContentInput] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContentInput(e.target.value)
    }

    const handleClick = () => {

        onAddTodo(contentInput);
        setContentInput("");
    }

    return (
        <>
            <div className="inputTodo w-[60%] mx-auto text-center py-[30px]">
                <h2 className="inputTodoHead text-2xl font-bold mb-[30px] ">TodoInput</h2>
                <div className="inputForm w-full flex px-[30px] py-[20px] border-2 border-solid border-gray-300 rounded-xl">
                    <span className="inputIcon px-[5px] bg-[#00A4B8] flex items-center justify-center ">
                        <BookText className="w-[30px] h-[30px] text-white " />
                    </span>
                    <input type="text" className="inputContent flex-1 py-[5px] px-[5px] border-2 border-solid border-gray-300 rounded-l" value={contentInput} onChange={(e) => handleChange(e)} />
                </div>
                <button className="btnAddTodo w-full py-[10px] mt-[10px] bg-[#00A4B8] font-thin text-white rounded-xl" onClick={() => handleClick()}>Add new task</button>
            </div>
        </>
    )
}

export default TodoInput;