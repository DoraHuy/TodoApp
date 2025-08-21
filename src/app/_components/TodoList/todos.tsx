type TodosProps = {
    todoList: {
        id: number;
        content: string;
    }[];
};

const Todos = ({ todoList }: TodosProps) => {
    return (
        <>
            <div className="todos w-[60%] mx-[auto] mt-[30px]">
                {todoList.map(item => {
                    return (
                        <div className="todoItem rounded-md px-[5px] py-[3px]  border-2 border-gray-300 mb-[10px] " key={item.id}>
                            {item.content}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Todos;