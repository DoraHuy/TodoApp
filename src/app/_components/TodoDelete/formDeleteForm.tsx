const DeleteBtn = () => {
    return (
        <>
            <div className="formDelete w-full mt-[30px]">
                <div className="innerForm w-[60%] flex mx-auto justify-between text-center">
                    <button className="deleteDone w-[45%] py-[10px] bg-red-500 text-white rounded-xl">Delete done task</button>
                    <button className="btnDeleteAll w-[45%] py-[10px] bg-red-500 text-white rounded-xl">Delete all task</button>
                </div>
            </div>
        </>
    )
}

export default DeleteBtn;