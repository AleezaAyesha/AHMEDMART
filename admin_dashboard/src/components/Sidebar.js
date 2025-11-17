import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: '#2c3e50', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h3>AhmedMart</h3>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/dashboard" style={{ color: '#fff' }}>Dashboard</Link></li>
          <li><Link to="/users" style={{ color: '#fff' }}>Users</Link></li>
          <li><Link to="/vendors" style={{ color: '#fff' }}>Vendors</Link></li>
          <li><Link to="/products" style={{ color: '#fff' }}>Products</Link></li>
          <li><Link to="/orders" style={{ color: '#fff' }}>Orders</Link></li>
          <li><Link to="/zones" style={{ color: '#fff' }}>Zones</Link></li>
          <li><Link to="/reviews" style={{ color: '#fff' }}>Reviews</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
