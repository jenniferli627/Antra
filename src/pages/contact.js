import React from "react";
import './style.css';
import "../boostrap/css/bootstrap.min.css";
import {Helmet} from "react-helmet";

import Nav from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () =>{

    return (
        <><Helmet>
            <link href="https://fonts.googleapis.com/css?family=Slabo+27px|Roboto|Source+Sans+Pro" rel="stylesheet" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="./bootstrap/js/bootstrap.min.js"></script>
        </Helmet><Nav />
        
        <Footer /></>
    )
}

export default Contact;