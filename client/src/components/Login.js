import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
  };

  const login = e => {
    e.preventDefault();
    console.log(credentials)
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        //console.log(res)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={login}>
      <div>
        <h2>Please Login</h2>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          // value={this.state.credentials.username}
          onChange={handleChange}
        />
        <input 
          type="password"
          name="password"
          placeholder="Password"
          // value={this.state.credentials.password}
          onChange={handleChange}
          />
          <button type="submit">Login</button>
        </div>
    </form>
  );
};

export default Login;
