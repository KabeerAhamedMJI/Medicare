import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if(token) {
        setAuthenticated();
      }
    };

    checkAuth();
  }, []);
  
  const handleLinkClick = (event) => {
    event.preventDefault(); 
  
    if (authenticated) {
      navigate('/patient');
    } else {
      navigate('/');
    }
  }; 

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <a
          href="#"
          onClick={handleLinkClick}
          className="mt-6 inline-block rounded bg-[#223C6F] px-5 py-3 text-sm font-medium text-white hover:bg-[#FA9334] hover:text-[#223C6F] focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
