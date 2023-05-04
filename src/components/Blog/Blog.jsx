import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-2 mx-64">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components.</h2>
          <p>In React, controlled components refer to components whose state and behavior are controlled by the parent component. Uncontrolled components, on the other hand, refer to components that internally maintain their own state.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">2. How to validate React props using PropTypes?</h2>
          <p>PropTypes is a mechanism for adding type checking to component props built internally in React. It uses a special property called propTypes to set up type checking. When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">3. Tell us the difference between nodejs and express js.</h2>
          <p>Node.js is a platform for building the i/o applications which is made using JavaScript for server-side works. Node.js provides a set of built-in modules for working with file system, networking, and other low-level tasks. Express.js, on the other hand, is a web framework built on top of Node.js.</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">4. What is a custom hook, and why will you create a custom hook?</h2>
          <p>React's custom hooks are easily reusable, making your code cleaner and reducing your coding time. A custom hook is a function that uses one or more of React's built-in hooks (e.g. useState or useEffect) to perform a specific task or logic that can be reused across multiple React application components.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
