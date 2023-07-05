import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </>
  )
}

export default App