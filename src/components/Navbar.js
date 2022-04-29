import React from "react";
import './styles.css';
import "../boostrap/css/bootstrap.min.css";
import navImg from "../images/logo.svg";
import {Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

export default function Nav(){
    
    return(
        <><Helmet>
            <link href="https://fonts.googleapis.com/css?family=Slabo+27px|Roboto|Source+Sans+Pro" rel="stylesheet" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="./bootstrap/js/bootstrap.min.js"></script>
            </Helmet><div class="navigation">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                            <div class="logo">
                                <img src={navImg} alt='navImg' />
                            </div>
                        </div>

                        <div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
                            <div class="primary-nav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/portfolio">Portfolio</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    )
}