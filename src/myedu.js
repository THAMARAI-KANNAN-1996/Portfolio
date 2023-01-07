import React from "react";
export default function Myedu()
{
    return(
        <>
        <div className="container-fluid edu mt-5">
            <h1 className="text-center">Education</h1>
        <div class="card-deck">
            <div class="card">
                <img class="card-img-top" src="https://psmag.com/.image/t_share/MTUwMjg0NDIxMTE3NzgyMDEy/college-2.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">B.E.Mechanical Engineering</h5>
                <p class="card-text">KIT-Kalaignar Karunanidhi Institute of Technology</p>
                <p class="card-text">CGPA-8</p>
                
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://media.istockphoto.com/id/182472346/photo/modern-high-school-entrance.jpg?s=612x612&w=0&k=20&c=P0dKl3uhbaWuHzuL5yI9pKb2Kgug9OBX8HYUfAVSjR0=" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Higher Secondary School </h5>
                <p class="card-text">St.Joseph's Matriculation Higher Secondary School</p>
                <p class="card-text">Percentage-87</p>
                
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="https://www.titikshapublicschool.com/schools_media/titiksha_uploads/gallery/media/DSC_0027%20-8x12-min.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Secondary School</h5>
                <p class="card-text">St.Joseph's Matriculation Higher Secondary School</p>
                <p class="card-text">Percentage-93</p>
                
                </div>
            </div>
            </div>
        </div>
        </>
    );
}