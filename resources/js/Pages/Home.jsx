import React, { useState } from 'react'

export default function Home() {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1>Bienvenue</h1>
      <button onClick={() => setState(state + 1)}>increment</button>
      <button onClick={() => setState(state - 1)}>decrement</button>
      <p>{state}</p>
    </div>
  )
}
