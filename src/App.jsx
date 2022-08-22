import { useState } from "react"
import Die from "./components/Die"

function App() {
  const allNewDice = () => {
    const newDice = []

    for (let i=0; i < 10; i++){
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push(randomNum)
    }
    
    return newDice
  }

  const [allDice, setAllDice] = useState(allNewDice())

  const diceElements = allDice.map(die => <Die value={die} />)

  return (
    <div className="App">
      <div className="bg-cyan-900 font-karla h-screen flex justify-center items-center">
        <div className="bg-slate-200 max-w-md h-96 rounded-xl p-8">
          <div className="Header text-center text-cyan-900">
            <h1 className="text-2xl">Tenzies</h1>
            <p className="font-inter text-sm px-5 my-1">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="die-container grid grid-cols-5 my-5 gap-7 p-2 text-center">
            {diceElements}
          </div>
          <section className="Roll flex justify-center">
            <div className="roll-button bg-cyan-700 w-24 h-12 flex justify-center items-center text-lg text-slate-100 rounded-xl drop-shadow-md">Roll</div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
