import { Link  } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import signup from "../../assets/signup.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../Hook/useTitle";


const SignUp = () => {
  useTitle('ToyTrove || Sign Up')
    const {CreateUser,GoogleSignIn,UpdateProfileData}= useContext(AuthContext);

  const [error, setError] = useState([])
 

    const handleSigUp=(event)=>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError(' ')

        // console.log(name,email,photo,password,confirm);

        // password validation
        if(password.length<= 6){
            setError('Password must be 6 character')
            return;
        }
        if(password != confirm){
            setError("Password Does Not Matched");
            return;
        }


        // login authentication
        CreateUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            form.reset()

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Sign up successfully',
                showConfirmButton: false,
                timer: 1500
              })

              
              UpdateProfileUser(result.user,name,photo)
       
      

        })
        .catch(err =>{
            console.log(err);
            setError(err.message)
        })
  

        // user Profile
        const UpdateProfileUser =()=>{
            UpdateProfileData(name,photo)
            .then(()=>{
              console.log('user name updated');
            })
            .catch(error =>{
              console.log(error);
      
            })
         
        };
         
        }




    
    const handleGoogleSignin = ()=>{
   
        GoogleSignIn()
        .then(result =>{
            const googleUser = result.user
            console.log(googleUser);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Google signIn successfully',
                showConfirmButton: false,
                timer: 1500
              })
            
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
        <div className="text-center lg:text-left w-[40%]">
          <img src={signup} alt="" className="" />
        </div>

        <div className="card flex-shrink-0 w-[60%] max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSigUp}>
            {/* name */}
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder=" Name"
                className="input input-bordered"
                required
              />
            </div>
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
            {/* photo */}
            <div className="form-control">
              <input
                type="text"
                name="photo"
                placeholder="Photo URl"
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
            </div>
            {/* confirm */}
            <div className="form-control">
              <input
                type="password"
                name="confirm"
                placeholder=" Confirm Password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <p className=" text-red-500">{error}</p>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-error">Sign Up</button>
              <br />
              <button className="btn btn-outline" onClick={handleGoogleSignin}>
                <FaGoogle className="text-red-500 mr-2 text-2xl" /> Google
                Sign-Up
              </button>
              <br />
              <small className="text-center">
                Allready have an account ?{" "}
                <Link to="/login" className="link font-bold text-indigo-500">
                  LogIn
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );};


export default SignUp;
