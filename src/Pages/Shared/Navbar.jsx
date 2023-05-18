import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/car.png'
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

    const {user,LogOut} =useContext(AuthContext)


    const handleLogout =()=>{
        LogOut()
        .then()
        .catch(err=>{
            console.log(err);
        })
    }



  const navItems = (
    <>
      <li>
        <NavLink to="/"  className={({ isActive }) => isActive ? "bg-white link text-indigo-500 font-bold text-lg " : " hover:link bg-white "
            }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/allToys" className={({ isActive }) => isActive ? "bg-white link text-indigo-500 font-bold text-lg " : " hover:link bg-white "
            }>All Toys</NavLink>
      </li>
      <li>
        <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-white link text-indigo-500 font-bold text-lg " : " hover:link bg-white "
            }>Blog</NavLink>
      </li>
      {
        user?<>
        <li>
        <NavLink to="/myToys" className={({ isActive }) => isActive ? "bg-white link text-indigo-500 font-bold text-lg " : " hover:link bg-white "
            }>My Toys</NavLink>
      </li>
      <li>
            <NavLink to="/addToy" className={({ isActive }) => isActive ? "bg-white link text-indigo-500 font-bold text-lg " : " hover:link bg-white "
            }>Add Toy</NavLink>
      </li>
        </>: " "
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-xl py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>

        <img src={logo} alt="logo" className="w-16 " />
        <Link className="italic font-bold text-4xl" to='/'>ToyTrove</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">

        {
            user? <> <img src={user.photoURL} alt="user-profile" title={user.displayName} className="w-12 rounded-full border"/> <button className="btn btn-outline ml-4" onClick={handleLogout}>LogOut</button></>:  <Link to='/login' className=" btn btn-circle ">Login</Link>
        }
       
       
      </div>
    </div>
  );
};

export default Navbar;
