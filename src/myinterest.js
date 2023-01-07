import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function Interest()
{
    return(
        <>
        <div className="interest mt-5">
        <div className="container mb-5">
            <h1 className="text-center">Interests</h1>
            <hr/>
            <div class="card-group">
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://www.fitforfun.de/files/images/201309/0/abendjogging-rechte-klaren,44244_3x2_n.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Fitness</h5>
                </div>
            </div>
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://media.cnn.com/api/v1/images/stellar/prod/201216101701-table-tennis-stock.jpg?q=w_3000,h_2000,x_0,y_0,c_fill" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Sports</h5>
                </div>
            </div>
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://c.ndtvimg.com/2022-04/4g4f4v9o_bike_625x300_08_April_22.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Travel</h5>
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <h1 className="text-center">Soft Skills</h1>
            <hr/>
            <div class="card-group">
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/december/effective-leadership.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Team work</h5>
                </div>
            </div>
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://www.corporatevision-news.com/wp-content/uploads/2021/03/Leader.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Leadership</h5>
                </div>
            </div>
            <div class="card m-3 shadow">
                <img class="card-img-top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_16_Time_Management_Skills_to_Help_you_Become_a_Success.jpg" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Time Management</h5>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}