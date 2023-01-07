import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Myport from './myport';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './responsive/main';
import Home from './responsive/home';
import About from './responsive/about';
import Works from './responsive/works';
import Farm from './responsive/farm';
import Animals from './responsive/animals';
import Products from './responsive/products';
import Test from './responsive/testimonial';

import Frontend from './responsive/hooks/frontend';
import Feedback from '../src/responsive/hooks/feedback';

import Menu from './menu';

import Login from './files/login';
import Notify from './files/notify';

import Technology from './files/technology';


import Feedbackpage from '../src/responsive/hooks/feedbackpage';
import Increment from './responsive/hooks/increment';
import Fruitscounter from './responsive/hooks/fruitscounter';
import Datee from './responsive/hooks/date';
import Fackstore from './responsive/hooks/fakestore';
import Productdetails from './responsive/hooks/productdetails';
import Table from './responsive/hooks/table';
import Sassdemo from './responsive/hooks/sassdemo';
import Responsive from './responsive/responsive';
import Myhome from './myhome';
import Certificate from './certificate';
import Interest from './myinterest';
import Myabout from './myabout';
import Myedu from './myedu';
import Contact from './mycon';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/menu' element={[<Login/>]}/>
     
      <Route path='/login' element={<Login/>}/>
      <Route path='/notify' element={<Notify/>}/>
    
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/portfolio' element={[<Menu/>,<Main/>,<Responsive/>]}/>
      <Route path='/feedback' element={[<Menu/>,<Feedback/>]}/>
      <Route path='/feedback1' element={[<Menu/>,<Feedbackpage/>]}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/home' element={[<Main/>,<Home/>,<Menu/>]}/>
      <Route path='/about' element={[<Main/>,<About/>,<Menu/>]}/>
      <Route  path='/works' element={[<Main/>,<Works/>,<Menu/>]}/>
      <Route path='/farm' element={[<Main/>,<Farm/>,<Menu/>]}/>
      <Route path='/animals' element={[<Main/>,<Animals/>,<Menu/>]}/>
      <Route path='/products' element={[<Main/>,<Products/>,<Menu/>]}/>
      <Route path='/testimonial' element={[<Main/>,<Test/>,<Menu/>]}/>

      <Route path='/increment' element={[<Menu/>,<Increment/>]}/>
      
      <Route path='/fruitscounter' element={[<Menu/>,<Fruitscounter/>]}/>
      <Route path='/frontend' element={[<Menu/>,<Frontend/>]}/>
      <Route path='/date' element={[<Menu/>,<Datee/>]}/>
      <Route path='/fakestore' element={[<Menu/>,<Fackstore/>]}/>
      <Route path='/details/:id' element={<Productdetails/>}/>
      <Route path='/table' element={[<Menu/>,<Table/>]}/>
      <Route path='/sassdemo' element={[<Menu/>,<Sassdemo/>]}/>
      <Route path='/' element={[<Myhome/>,<Myabout/>,<Myedu/>,<Certificate/>,<Interest/>]}/>
      <Route path='/myport' element={<Myport/>}/>
      <Route path='/mycer' element={<Certificate/>}/>
       <Route path='/myinter' element={<Interest/>}/>
       <Route path='/myabout' element={<Myabout/>}/>
       <Route path='/myedu' element={<Myedu/>}/>
       <Route path='/mycon' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
