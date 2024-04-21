import EnteryPage from './pages/enteryPage'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import './sass/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnteryPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
