const ButtonBackward = ({ btn_data }) => {
    return (
        <button className="rounded-md border-2 border-orange-500 bg-slate-600 px-4 py-2 text-xl font-bold transition-colors duration-300 hover:bg-stone-400">
            &larr;{btn_data}
        </button>
    )
}

export default ButtonBackward
