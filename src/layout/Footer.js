import { Container } from "react-bootstrap"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/footer.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark" fixed="bottom">
            <Container className="footer" >
            <Nav >Khoa CNTT</Nav>
            <Nav >Trường Đại Học Mở Tp HCM</Nav>
            </Container>
        </Navbar>

    )
}

export default Footer