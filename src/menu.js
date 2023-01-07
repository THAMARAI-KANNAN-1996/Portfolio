import React from "react";
import {Link} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function Menu()
{
    return(
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="text-success">React Task</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav1">
    <ul class="navbar-nav">
  
      
      <li class="nav-item active">
      <Link to='/login' className="ml-5">Login</Link>
      </li>
      <li class="nav-item active">
      <Link to='/notify' className="ml-5">Notification</Link>
      </li>
      
      <li class="nav-item active">
      <Link to='/technology' className="ml-5">Technology card</Link>
      </li>
      <li class="nav-item active">
      <Link to='/portfolio' className="ml-5">Responsive</Link>
      </li>
      <li class="nav-item active">
      <Link to='/feedback' className="ml-5">Feedback</Link>
      </li>
      
      <li class="nav-item active">
      <Link to='/fruitscounter' className="ml-5">Fruitscounter</Link>
      </li>
      <li class="nav-item active">
      <Link to='/frontend' className="ml-5">Frontend</Link>
      </li>
      
      <li class="nav-item active">
      <Link to='/fakestore' className="ml-5">Fakestore</Link>
      </li>
      
      <li class="nav-item active">
      <Link to='/sassdemo' className="ml-5">Sassdemo</Link>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}
export default Menu;
