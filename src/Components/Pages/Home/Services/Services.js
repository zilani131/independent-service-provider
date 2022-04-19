import React, { useEffect, useState } from "react";
import {  Row } from "react-bootstrap";
import Service from "./Service/Service";
const Services = () => {
  
  const [services, setServices] = useState([]);
  // fetching data from data.json
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div
          style={{ height: "5px" }}
          className="w-25 bg-dark border rounded"
        ></div>
        <div className="mx-4 fw-bold">Our Services</div>
        <div
          style={{ height: "5px" }}
          className="w-25 bg-dark border rounded"
        ></div>
      </div>
      {/* services */}
      <div>
        {/* grid system */}
        <Row className="g-5 row-cols-1 row-cols-md-2 mx-auto w-50 my-5 ">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
