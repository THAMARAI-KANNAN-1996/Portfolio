import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Myabout()
{
    return(
        <>
        <div className="about mt-5">
            <h1 className="text-center">Technical Skills</h1>
        <div className="container-fluid bg-dark p-5 mt-3">
            <div className="row">
                <div className="col-lg-4 text-light">
                    <h1>Front End Development</h1>
                    <p>Front-end web development, also known as client-side development is the practice of producing HTML, 
                        CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.</p>
                </div>
                <div className="col-lg-8 justify-content-center">
                    <div className="row">
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">HTML</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={80} 
                            text='80%'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">&nbsp;CSS</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={85} 
                            text='85%'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">Bootstrap</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={90} 
                            text='90%'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">JavaScript</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={70} 
                            text='70%'/>
                        </div>
                    </div>
                    </div>
                    

                </div>
                

            </div>

        </div>

        <div className="container-fluid bg-dark p-5 mt-3">
            <div className="row">
            <div className="col-lg-4 text-light">
                    <h1>Back End Development</h1>
                    <p>Back-end development means working on server-side software, which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.</p>
                </div>
                <div className="col-lg-8 justify-content-center">
                    <div className="row">
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">React JS</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={75} 
                            text='75%'/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h1 className="col-lg-12 text-info">Node JS</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={80} 
                            text='80%'/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="col-lg-12 text-info">Java</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={60} 
                            text='60%'/>
                        </div>
                    </div>
                    
                    
                    </div>
                    

                </div>
                </div>
            </div>

            <div className="container-fluid bg-dark p-5 mt-3">
            <div className="row">
            <div className="col-lg-4 text-light">
                    <h1>Database</h1>
                    <p>A database is information that is set up for easy access, management and updating. Computer databases typically store aggregations of data records or files that contain information, such as sales transactions, customer data, financials and product information.
                        
                    </p>
                </div>
                <div className="col-lg-8 justify-content-center">
                        <h1 className="col-lg-12 text-info">MySQL</h1>
                        <div style={{ width: 150, height:200 }} className="col-lg-12">
                            <CircularProgressbar value={95} 
                            text='95%'/>
                        </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}