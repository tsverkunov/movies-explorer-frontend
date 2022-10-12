import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRout({ loggedIn }) {
  return (
    loggedIn ? <Outlet/> : <Navigate to="/"/>
  );
}

export default ProtectedRout;