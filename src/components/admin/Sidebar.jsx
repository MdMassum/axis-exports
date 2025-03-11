import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutFailure, signOutStart, signOutSuccess } from '../../redux/user/userSlice';
import axios from 'axios';


const Sidebar = () => {
  const nav = [
    {
      icon: "#",
      label: 'Products',
      href: '/admin/product',
    },
    {
      icon: "#",
      label: 'Enquiries',
      href: '/admin/enquiries',
    }
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {

    try {
      dispatch(signOutStart());
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/logout`,{withCredentials:true});
      if(response.data.success === false){
        dispatch(signOutFailure(response.data.message))
        return;
      }
      console.log("Logout Success:", response.data);
      dispatch(signOutSuccess());
      navigate('/admin/login');
    } catch (error) {
      console.log(error)
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <div className="flex flex-col absolute top-0 w-44  h-screen items-center text-lg bg-gray-200 border-r-1 border-gray-200 shadow-2xl">
        <h1 className='py-3 mt-6 mb-4 text-green-700 font-bold'>Admin Panel</h1>
      <div className="flex flex-col w-full h-full bg-gray-200 gap-5 px-3 py-3 items-center  rounded-md ">
        {nav.map((item) => (
          <NavLink
            to={item.href}
            key={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center text-center gap-2 hover:text-green-700 transition-colors duration-300 ${
                isActive ? 'text-green-700 ' : ''
              }`
            }
          >
            {/* <img src={item.icon} alt={} className="h-7 text-green-6700 " /> */}
            <p className='max-w-24'>{item.label}</p>
          </NavLink>
        ))}
      </div>

      <div 
      onClick={()=>handleLogout()}
      className='flex w-full rounded-md py-3 gap-1 justify-center items-center bg-gray-200 mt-2 cursor-pointer'>
        {/* <img src="#" alt="" className='h-9'/> */}
        <p className=' hover:text-rose-700'>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
