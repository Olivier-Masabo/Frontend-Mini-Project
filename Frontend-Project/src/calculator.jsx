function Calculator(){

    return(
        <>
        <h2 className="bg-green-500 text-2xl font-bold text-center p-5">Simple Calculator</h2>

        <div className="border-2 border-amber-600 w-[30%] h-[70vh] mx-auto bg-cyan-900 mt-10">
            <button className="bg-green-300 text-black p-2 rounded-xl mt-8">display</button>
            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">AC</button>
            <button className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold  cursor-pointer">DE</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">.</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">/</button>
            </div>
            
            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">7</button>
            <button className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">8</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-auto font-bold cursor-pointer">9</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">*</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">4</button>
            <button className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">5</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">6</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">+</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">1</button>
            <button className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">2</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">3</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">-</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3">
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">00</button>
            <button className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">0</button>
            <button className="bg-green-300 text-black p-2 rounded-xl  w-[30%] h-12 font-bold cursor-pointer">=</button>
            </div>
        </div>
        </>
    )
}

export default Calculator