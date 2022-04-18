import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import google from "../../../Utilities/Logo/google.png";
import Button from "react-bootstrap/Button";
import {
    useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SpinnerLoad from "../../Shared/SpinnerLoad";
const Login = () => {
    // error handling

  // authentication
   
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [user1,loading2] = useAuthState(auth);
  const [signInWithEmailAndPassword, user, loading,error] =
    useSignInWithEmailAndPassword(auth);
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
   
    
  };
  const [signInWithGoogle, loading1,error1] = useSignInWithGoogle(auth);
  const handleGoogle=()=>{
    signInWithGoogle()
   
  }
  if(user1){
    navigate(from,{ replace: true });
  }
  let showError,showError1;
 if(error)
 {console.log(error)
     const z=error.message;
     showError=z.split(':');
     console.log(showError)
 }

    
  
if(loading||loading1||loading2){
    return <SpinnerLoad></SpinnerLoad>;
}
 
  return (
    <div className="w-75 mx-auto">
      <Form
        onSubmit={handleLogIn}
        className="w-50 mx-auto border border-3 border-dark rounded-3 py-5 px-4 my-5 shadow-lg "
      >
        <h3 className="text-center">Log in</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          
        </Form.Group>
       { showError&&<div className="text-center text-danger my-3 fw-bold">
           {showError[1]}</div>}
      
        
        <Button
          className="d-block mx-auto w-50 fw-bold"
          variant="outline-dark"
          type="submit"
        >
          Log In
        </Button>
        <div>
          <div className="d-flex align-items-center justify-content-center my-5">
            <div
              style={{ height: "5px" }}
              className="w-25 bg-dark border rounded"
            ></div>
            <div className="mx-2 fw-bold">Or</div>
            <div
              style={{ height: "5px" }}
              className="w-25 bg-dark border rounded"
            ></div>
          </div>
        </div>
        <div>
          <Button
            onClick={handleGoogle}
            className="d-block mx-auto w-50 fw-bold"
            variant="outline-dark"
          >
            {" "}
            <img style={{ width: "30px" }} src={google} alt="" />
            <span className="fw-bold mx-2">Sign in with Google</span>
          </Button>
          <div>
            <span className="fw-bold text-center d-block my-3">
              Not Register Yet?{" "}
              <Link className="text-decoration-none" to="/registration">
                {" "}
                Create An Account
              </Link>{" "}
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
