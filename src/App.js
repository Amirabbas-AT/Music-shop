import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import LoginPage from './pages/login';
import ProductDetail from './pages/ProductDetail';
import Credit from './pages/Credit'



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path='/credit' element={<Credit />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
