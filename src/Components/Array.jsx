function Array({ array, setArray }) {
    return (
        <div className="flex items-end space-x-1 bg-[#a491d3] p-16 rounded-lg" >
            {
                array.map((value, index) => {
                    return (
                        <div key={index} className={"bg-[#232ed1] flex-col  height-" + value + " w-[1rem] rounded-sm"}>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Array