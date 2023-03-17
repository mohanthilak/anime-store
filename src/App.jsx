import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Navbar from './componentes/Navbar/Navbar'
import HomeBL from './pages/HomeBeforeLogin/HomeBL'
import Auth from './pages/Auth/Auth'
import Signin from './pages/SignIn/Signin'
import SignUp from './pages/SignUp/SignUp'
import HomeAL from './pages/HomeAfterLogin/HomeAL';
import RequireAuth from './componentes/RequireAuth/RequireAuth'
import PersistLogin from './componentes/PersistLogin/PersistLogin'
import ListQuiz from './pages/QuizCatalogue/ListQuiz'
import Quiz from './pages/QuizPortal/Quiz'
import AdminPanal from './pages/AdminPanal/AdminPanal'
import QuizDetails from './pages/AdminPanal/QuizDetails'
import AddQuiz from './pages/AdminPanal/AddQuiz'
import Products from './pages/MerchStore/Products'
import TC from './pages/T&C/TC'
import Faq from './pages/FAQ/Faq'

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
            
            <Route element={<PersistLogin />}>
                <Route element={<RequireAuth />} >
                    <Route path="home" element={<HomeAL />} />
                </Route>

                <Route element={<RequireAuth />} >
                    <Route path="quiz" element={<ListQuiz />} />
                </Route>
                <Route element={<RequireAuth />} >
                    <Route path="quiz/:quiz_id" element={<Quiz />} />
                </Route> 
                <Route element={<RequireAuth />} >
                    <Route path="admin-panel" element={<AdminPanal />} />
                </Route>
                {/* <Route element={<RequireAuth />} >
                    <Route path="admin-panel/quiz-panel" element={<QuizPanel />} />
                </Route> */}
                <Route element={<RequireAuth />} >
                    <Route path="admin-panel/quiz" element={<QuizDetails />} />
                </Route>
                <Route element={<RequireAuth />} >
                    <Route path="admin-panel/add-quiz" element={<AddQuiz />} />
                </Route>
                <Route element={<RequireAuth />} >
                    <Route path="tandc" element={<TC />} />
                </Route>
                <Route element={<RequireAuth />} >
                    <Route path="faq" element={<Faq />} />
                </Route>
                <Route element={<RequireAuth />} >
                    <Route path="store" element={<Products />} />
                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
