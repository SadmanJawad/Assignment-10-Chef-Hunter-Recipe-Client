import React, { useContext, useState } from "react";
import companyLogo from '../../../assets/companyLogo.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Container } from "postcss";
import { getAuth, updateProfile } from "firebase/auth";


const Register = () => {
    const [error, setError] = useState('');
  const [success, setSuccess] = useState('')
    const {createUser} = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  console.log('reg page location', location)
  const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        setSuccess('')
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;
      
        //!  validate password
        if(!/(?=.*[A-Z])/.test(password)){
          setError('Please add at least one uppercase')
          return;
        }

        console.log(name, email, password)
        
        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            setError('');
            setSuccess('User has been created successfully');
            Navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message)
            setError(error.message)
            // event.target.reset();
        })

        // updateProfile(auth, createUser, {
        //     displayName : name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        // })
        // .then(()=> {
        //     console.log(photoURL)
        // })
        // .catch(error => {
        //     console.log(error)
        // } )
    }

 
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        {/* <Link
          to='/'
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
            <p className='text-4xl font-bold'>Welc<span className='text-purple-700'>o</span>me t<span className='text-purple-700'>o</span></p>
          <img
            className="w-32 mr-2"
            src={companyLogo}
            alt="logo"
          />
        </Link> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text- font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  type="url"
                  name="photo-url"
                  id="photo-url"
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <p className="text-red-700">{error}</p>
              <p className='text-green-600 font-bold'>{success}</p>
              <button
                type="submit"
                className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
           <div className="mb-0">
           <p className="text-md font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to='/login'
                  className="font-medium underline text-purple-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
           </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
