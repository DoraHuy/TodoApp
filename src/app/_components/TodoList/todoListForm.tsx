import { Pencil, Trash2 } from "lucide-react";

type Todo = {
    id: string,
    content: string,
    done: boolean
};

type Props = { todoList: Todo[] };

const TodoList = ({ todoList }: Props) => {
    return (
        <>
            <div className="todoList w-[60%] mx-auto mt-[50px]">
                {todoList.map(item => {
                    return (
                        <div className="todoItem flex border-2 border-solid border-gray-200 px-[20px] py-[10px] mb-[20px]" key={item.id} data-id={item.id} >
                            <input type="text" className="inputContentItem w-[80%]" value={item.content} readOnly data-id={item.id} />
                            <div className="btnHandleItem flex items-center justify-around flex-1">
                                <input type="checkbox" className="btnDone w-[23px] h-[23px]" />
                                <button className="btnSua"><Pencil /></button>
                                <button className="btnXoa"><Trash2 /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoList;