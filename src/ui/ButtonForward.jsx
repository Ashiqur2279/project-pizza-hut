const ButtonForward = ({ btn_data }) => {
    return (
        <button className="rounded-md border-2 border-orange-500 bg-yellow-400 px-2 py-1 text-xl font-semibold tracking-wide transition-colors duration-300 hover:bg-yellow-500">
            {btn_data}&rarr;
        </button>
    )
}

export default ButtonForward
