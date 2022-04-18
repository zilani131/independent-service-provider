import React from "react";

const Blog = () => {
  return (
    <div>
      <h1>Difference between authorization and authentication</h1>
      <p>
        Authentication is the process of verifying who a user is and
        authorization is the process of verifying what they have access to
      </p>
      <h1>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <p>
        Firebase Authentication makes it easier to get ones users signed-in
        without having to understand the complexities behind implementing ones
        own authentication system . so it is easy to use firebase.
      </p>
      <h1>What other services does firebase provide other than authentication</h1>
      <p>
      Cloud Firestore.
Cloud Functions.
Authentication.
Hosting.
Cloud Storage.
Google Analytics.
Predictions.
Cloud Messaging.
      </p>
    </div>
  );
};

export default Blog;
