import AddProduct from './pages/addProduct/AddProduct'
import Categories from './pages/categories/Categories'
import CategoriesProducts from './pages/categories/CategoriesProducts'
import EnteryPage from './pages/enteryPage'
import Home from './pages/home/Home'
import Login from './pages/login/login'
import PosSale from './pages/pos-sale/PosSale'
import Print from './pages/print/Print'
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
          <Route path="/pos-sale" element={<PosSale />} />
          <Route path="/print" element={<Print />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories-products" element={<CategoriesProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
