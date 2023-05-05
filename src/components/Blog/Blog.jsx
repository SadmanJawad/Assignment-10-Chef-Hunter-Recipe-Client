import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";


const Blog = () => {
  
  
  const [loader, setLoader] = useState(false);

  // download pdf function
  const downloadPDF = () => {
    const capture = document.querySelector('.blog-page')  
    setLoader(true);
      html2canvas(capture)
      .then((canvas)=> {
        const imgData = canvas.toDataURL('img/png');
        const doc = new jsPDF('p', 'mm', 'a4');
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight() ;
        doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
        setLoader(false)
        doc.save('blogs.pdf');
      })
  }

  return (
 <div>
  <Marquee speed={100}>
  <p className="sm:text-xl lg:text-5xl mb-5 text-purple-500 font-bold">Welcome to our blog page</p>
  </Marquee>
{/* Download PDF button */}
  <div className="receipt-action-div ml-64 pl-96">
      <div className="actions-right">
        <button
        className="receipt-modal-download-button btn bg-purple-500 text-white border-none rounded-none"
         onClick={downloadPDF}
         disabled={!loader===false}
        >
          {loader?(
            <span>Downloading...</span>
          ):(
            <span>
              Download PDF
            </span>
          )}
        </button>
      </div>
    </div>
  
     <div className="grid lg:grid-cols-2 lg:mx-64 blog-page">
      <div className="card w-96 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title">1. Tell us the differences between uncontrolled and controlled components.</h2>
          <p>Uncontrolled components are traditional HTML form elements where form data is processed by the browser DOM, while controlled components are form elements whose value is controlled by React's state. Controlled components provide more control over form data and allow for validation and other controls, but can be more complicated to implement. Uncontrolled components are easier to use but offer less control over form data.</p>
        </div>
      </div>
      <div className="card w-96 shadow-xl mb-4">
        <div className="card-body">
          <h2 className="card-title">2. How to validate React props using PropTypes?</h2>
          <p>In React, you can use the PropTypes library to validate the types of the props that a component expects to receive. When you specify a prop type using PropTypes, React will check that the value of the prop being passed to the component matches the specified type. If it doesn't match, React will issue a warning in the console.</p>
        </div>
      </div>
      <div className="card w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">3. Tell us the difference between nodejs and express js.</h2>
          <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript code outside of the browser. It provides a number of built-in modules for working with file systems, networking, and other system-level tasks. Express.js, on the other hand, is a popular web framework built on top of Node.js, which provides a set of tools and functionality for building web applications and APIs. Express.js simplifies the process of handling HTTP requests and responses, routing, middleware, and other web development tasks by providing a clean and minimalistic API. While Node.js provides a powerful runtime environment for running JavaScript code, Express.js provides an easy-to-use and flexible platform for building web applications and APIs with Node.js.</p>
        </div>
      </div>
      <div className="card w-96  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">4.What is a custom hook, and why will you create a custom hook?</h2>
          <p>A custom hook is a function that starts with the prefix use and allows you to reuse stateful logic across multiple components in a React application. Custom hooks encapsulate complex logic and can help make your components more reusable and easier to test. You might create a custom hook when you find yourself repeating the same code across multiple components or when you want to abstract away complex logic to keep your components clean and easy to read. By abstracting away complex logic into a custom hook, you can make your code more modular, easier to test, and easier to maintain.</p>
        </div>
      </div>
    </div>
 </div>
  );
};

export default Blog;
