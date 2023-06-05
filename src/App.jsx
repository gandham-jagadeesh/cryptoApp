import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Home'
import Header from '../src/components/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App
