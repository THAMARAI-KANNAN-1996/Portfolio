import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './myport.css';
import img1 from  './images/port1.png';
import img2 from './images/port2.png';
import img3 from './images/port3.png';
import img4 from './images/port5.png';
import img5 from './images/port6.png';
import img6 from './images/port7.png';
import img7 from './images/port8.jpg';
import img9 from './images/linkedin.png';
export default function Myport()
{
    return(
        <>
        <div className="home">
        <div>
            <div className="mybg text-right p-5">
                <h1>THAMARAI KANNAN</h1>
                <h3>Full Stack Developer</h3>
            </div>   
        </div>
        <hr/>
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-6 bg-dark text-light p-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1>Name</h1>
                        </div>
                        <div className="col-lg-9">
                            <h1>: THAMARAI KANNAN</h1>
                        </div>
                        <div className="col-lg-3">
                            <h1>Profile</h1>
                        </div>
                        <div className="col-lg-9">
                            <h1>: Full Stack Developer</h1>
                        </div>
                        <div className="col-lg-3">
                            <h1>Phone</h1>
                        </div>
                        <div className="col-lg-9">
                            <h1>: 7708563203</h1>
                        </div>
                        <div className="col-lg-12">
                            <button className="btn btn-primary"><a className="text-white" href="https://www.canva.com/design/DAFTCYy4KH0/zWxVauqq382A0f62tJtYqA/view?utm_content=DAFTCYy4KH0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">View Resume</a></button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="shadow p-5">
                        <h1>About</h1>
                        <h3>Engineer with proven ability to adapt in both self starting and collaborating environment, while staying focused in achieving high quality results.
                            Eager to work in a challenging position at a prestigious organization.</h3>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="container text-center">
            <div><h1>Skills</h1></div>
            <div className="col-lg-12 row justify-content-center">
                
                <div className="col-lg-3 m-1">
                    <img src={img1} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img2} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img3} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img4} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img5} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img6} height="200" width="200"/>
                </div>
                <div className="col-lg-3 m-1">
                    <img src={img7} height="200" width="200"/>
                </div>

            </div>

        </div>
        <hr/>
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 shadow">
            <div><h1>Education</h1></div>
            <div className="row">   
                <div className="col-lg-4">
                    <h1>2014-2018</h1>
                </div>
                <div className="col-lg-8">
                    <h1>B.E.Mechanical Engineering</h1>
                    <h3>KIT-Kalaignar Karunanidhi Institute of Technology</h3>
                    <h4>CGPA-8</h4>
                </div>
                <div className="col-lg-4">
                    <h1>2012-2014</h1>
                </div>
                <div className="col-lg-8">
                    <h1>Higher Secondary School</h1>
                    <h3>St.Joseph's MHSS</h3>
                    <h4>87 %</h4>
                </div>
               
            </div>
        </div>

        <div className="col-lg-6 bg-dark text-white shadow">
            <div><h1>Experience</h1></div>
            <div className="row">
                <div className="col-lg-4">
                    <h1>2019-2022</h1> 
                </div>
                <div className="col-lg-8">
                    <h1>Entrepreneur</h1>
                    <h3>GM CAR CARE</h3>
                    <h4>Spearheaded Whole process and operation in the company.</h4>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4">
                    <h1>2018-2019</h1> 
                </div>
                <div className="col-lg-8">
                    <h1>Graduate Engineer Trainee</h1>
                    <h3>Ampere Electric Vehicles</h3>
                    <h4>Worked in Manufacturing and Inventory Sector</h4>
                </div>

            </div>

        </div>
        </div>
        </div>
        <hr/>
        <div className="container text-center">
            <div>
                <h1>Certifications</h1>
            </div>
            <div>
            <div class="card m-5">
                <div class="card-body">
                    <h1 class="card-title">Full Stack Web Development</h1>
                    <h2 class="card-subtitle mb-2 text-muted">KGiSL MicroCollege</h2>
                </div>
                </div>
            </div>
            <div>
            <div class="card m-5">
                <div class="card-body">
                    <h1 class="card-title">Programming with Scratch</h1>
                    <h2 class="card-subtitle mb-2 text-muted">COURSERA</h2>
                </div>
                </div>
            </div>
            <div>
            <div class="card m-5">
                <div class="card-body">
                    <h1 class="card-title">Programming with JavaScript</h1>
                    <h2 class="card-subtitle mb-2 text-muted">COURSERA</h2>
                </div>
                </div>
            </div>
            <div>
            <div class="card m-5">
                <div class="card-body">
                    <h1 class="card-title">Programming with HTML,CSS,JavaScript</h1>
                    <h2 class="card-subtitle mb-2 text-muted">COURSERA</h2>
                </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="container-fluid bg-dark text-white">
                <div className="row">
                    <div className="col-lg-3">
                         <h1>Languages Known</h1>
                         <h3>Tamil</h3>
                         <h3>English</h3>
                    </div>
                    <div className="col-lg-3">
                         <h1>Soft Skills</h1>
                         <h3>Leadership</h3>
                         <h3>Time Management</h3>
                         <h3>Team Work</h3>
                    </div>
                    <div className="col-lg-3">
                         <h1>Interest</h1>
                         <h3>Travel</h3>
                         <h3>Sports</h3>
                         <h3>Fitness</h3>
                    </div>
                    <div className="col-lg-3">
                        <h1>Website</h1>
                        <a href="https://www.linkedin.com/in/thamarai-kannan-t-r-675247257"><img src={img9} height="50" width="50" className="m-3"/></a>
                        <a href="https://github.com/THAMARAI-KANNAN- 1996"><img src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-512.png" height="60" width="60" className="m-3"/></a>

                    </div>
                </div>
        </div>
        
            <div className="mybg text-center p-2">
                <h4>email: thamaraikannan196@gmail.com</h4>
            </div>

            </div>
        </>
    );
}