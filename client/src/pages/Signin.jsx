import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { signInStart , signInSuccess,signInFailure } from '../redux/user/userSlice.js';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading , error} = useSelector((state) => state.user);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());                               //setLoading(true);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
          dispatch(signInFailure(data.message));                                     // setLoading(false) ; setError(data.message);
        return;
      }
                                      
     
      dispatch(signInSuccess(data));                                                  // setLoading(false);  // setError(null);
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
      // setLoading(false);
      // setError(error.message);
    }
  };


  return (
    <div className=' p-3 max-w-lg mx-auto'>
      <h1 className='text-white text-3xl text-center font-semibold my-7'>Signin</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      {/* <input
          type='text'
          placeholder='username'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        /> */}
        <input
        type="email" 
        placeholder="email" 
        id="email" 
        className='border p-3 rounded-lg'
        onChange={handleChange}
        />
        <input type="password" 
        placeholder="password" 
        id="password"
        className='border p-3 rounded-lg'
        onChange={handleChange} 
        />
         <button 
          disabled={loading}
          className='text-white bg-slate-700 p-3 rounded-lg  hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
         
         </button>
         </form>
         <div className='flex gap-2 mt-5'>
         <span className='text-blue-700'>Don't have? create account </span>
         <Link to={"/sign-up"}>
         <p className='text-white'>Sign up</p>
         </Link>
        
      
       </div>
      {error && <p className ='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}