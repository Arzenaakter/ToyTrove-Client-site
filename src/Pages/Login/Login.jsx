import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import login from "../../assets/login.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  useTitle('ToyTrove || Login')

    const {LogIn,GoogleSignIn,UpdateProfileData} = useContext(AuthContext)


    const [error, setError] = useState([])


    const navigate = useNavigate()
    const location = useLocation();
   
    const from = location.state?.from?.pathname || "/"

    const handleLogin = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(' ')

        // console.log(email,password);
        // authentication
        LogIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
           
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Log In successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from,{replace:true});
              form.reset()
        })
        .catch(err =>{
            console.log(err);
            setError(err.message)
        })


    }

    const handleGoogleSignin = ()=>{
     
        GoogleSignIn()
        .then(result =>{
            const googleUser = result.user
            // console.log(googleUser);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Google signIn successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from,{replace:true});
              UpdateProfileData(googleUser.displayName,googleUser.photoURL)


        })
        .catch(err =>{

            setError(err.message)
            console.log(err);
        })

    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row  gap-36">
        <div className=" w-[40%]">
          <img src={login} alt="" className="" />
        </div>

        <div className="card flex-shrink-0 w-[60%] max-w-sm shadow-2xl bg-base-100 ">
          <form className="card-body" onSubmit={handleLogin}>
            {/* email */}
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>

            {/* password */}
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <p className=" text-red-500">{error}</p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-error">Login</button>
              <br />
              <button className="btn btn-outline" onClick={handleGoogleSignin}>
                <FaGoogle className="text-red-500 mr-2 text-2xl" /> Google
                Sign-in
              </button>
              <br />
              <small className="text-center">
                New to ToyTrove ?{" "}
                <Link to="/signup" className="link font-bold text-indigo-500">
                  Sign Up
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
