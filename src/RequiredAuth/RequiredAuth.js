import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import SpinnerLoad from "../Components/Shared/SpinnerLoad";
import auth from "../firebase.init";

const RequiredAuth = ({ children }) => {
  const [user, loading, ] = useAuthState(auth);
  let location = useLocation();
//   fixing reload problem adding loading
  if (loading) {
    return <SpinnerLoad></SpinnerLoad>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
