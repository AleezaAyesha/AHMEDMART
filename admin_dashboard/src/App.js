import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Vendors from './pages/Vendors';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Reviews from './pages/Reviews';
import Zones from './pages/Zones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/zones" element={<Zones />} />
      </Routes>
    </Router>
  );
}

export default App;
