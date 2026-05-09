import './App.css'

// component imports
import Background from './components/background'
import HomePage from './components/homepage'
import {Helmet} from 'react-helmet';


function App() {

  return (
    <>
      <Helmet>
        <title>Alexander Leech - Frontend Developer</title>
        <meta name="description"/>
      </Helmet>
      <Background />
      
      <main style={{ position: "relative", zIndex: 1 }}>
        <HomePage />
      </main>
    </>
  )
}

export default App
