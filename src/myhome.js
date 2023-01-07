import React from "react";
import './myhome.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import propic from "./images/myimage.jpg";
import { Link } from "react-scroll";
import {Link as Linkroll} from 'react-router-dom';



export default function Myhome()
{
    return(
        <>
        <div className="container-fluid mb-5 home">
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 fixed-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item active">
                <Link spy={true} smooth={true} duration={1000} to='home'  className="m-3 mysiz">Home</Link>
                </li>
                <li class="nav-item active">
                <Linkroll to='/myport'  className="m-3 mysiz">Profile</Linkroll>
                </li>
                <li class="nav-item active">
                <Link spy={true} smooth={true} duration={1000} to='about'  className="m-3 mysiz">Skills</Link>
                </li>
                <li class="nav-item active">
                <Link spy={true} smooth={true} duration={1000} to='edu'  className="m-3 mysiz">Education</Link>
                </li>
                <li class="nav-item active">
                <Link  spy={true} smooth={true} duration={1000} to='cer'  className="m-3 mysiz">Certificate</Link>
                </li>
                <li class="nav-item active">
                <Link spy={true} smooth={true} duration={1000} to='interest'  className="m-3 mysiz">Interest & Soft Skills</Link>
                </li>
                <li class="nav-item active">
                <Linkroll to='/menu'  className="m-3 mysiz">Projects</Linkroll>
                </li>
                
              </ul>
            </div>
          </nav>
          </div>
        <div className="container-fluid">
            <div className="myhomebg">
            <div className="row myhomemar">
                <div className="col-lg-12 text-center">
                    <img src={propic} height="300" width="300" className="rounded-circle"/>
                </div>
                <div className="col-lg-12 text-white text-center">
                  <h1>THAMARAI KANNAN</h1>
                  <h3>Completed Full Stack Web Developement</h3>
                </div>
            </div>
            </div>

        </div>
        </>
    );

}