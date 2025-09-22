import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(prev => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleDelete = () => {
        setInput(prev => prev.slice(0, -1));
    };

    const handleOutput = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult.toString());
            setInput(evalResult.toString());
        } catch (error) {
            setResult('Error');
            setInput('');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 p-6 w-full max-w-sm">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white">Calculator</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
                </div>

                <div className="bg-gray-800/70 rounded-2xl p-6 mb-6 border border-gray-700/50">
                    <div className="text-gray-400 text-sm mb-1 h-4">
                        {result && `= ${result}`}
                    </div>
                    <input 
                        value={input || '0'} 
                        readOnly 
                        className="bg-transparent w-full text-right text-3xl font-light text-white outline-none" 
                        type="text" 
                    />
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <button onClick={handleClear} className="bg-red-500/80 hover:bg-red-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-red-500/25">AC</button>
                    <button onClick={handleDelete} className="bg-orange-500/80 hover:bg-orange-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-orange-500/25">⌫</button>
                    <button onClick={() => handleClick(".")} className="bg-blue-500/80 hover:bg-blue-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-blue-500/25">•</button>
                    <button onClick={() => handleClick("/")} className="bg-purple-500/80 hover:bg-purple-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-purple-500/25 text-xl">÷</button>

                    <button onClick={() => handleClick("7")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">7</button>
                    <button onClick={() => handleClick("8")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">8</button>
                    <button onClick={() => handleClick("9")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">9</button>
                    <button onClick={() => handleClick("*")} className="bg-purple-500/80 hover:bg-purple-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-purple-500/25 text-xl">×</button>

                    <button onClick={() => handleClick("4")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">4</button>
                    <button onClick={() => handleClick("5")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">5</button>
                    <button onClick={() => handleClick("6")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">6</button>
                    <button onClick={() => handleClick("-")} className="bg-purple-500/80 hover:bg-purple-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-purple-500/25 text-xl">−</button>

                    <button onClick={() => handleClick("1")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">1</button>
                    <button onClick={() => handleClick("2")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">2</button>
                    <button onClick={() => handleClick("3")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">3</button>
                    <button onClick={() => handleClick("+")} className="bg-purple-500/80 hover:bg-purple-500 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-purple-500/25 text-xl">+</button>

                    <button onClick={() => handleClick("0")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg col-span-2">0</button>
                    <button onClick={() => handleClick("00")} className="bg-gray-700/60 hover:bg-gray-600 text-white p-4 rounded-xl h-14 font-semibold transition-all duration-200 active:scale-95 shadow-lg">00</button>
                    <button onClick={handleOutput} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white p-4 rounded-xl h-14 font-bold transition-all duration-200 active:scale-95 shadow-lg hover:shadow-emerald-500/30 text-xl">=</button>
                </div>
            </div>
        </div>
    );
}