import { useState } from 'react'
import './App.css'
import Background from './components/background'

function App() {

  return (
    <>
      <Background />
      <main style={{ position: "relative", zIndex: 1 }}>
        <h1 stlye={{ color: "white" }}>Hello people</h1>
      </main>
    </>
  )
}

export default App
