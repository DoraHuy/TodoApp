const TodoShow = () => {

    return (
        <>
            <div className="btnShowForm">
                <h2 className="todoShowTitle text-center text-2xl font-bold mb-[20px]">TodoList</h2>
                <div className="btnShow w-[60%] mx-auto flex justify-between text-white">
                    <button className="btnShowAll w-[30%] text-center py-[10px] bg-[#00A4B8] rounded-xl">All</button>
                    <button className="btnShowDone w-[30%] text-center py-[10px] bg-[#00A4B8] rounded-xl">Done</button>
                    <button className="btnShowTodo w-[30%] text-center py-[10px] bg-[#00A4B8] rounded-xl">Todo</button>
                </div>
            </div>
        </>
    )

}

export default TodoShow;