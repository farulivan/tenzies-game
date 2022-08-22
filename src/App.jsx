import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="bg-cyan-900 font-karla h-screen flex justify-center items-center">
        <div className="bg-slate-200 max-w-md h-96 rounded-xl p-8">
          <div className="Header text-center text-cyan-900">
            <h1 className="text-2xl">Tenzies</h1>
            <p className="font-inter text-sm px-5 my-1">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <section className="Main grid grid-cols-5 my-5 gap-7 p-2 text-center">
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-slate-100 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
            <div className="number bg-emerald-400 rounded-lg drop-shadow-md h-11 text-xl flex items-center justify-center">1</div>
          </section>
          <section className="Roll flex justify-center">
            <div className="roll-button bg-cyan-700 w-24 h-12 flex justify-center items-center text-lg text-slate-100 rounded-xl drop-shadow-md">Roll</div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
