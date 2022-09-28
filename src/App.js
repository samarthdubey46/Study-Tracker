import React, {useEffect, useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import {Routes, Route, useNavigate} from "react-router-dom";
import Study from "./pages/study";
import Homework from "./pages/homework";
import Backlog from "./pages/backlog";
import Material from "./pages/material";
import Results from "./pages/results";
import Layout from "./pages/layout";
import StudySubject from "./pages/studySubject";

function App() {
    const [loggedIn, setLoggedIn] = useState(true)
    let navigate = useNavigate();

    useEffect(() => {
        if (loggedIn) {
            // navigate('/')
        }
    }, [])
    if (loggedIn) {
        return (
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/study' element={<Study/>}/>
                    <Route path='study/:subject' element={<StudySubject/>}/>
                    <Route path='/homework' element={<Homework/>}/>
                    <Route path='/backlog' element={<Backlog/>}/>
                    <Route path='/material' element={<Material/>}>
                        <Route path=':type' element={<Material/>}/>
                    </Route>
                    <Route path='/results' element={<Results/>}/>

                </Routes>
            </Layout>
        )
    }
    return (
        <Routes>
            <Route path='/' element={() => <Login setLoggedIn={setLoggedIn}/>}/>
            <Route path='/login' element={() => <Login setLoggedIn={setLoggedIn}/>}/>
            <Route path='/register' element={() => <Register/>}/>
        </Routes>
    );
}

export default App;
