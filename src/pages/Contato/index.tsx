import { useState } from "react"

export default function Contato() {

    const [ counter, setCounter ] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

  return (
    <>
    <h1>TESTE 1</h1>
    <button onClick={decrease}>-</button>
    <h3>número: {counter}</h3>
    <button onClick={increase}>+</button>
    </>
  )
}
