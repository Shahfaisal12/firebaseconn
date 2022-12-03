import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import Base from '../Layout/Base'
import PageNotFound from '../../pages/PageNotFound'
import Form from '../elements/Form'
import Home from '../../pages/Home'
// eslint-disable-next-line
import { app, db } from "../../Firebase";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Dashboard from '../../pages/Dashboard'
import {setDoc, doc } from "firebase/firestore"; /* collection, addDoc, */
import ForgotPassword from '../elements/ForgotPassword'


const RoutesPage = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateEmail = async () => {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                navigate("/login");
            })
            .catch((err) => {
                if (err.code === "auth/user-not-found") {
                    toast.error("please check the email");
                }
            });
    }

    const navigate = useNavigate();

    useEffect(() => {
        let authToken = sessionStorage.getItem("auth");
        if (authToken) {
            navigate("/dashboard");
        }
    }, [navigate]);

    const handleAction = (id) => {
        const authentication = getAuth();
        if (id === 2) {
            createUserWithEmailAndPassword(authentication, email, password)
                .then((res) => {
                    navigate("/dashboard");
                    sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
                    // addDoc(collection(db, "users"), { /* , res.user.uid */
                    // uid: res.user.uid,
                    //     email: email,
                    //     password: password
                    // });
                    setDoc(doc(db, "users2", res.user.uid), { /* , res.user.uid */
                        uid: res.user.uid,
                        email: email,
                        password: password
                    });
                    console.log(res.user.uid)
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
                <Route index path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route
                    path="/forget"
                    element={
                        <ForgotPassword
                            setEmail={setEmail}
                            setPassword={setPassword}
                            updateEmail={() => updateEmail()}
                            title="Forgot" />
                    }
                />
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