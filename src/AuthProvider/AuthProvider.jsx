import { createContext } from "react";
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";



export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const[loading,setLoading] = useState(true)
    const[user,setUser] = useState([])


    // CreateUser or Sign Up

    const CreateUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };


    // login
    const LogIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    // logout
    const LogOut =()=>{
        return signOut(auth)
    }


    // google 
    const GoogleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    };



    //  update user profile

  
    // observe

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,CurrentUser=>{

            setUser(CurrentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }

    },[])


    const UpdateProfileData =(name,photo)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const authInfo ={
        user,
        loading,
        CreateUser,
        LogIn,
        LogOut,
        GoogleSignIn,
        UpdateProfileData

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;