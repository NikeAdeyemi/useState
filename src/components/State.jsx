import React from 'react'
import { useState } from 'react'

const State = () => {
    const [name, setName] = useState("Adenike")

    const [job, setJob] = useState("software developer")

    const [acct, setAcct] = useState("Billion Dollars")

    const coronation = () => {
        setName("Chief Nike")
        setJob("Iyaloja")
        setAcct("Billion Billion Dollars")
        }
  return (
    <div>
        <h2>My Name is {name}, i am a {job} and i have {acct}</h2>

        <button onClick={coronation}>Coronation</button>
    </div>
  )
}

export default State