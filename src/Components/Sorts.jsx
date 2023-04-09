function Sorts({ array, setArray }) {
    const reset = () => {
        setArray(array.sort((a, b) => 0.5 - Math.random()));
    }
    return (
        <div className="sorts">
            <ul className="flex space-x-4">
                <li>
                    <button className="px-2 py-1 border border-[#232ed1] hover:scale-110 duration-300 rounded-lg text-[#232ed1]">Bubble sort</button>
                </li>
                <li>
                    <button className="px-2 py-1 border border-[#232ed1] hover:scale-110 duration-300 rounded-lg text-[#232ed1]">Cocktail sort</button>
                </li>
                <li>
                    <button className="px-2 py-1 border border-[#232ed1] hover:scale-110 duration-300 rounded-lg text-[#232ed1]">Cocktail sort</button>
                </li>
                <li>
                    <button onClick={reset} className="px-2 py-1 border border-[#157145] hover:scale-110 duration-300 rounded-lg text-[#157145]">Reset</button>
                </li>
            </ul>
        </div>
    )
}

export default Sorts