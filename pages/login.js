import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addCart, logIn } from '../redux/action/ActionType';

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(logIn(user));
    router.push(`/products`);
  }

  const logInData = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [name]: value });

  }

  return (
    <div className='flex justify-center h-[60vh]'>
      <div className="w-full max-w-md absolute top-32">
        <h1 className='text-center text-4xl my-3 text-gray-900 font-serif'>Login</h1>
        <form className="bg-zinc-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name='username' value={user.username} placeholder="Username" onChange={logInData} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name='password' value={user.password} placeholder="******************" onChange={logInData} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleLogin()}>
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
