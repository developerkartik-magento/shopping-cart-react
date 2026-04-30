import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log(data);

      if (data.token) {
        localStorage.setItem('userToken', data.token);
        localStorage.setItem('accountUsername', username);
        localStorage.setItem('accountPassword', password);

        const usersResponse = await fetch('https://fakestoreapi.com/users');
        const users = await usersResponse.json();
        const user = users.find((u: any) => u.username === username);

        if (user) {
          localStorage.setItem('firstName', user.name?.firstname || '');
          localStorage.setItem('lastName', user.name?.lastname || '');
          localStorage.setItem('email', user.email || '');
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('accountEmail', user.email || '');
        } else {
          localStorage.setItem('firstName', '');
          localStorage.setItem('lastName', '');
          localStorage.setItem('email', '');
          localStorage.setItem('user', JSON.stringify({ username, password }));
          localStorage.setItem('accountEmail', '');
        }

        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Login failed: ' + (data.message || 'Invalid credentials'));
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Login to continue shopping</p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" type="submit">
            Login
          </button>

          <div className="divider">OR</div>
        </div>
      </div>
    </form>
  );
};

export default Login;