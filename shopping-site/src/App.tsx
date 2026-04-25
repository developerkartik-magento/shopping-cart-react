import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './home/Footer'
import Header from './home/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Shop />} />
        <Route path="/my-account" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
