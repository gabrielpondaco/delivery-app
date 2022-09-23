import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Products from './pages/Products';
import Orders from './pages/Orders';
import SellerOrders from './pages/SellerOrders';
import SellerOrdersDetails from './pages/SellerOrderDetails';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" replace /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrdersDetails /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}
export default App;
