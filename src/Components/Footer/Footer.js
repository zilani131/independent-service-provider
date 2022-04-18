import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import googlemap from "../../Utilities/Logo/googlemap.png";
import {MailOpenIcon,UserIcon ,PhoneIcon,MapIcon} from '@heroicons/react/outline'
const Footer = () => {
  return (
    <div className="d-flex flex-sm-column align-items-center justify-content-center flex-md-row w-100 align">
      <div className=" my-3 mx-auto w-50 d-flex align-items-center justify-content-center">
        <img className="w-75 d-block" src={googlemap} alt="" />
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center"> 
      <div className="my-3" >
        <div>
          <h4 className="text-center">GET INTO SHAPE</h4>
          <h2 className="text-center">CONTACT INFORMATION</h2>
        </div >
        <div className="w-100 d-flex flex-sm-column flex-md-row align-items-sm--center justify-content-sm-center  ">
              <div className="my-5 mx-2">
                  <div><MapIcon style={{width:"40px"}}/> Agrabad,Chittagong</div>
                  <div><PhoneIcon style={{width:"40px"}}/> 017XXXXXX</div>
                  <div><MailOpenIcon style={{width:"40px"}}/> zilani@mail.com</div>
              </div>
            <div className="my-5 mx-2">
               
                <span className="d-block my-2"><UserIcon style={{width:"30px"}}/> <input  placeholder="First Name" type="text" name="" id="" /></span>  
                <span className="d-block my-2"><MailOpenIcon style={{width:"30px"}}/> <input  placeholder="Email" type="text" name="" id="" /></span>  
                <span className="d-block my-2"><PhoneIcon style={{width:"30px"}}/> <input  placeholder="Phone" type="tel" name="" id="" /></span>  
                 
                
              
            </div>
           
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
