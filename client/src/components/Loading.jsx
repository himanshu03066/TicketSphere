

import React, { useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
const Loading = ({ message = "Loading movie details..." }) => {

  const{nextUrl}=useParams()
  const navigate=useNavigate();
  useEffect(() => {
  if (nextUrl) {
    setTimeout(() => {
      navigate('/' + nextUrl);
    }, 8000);
  }
}, []);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 px-4">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-primary"></div>
      <p className="text-gray-500 text-lg font-medium">{message}</p>
    </div>
  )
}

export default Loading;
