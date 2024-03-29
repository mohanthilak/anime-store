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
import Cart from './pages/Cart/Cart'
import PaymentGateway from './pages/Payments/PaymentGateway'
import Chat from './pages/Chat/Chat'
import ViewProduct from './pages/MerchStore/viewProduct/ViewProduct'
import Feedback from './pages/feedback/Feedback'
import AddProduct from './pages/AdminPanal/AddProduct'
import UsersDetails from './pages/AdminPanal/UsersDetails'
import FeedBackList from './pages/AdminPanal/FeedBackList'
import StoreInventory from './pages/AdminPanal/StoreInventory'
import EditProduct from './pages/AdminPanal/EditProduct'
import ReportPage from './pages/AdminPanal/ReportPage'
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from "powerbi-client"
import PowerBIReport from './pages/AdminPanal/ReportPage'


function App() {

  return (
    // <div className="App bg-[#902c34] text-white">
    <div className="App text-black bg-white">
      <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<SignUp />} />
            
            <Route element={<PersistLogin />}>
                <Route path="/" element={<HomeBL/>} />

                {/* User Routes */}
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="/home" element={<HomeAL />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="quiz" element={<ListQuiz />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="quiz/:quiz_id" element={<Quiz />} />
                </Route> 
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="tandc" element={<TC />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="faq" element={<Faq />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="store" element={<Products />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="cart" element={<Cart />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="payment-gatway" element={<PaymentGateway />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="product/:id" element={<ViewProduct />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="chat" element={<Chat />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["user"]} />} >
                    <Route path="feedback" element={<Feedback />} />
                </Route>
                {/* User Routes End*/}


                {/* Admin Routes */}
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel" element={<AdminPanal />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/customers" element={<UsersDetails />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/report" element={<PowerBIReport />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/store-inventory" element={<StoreInventory />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/edit-product/:productId" element={<EditProduct />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                    <Route path="admin-panel/add-product" element={<AddProduct />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/quiz" element={<QuizDetails />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/add-quiz" element={<AddQuiz />} />
                </Route>
                <Route element={<RequireAuth allowedRoles={["admin"]} />} >
                    <Route path="admin-panel/feedback-list" element={<FeedBackList />} />
                </Route>
            </Route>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )

}

export default App
