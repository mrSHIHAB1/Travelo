import  { useContext, useState } from "react";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { Link } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";


const Login = () => {
  
  const notify = () => toast.success("Login successful");
  const otify = () => toast.error("Login Failed");
  const { signIn } = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    
    signIn(email, password)
      .then(result => {
        notify();
      })
      .catch(error => {
        otify();
      });
  };

  const gitlog = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        notify();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const glog = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        notify();
      })
      .catch(error => {
        otify();
      });
  };

  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Login with Email and password or we can login with Gmail and GitHub</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered pr-12 w-full"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {passwordVisible ? (
                      <FaRegEyeSlash onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                    ) : (
                      <FaRegEye onClick={togglePasswordVisibility} className="text-gray-400 cursor-pointer" />
                    )}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-600">Login</button>
                <p className="text-center">OR</p>
                <button onClick={glog} className="btn bg-green-500">Google</button>
                <button onClick={gitlog} className="btn bg-blue-600">GitHub</button>
                <p className="text-center">Dont have an account?<Link to='/signup'><span className="text-yellow-600"> Sign Up</span></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
