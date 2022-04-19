import React from "react";

const Blog = () => {
  return (
    <div className="w-50 mx-auto my-5">
      <h4 style={{marginTop:'100px'}}>Difference between authorization and authentication</h4>
      <p style={{fontWeight:"600",fontSize:"20px"}}>
        Authentication is the method of identifying who a user is <br />
        Authorization tells the user what they have access to
      </p>
      <h4>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h4>
      <p style={{fontWeight:"600",fontSize:"20px"}}>
        Firebase Authentication make it easier to set up authentication system without knowing the complexity of code .
        So it is easy to use firebase.
        Other options to implement authentication is.
        <ul style={{fontWeight:"600",fontSize:"20px"}}>
          <li>Password based Authentication </li>
          <li>Biometric Authentication</li>
          <li>Token Based Authentication</li>
        </ul>
      </p>
      <h4>What other services does firebase provide other than authentication</h4>
      <p>
       <ul style={{fontWeight:"600",fontSize:"20px"}}>
          <li> Cloud Firestore.</li>
          <li>Cloud Functions.</li>
          <li>Hosting.</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Predictions.</li>
          <li>Cloud Messaging.</li>
        </ul>
      </p>
    </div>
  );
};

export default Blog;
