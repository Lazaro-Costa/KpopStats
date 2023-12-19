import React from 'react'
import { useUserStore } from '../../UserZustand';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children}: {children: React.ReactNode}) => {
  const { user } = useUserStore();
  if (user?.username) {
    return children;
  } else if (!user?.username) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
}

export default ProtectedRouter
