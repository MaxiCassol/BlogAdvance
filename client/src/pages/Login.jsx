import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
  // It's posible to check inputs an make errors state to show if user is to short or mail ends with ".com"
  
  const [inputs, setInputs] = useState({  // data uasers from inputs
    username: "",
    password: "",
  });  
  const [users, setUsers] = useState([]); // data users from db
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res2 = await axios.get("/users");
        // console.log(res2.data);
        setUsers(res2.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();                 
    //Compare users to find same username and password
    const userMatch = users.find(user =>  
      user.username === inputs.username && 
      user.password === inputs.password);
    
    try {
      login(userMatch)
      if (userMatch) navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
