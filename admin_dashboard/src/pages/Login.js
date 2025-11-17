import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAppStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 40, borderRadius: 12, boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
        <h2>Admin Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <br/><br/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
