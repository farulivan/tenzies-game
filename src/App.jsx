import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useWindowSize } from "rooks"
import Confetti from "react-confetti"
import Die from "./components/Die"

function App() {
  const [allDice, setAllDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const { width, height } = useWindowSize()

  // ---- Bob Ziroll Solution
  // React.useEffect(() => {
  //   const allHeld = dice.every(die => die.isHeld)
  //   const firstValue = dice[0].value
  //   const allSameValue = dice.every(die => die.value === firstValue)
  //   if (allHeld && allSameValue) {
  //       setTenzies(true)
  //       console.log("You won!")
  //   }
  // }, [dice])  

  // ---- My Solution using Set objects ES6+
  useEffect(() => {
    const cond1 = new Set(allDice.map(dice => dice.value)).size === 1; 
    const cond2 = new Set(allDice.map(dice => dice.isHeld)).size === 1;
    if(cond1 && cond2) {
      setTenzies(true)
    } 
  },[allDice])

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

  function newGame() {
    
  }
  
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
            <button onClick={rollDice} className="roll-button bg-cyan-700 px-12 h-12 flex justify-center items-center text-lg text-slate-100 rounded-xl drop-shadow-md active:shadow-inner hover:bg-cyan-900">{tenzies ? 'New Game' : 'Roll'}</button>
          </section>
          {tenzies && <Confetti
            width={width}
            height={height}
          />}
        </div>
      </div>
    </div>
  )
}

export default App
