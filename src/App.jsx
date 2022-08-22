import { nanoid } from "nanoid"
import { useState } from "react"
import Die from "./components/Die"

function App() {
  const [allDice, setAllDice] = useState(allNewDice())

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const newDice = []

    for (let i=0; i < 10; i++){  
      newDice.push(generateNewDice())
    }
    
    return newDice
  }
  
  function rollDice() {
    setAllDice(prevDice => prevDice.map(die => (
        die.isHeld ?
          die :
          generateNewDice()
      ))
    )
  }

  function holdDice(id) {
    setAllDice(prevDice => prevDice.map(die => (
        die.id === id ? 
          {...die, isHeld: !die.isHeld} 
          : die
      )))
  }

  const diceElements = allDice.map(die => (
      <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)} 
      />
  ))
  
  return (
    <div className="App">
      <div className="bg-cyan-900 font-karla h-screen flex justify-center items-center">
        <div className="bg-slate-200 max-w-md h-96 rounded-xl p-8 text-cyan-900">
          <div className="Header text-center">
            <h1 className="text-2xl">Tenzies</h1>
            <p className="font-inter text-sm px-5 my-1">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className="die-container grid grid-cols-5 my-5 gap-4 md:gap-7 p-2 text-center">
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
