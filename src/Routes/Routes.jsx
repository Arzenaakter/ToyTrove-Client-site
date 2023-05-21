import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/MyToys";
import SignUp from "../Pages/SignUp/SignUp";
import SingleToy from "../Pages/SingleToy/SingleToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/allToys',
          element:<AllToys></AllToys>
          
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
          
         
        },
        {
          path:'/addToy',
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
        },{
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/singleToy/:id',
          element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader:({params}) => fetch(`https://toy-trove-server-three.vercel.app/allToys/${params.id}`)
        },
        {
          path:'/updateToyInfo/:id',
          element:<UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`https://toy-trove-server-three.vercel.app/allToys/${params.id}`)
        }
        
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ]);
  export default router