import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, {useState} from 'react';
import {  FaSign, FaSignOutAlt } from "react-icons/fa";
import '../style/header.css'
import SignIn from '../compoenent/SignIn';
import SignUp from '../compoenent/signUp';

const Header = () => {
    const [isSignIn, setisSignIn] = useState(false);
    const [isSignUp, setisSignUp] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const toggleSignInVisibility = () => {
        setisSignIn(!isSignIn);
        setisSignUp(false);
    };

    const toggleSignUpVisibility = () => {
        setisSignUp(!isSignUp);
        setisSignIn(false);
      };


    return (
        <>
        <Navbar bg="primary" data-bs-theme="dark" fixed="top">
            <Container>
                
                <Navbar.Brand
                    href="/"><strong>TODO APP</strong>
                </Navbar.Brand>
               { isLogin != false && <div>xin chào, </div>}
                <Nav >
                    <Nav.Link onClick={toggleSignInVisibility} to="/signIn">
                        <FaSign /> Sign In
                    </Nav.Link>
                    <Nav.Link onClick={toggleSignUpVisibility} to="/signUp">
                        <FaSignOutAlt /> Sign Up
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        {isSignIn && <SignIn />}
        {isSignUp && <SignUp />}
        </>
    );
}

export default Header;