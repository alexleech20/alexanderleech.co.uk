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
      </main>
    </>
  )
}

export default App
