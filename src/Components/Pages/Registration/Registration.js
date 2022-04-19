import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import google from "../../../Utilities/Logo/google.png";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { async } from "@firebase/util";
const Registration = () => {
    const navigate=useNavigate();
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPwRef = useRef("");
  const nameRef = useRef("");
  //    sign in with google
  const [signInWithGoogle, loading1] = useSignInWithGoogle(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
//   create user 
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    // email verification
    
  const handleChecked = (e) => {
    setAgree(!agree);
  };
  const handleRegistration =  async(e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPw = confirmPwRef.current.value;
    
    if (password.length < 6) {
      setError("Password must have 6 character or more");
      return;
    }
    if (password !== confirmPw) {
      setError("Password don't match");
      return;
    }
   
   await createUserWithEmailAndPassword(email, password);
   await  updateProfile({ displayName :name});
   navigate('/home')
  };
  console.log(user);

  return (
    <div style={{marginTop:'100px'}} className="w-75 mx-auto">
      <Form
        onSubmit={handleRegistration}
        className="formWidth mx-auto border border-3 border-dark rounded-3 py-5 px-4 my-5 shadow-lg "
      >
        <h3 className="text-center">Creat New Account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Your name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPwRef}
            type="password"
            placeholder="Password"
            required
          />
          <p className="text-center text-danger my-3 fw-bold">{error}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox ">
          <Form.Check
            onClick={handleChecked}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <Button
          disabled={!agree}
          type="submit"
          className="d-block mx-auto w-50 fw-bold"
          variant="outline-dark "
        >
          Create an Account
        </Button>
        <div>
          <div className="d-flex align-items-center justify-content-center my-5">
            <div
              style={{ height: "5px" }}
              className="w-25 bg-dark border rounded"
            ></div>
            <div className="mx-2">Or</div>
            <div
              style={{ height: "5px" }}
              className="w-25 bg-dark border rounded"
            ></div>
          </div>
        </div>
        <div>
          <Button onClick={() => signInWithGoogle()} className="d-block mx-auto w-50" variant="outline-dark">
            {" "}
            
              <img style={{ width: "30px" }} src={google} alt="" />
           
           <span className="mx-1 fw-bold">Sign up with Google</span> 
          </Button>
          <div>
          <span className="text-center d-block my-3 fw-bold">Already have an Account? <Link className="text-decoration-none" to="/login"> Log in</Link> </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Registration;
