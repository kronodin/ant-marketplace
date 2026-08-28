import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import AdminLayout from './admin/AdminLayout'
import AdminDashboard from './admin/Dashboard'
import AdminProducts from './admin/Products'
import SellerLayout from './seller/SellerLayout'
import SellerDashboard from './seller/Dashboard'
import SellerProducts from './seller/Products'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
        <Route path="/seller" element={<SellerLayout><SellerDashboard /></SellerLayout>} />
        <Route path="/seller/products" element={<SellerLayout><SellerProducts /></SellerLayout>} />
        <Route path="*" element={<div className="p-10"><h1 className="text-2xl font-bold">ANT</h1><Link to="/" className="underline">Home</Link></div>} />
      </Routes>
    </BrowserRouter>
  )
}
