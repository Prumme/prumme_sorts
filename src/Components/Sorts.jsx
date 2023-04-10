function Sorts({ array, setArray }) {
    const reset = () => {
        setArray((prev) => {
            return [...prev].sort(() => Math.random() - 0.5)
        }
        )
    }

    // const bubbleSort = () => {
    //     let temp = [...array]
    //     let len = temp.length
    //     for (let i = 0; i < len; i++) {
    //         for (let j = 0; j < len; j++) {


    //             if (temp[j] > temp[j + 1]) {
    //                 let tmp = temp[j];
    //                 temp[j] = temp[j + 1];
    //                 temp[j + 1] = tmp;
    //                 setArray([...temp])
    //                 return;
    //             }
    //         }
    //     }
    // }

    // const sorted = () => {
    //     for (let i = 0; i < array.length() - 1; i++) {
    //         if (array[i] > array[i + 1]) {
    //             return false
    //         }
    //     }
    //     return true
    // }




    // function sleep(milliseconds) {
    //     const date = Date.now();
    //     let currentDate = null;
    //     do {
    //         currentDate = Date.now();
    //     } while (currentDate - date < milliseconds);
    // }


    return (
        <div className="sorts">
            <ul className="flex space-x-4">
                <li>
                    <button onClick={() => {
                        // while (sorted) {
                        //     console.table(array)
                        //     bubbleSort()
                        //     sleep(1000)
                        // }
                    }} className="px-2 py-1 border border-[#232ed1] hover:scale-110 duration-300 rounded-lg text-[#232ed1]">Bubble sort</button>
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