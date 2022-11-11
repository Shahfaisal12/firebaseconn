import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import Base from '../Layout/Base'
import PageNotFound from '../../pages/PageNotFound'
import Form from '../elements/Form'
import Home from '../../pages/Home'
import {app, db } from "../../Firebase";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Dashboard from '../../pages/Dashboard'
import { collection, addDoc } from "firebase/firestore";


const RoutesPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem("auth");
        if (authToken) {
            navigate("/dashboard");
        }
    }, []);

    const handleAction = (id) => {
        const authentication = getAuth();
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
                    addDoc(collection(db, "use"), {
                        email:email,
                        password:password
                      });
                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }
                });
        }
        if (id === 1) {
            signInWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
                })
                .catch((e) => {
                    if (e.code === "auth/wrong-password") {
                        toast.error("please check the password");
                    }
                    if (e.code === "auth/user-not-found") {
                        toast.error("please check the email");
                    }
                });
        }
    };


    return (
        <>
            <ToastContainer />
            {/* <BrowserRouter> */}
            {/* <Base> */}
            <Routes >
                <Route index path='/' element={<Home /> } />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route
                    path="/login"
                    element={
                        <Form
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleAction={() => handleAction(1)}
                            title="Login" />
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Form
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleAction={() => handleAction(2)}
                            title="Register"
                        />
                    }
                />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
            {/* </Base> */}
            {/* </BrowserRouter> */}
        </>
    )
}

export default RoutesPage