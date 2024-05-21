import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import PrivateRoute from './components/misc/PrivateRoute'
import Navbar from './components/misc/Navbar'
import Home from './components/home/Home'
import Login from './components/home/Login'
import Signup from './components/home/Signup'
import OAuth2Redirect from './components/home/OAuth2Redirect'
import AdminPage from './components/admin/AdminPage'
import UserPage from './components/user/UserPage'
import About from "./components/About";
import PaymentCancel from './components/payment/PaymentCancel';
import PaymentSuccess from './components/payment/PaymentSuccess';
import EmailSuccess from './components/email/EmailSuccess'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/oauth2/redirect' element={<OAuth2Redirect />} />
          <Route path="/adminpage" element={<PrivateRoute><AdminPage /></PrivateRoute>}/>
          <Route path="/userpage" element={<PrivateRoute><UserPage /></PrivateRoute>}/>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/payment/success" element={<PaymentSuccess/>} />
          <Route path="/payment/cancel" element={<PaymentCancel/>} />
          <Route path="/emailconfirm" element={<EmailSuccess/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
