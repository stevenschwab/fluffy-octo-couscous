import React, { useState } from 'react'

function App() {
  const num = 7
  const id = 'container'
  const ints = [1,2,3]
  const isHappy = true
  const [isOn, setIsOn] = useState(false)
  const [count, setCount] = useState(0)
  const toggle = evt => setIsOn(!isOn) // eslint-disable-line
  const inc = evt => setCount(count + 1) // eslint-disable-line

  return (
    <>
      <div id={id}>
        <h2 className='big'>Hello world!</h2>
      </div>

      <div id='container2'>
        <h2 className='big2'>{num + num}</h2>
      </div>

      {
        ints.map(int => <div key={int}>{int}</div>)
      }

      {
        isHappy ? "I am pretty happy" : "having a bad day"
      }
      <div>Lightbulb and Counter</div>
      <div onClick={toggle}>The bulb is {isOn ? "ON" : "OFF"}</div>
      <div onClick={inc}>The count {count}</div>
    </>
  )
}

export default App
