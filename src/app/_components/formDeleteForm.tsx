import { ToastContainer, toast } from 'react-toastify';

type Todo = {
    id: string;
    content: string;
    done: boolean;
};
interface TodoDeleteProps {
    todoList: Todo[];
    onChangeTodos: (todos: Todo[]) => void;
}

const DeleteBtn = ({ todoList, onChangeTodos }: TodoDeleteProps) => {

    const onDeleteAll = () => {
        onChangeTodos([]);
        toast("Đã xóa All");
    }

    const onDeleteDone = () => {
        const arrDeleteDone = todoList.filter(todoItem => {
            return todoItem.done !== true;
        })
        onChangeTodos([...arrDeleteDone]);
        toast("Đã xóa Done");
    }


    return (
        <>
            <footer className="formDelete w-full mt-[30px] fixed bottom-[10px]">
                <div className="innerForm w-[60%] flex mx-auto justify-between text-center">
                    <button
                        className="deleteDone w-[45%] py-[10px] bg-red-500 text-white rounded-xl"
                        onClick={() => onDeleteAll()}
                    >
                        Delete all task
                    </button>
                    <button
                        className="btnDeleteAll w-[45%] py-[10px] bg-red-500 text-white rounded-xl"
                        onClick={() => onDeleteDone()}
                    >
                        Delete done task
                    </button>
                    <ToastContainer />
                </div>
            </footer>
        </>
    )
}

export default DeleteBtn;