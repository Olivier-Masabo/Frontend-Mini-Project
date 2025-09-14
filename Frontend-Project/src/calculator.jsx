import { useState } from "react"
function Calculator(){
    const[input, setInput]=useState('')

    const handleClick =(value) =>{
      setInput(input + value)
    }

    const handleDelete =() =>{
        setInput(input.slice(0,-1))
    }

    const handleClear = () =>{
        setInput("")
    }

    const handleOutput =() =>{
        setInput(eval(input).toString())
    }

    return(
        <>
        <h2 className="bg-green-500 text-2xl font-bold text-center p-5">Simple Calculator</h2>

        <div className="border-2 border-amber-600 w-[30%] h-[70vh] mx-auto bg-cyan-900 mt-10 p-5 text-right">
            <div className="bg-green-700 text-black p-2 rounded-xl mt-8 ">
            <input value={input} readOnly className="bg-transparent flex-1 text-right p-2 rounded-xl w-full outline-hidden text-2xl font-bold text-white" type="text" />
            </div>
            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button onClick={() =>handleClear()} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">AC</button>
            <button onClick={() =>handleDelete()} className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold  cursor-pointer">DE</button>
            <button onClick={() => handleClick(".")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">.</button>
            <button onClick={() => handleClick("/")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">/</button>
            </div>
            
            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button onClick={() =>handleClick("7")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">7</button>
            <button onClick={() =>handleClick("8")} className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">8</button>
            <button onClick={() =>handleClick("9")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-auto font-bold cursor-pointer">9</button>
            <button onClick={() =>handleClick("*")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">*</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button onClick={() =>handleClick("4")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">4</button>
            <button onClick={() =>handleClick("5")} className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">5</button>
            <button onClick={() =>handleClick("6")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">6</button>
            <button onClick={() =>handleClick("+")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">+</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3" >
            <button onClick={() =>handleClick("1")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">1</button>
            <button onClick={() =>handleClick("2")} className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">2</button>
            <button onClick={() =>handleClick("3")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">3</button>
            <button onClick={() =>handleClick("-")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">-</button>
            </div>

            <div className=" flex gap-x-3 space-y-3 mt-3">
            <button onClick={() =>handleClick("00")} className="bg-green-300 text-black p-2 rounded-xl  w-[14%] h-12 font-bold cursor-pointer">00</button>
            <button onClick={() =>handleClick("0")} className="bg-green-300 text-black p-2 rounded-xl w-[14%] h-12 font-bold cursor-pointer">0</button>
            <button onClick={() => handleOutput()} className="bg-green-300 text-black p-2 rounded-xl  w-[30%] h-12 font-bold cursor-pointer">=</button>
            </div>
        </div>
        </>
    )
}

export default Calculator