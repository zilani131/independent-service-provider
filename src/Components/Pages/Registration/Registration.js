import React from 'react';
import Form from "react-bootstrap/Form";
import google from "../../../Utilities/Logo/google.png"
import Button from "react-bootstrap/Button";
const Registration = () => {
    return (
        <div className="w-75 mx-auto">
        <Form className="w-50 mx-auto border border-3 border-dark rounded-3 py-5 px-4 my-5 shadow-lg ">
            <h3 className='text-center'>Creat New Account</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox ">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
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
          <Button className="d-block mx-auto" variant="outline-dark"> <span><img style={{width:"30px"}} src={google} alt="" /></span> Sign up with Google</Button>
  
          </div>
        </Form>
      </div>
    );
};

export default Registration;