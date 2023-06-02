import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/User';
import { logout } from './features/User';

export const Login = () => {
const dispatch = useDispatch();

  return (
    <div>
<button onClick={() => {dispatch(login({name: 'Alex', age: '10', email: 'abc@mail.com'}))}}>Login</button>
<button onClick={() => {dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login;

// useDispatch is used to modify the state and useSelector is used to fetch the state -> redux hooks