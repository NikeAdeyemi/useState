import React, { useState } from 'react'
// import { useState } from 'react'

const State2 = () => {
    const [day, setDay] = useState("Thursday")

    const [action, setAction] = useState("Coding all day")

    const click = () => {
        setDay("Friday")
        setAction("TGIF all day")
    }

  return (
    <div>
    <h1>Today is {day}, {action}</h1>

    <button onClick={click}>Click me</button>
    </div>
  )
}

export default State2