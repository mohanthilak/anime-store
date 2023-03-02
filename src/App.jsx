import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './componentes/Navbar/Navbar'
import HomeBL from './pages/HomeBeforeLogin/HomeBL'
import Auth from './pages/Auth/Auth'
import Signin from './pages/SignIn/Signin'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomeBL/>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/auth/:type" element={<Auth />}/> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
