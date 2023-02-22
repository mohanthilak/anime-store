import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './componentes/Navbar/Navbar'
import HomeBL from './pages/HomeBeforeLogin/HomeBL'
import Auth from './pages/Auth/Auth'

function App() {

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeBL/>} />
            <Route path="/auth/:type" element={<Auth />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
