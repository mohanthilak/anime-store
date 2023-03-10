import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './componentes/Navbar/Navbar'
import HomeBL from './pages/HomeBeforeLogin/HomeBL'
import Auth from './pages/Auth/Auth'
import Signin from './pages/SignIn/Signin'
import SignUp from './pages/SignUp/SignUp'
import HomeAL from './pages/HomeAfterLogin/HomeAL';
import RequireAuth from './componentes/RequireAuth/RequireAuth'

function App() {

  return (
    // <div className="App bg-[#902c34] text-white">
    <div className="App text-black bg-white">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<HomeBL/>} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
            
            <Route element={<RequireAuth />} >
              <Route path="home" element={<HomeAL />} />
            </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
