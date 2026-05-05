import './App.css'

// component imports
import Background from './components/background'
import HomePage from './components/homepage'

function App() {

  return (
    <>
      <Background />
      
      <main style={{ position: "relative", zIndex: 1 }}>
        <HomePage />
        <h1>Hello people</h1>
      </main>
    </>
  )
}

export default App
