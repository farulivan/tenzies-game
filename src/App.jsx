import { nanoid } from "nanoid"
import { useState } from "react"
import Die from "./components/Die"

function App() {
  const allNewDice = () => {
    const newDice = []

    for (let i=0; i < 10; i++){
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push({
        value: randomNum,
        isheld: false,
        id: nanoid()
      })
    }
    
    return newDice
  }

  const [allDice, setAllDice] = useState(allNewDice())

  const diceElements = allDice.map(die => <Die key={die.id} value={die.value} />)
  
  const rollDice = () => setAllDice(allNewDice())

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
            <button onClick={rollDice} className="roll-button bg-cyan-700 w-24 h-12 flex justify-center items-center text-lg text-slate-100 rounded-xl drop-shadow-md active:shadow-inner hover:bg-cyan-900">Roll</button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
