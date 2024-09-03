import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, []);
  return (
    <div className='flex sm:h-[550px] md:h-[550px] rounded-md overflow-hidden bg-violet-400 bg-clip-padding bg-opacity-1'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default HomePage