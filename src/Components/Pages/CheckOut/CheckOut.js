import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form'
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CheckOut = () => {
  const { serviceId } = useParams();

  return (
    <div style={{marginTop:'100px'}} className=" w-75 mx-auto ">
     
      <Form
      
        className="formWidth mx-auto border border-3 border-dark rounded-3 py-5 px-4 my-5 shadow-lg "
      >
        <h3 className="text-center">Package Number {serviceId}</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
          
            type="text"
            placeholder="Enter Name"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email </Form.Label>
          <Form.Control
          
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Address</Form.Label>
          <Form.Control
          
            type="text"
            placeholder="Enter Address"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Phone Number</Form.Label>
          <Form.Control
        
            type="tel"
            placeholder="Enter phone number"
            required
          />
          
        </Form.Group>
      
        
        <Button
         onClick={()=>toast("Thank you for the booking")}
          className="d-block mx-auto w-50 fw-bold"
          variant="outline-dark"
          type="submit"
        >
          Check Out
        </Button>
        <ToastContainer/>
        <div>
      
        </div>
        <div>
     
          
        </div>
      </Form>
    </div>
  );
};

export default CheckOut;
