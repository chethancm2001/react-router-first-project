import React from 'react';
import {BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom'



function Nav(){
  return( 
    
   <ul>
     
       <Link to='/'>
       <li>Home</li>
       </Link>
       <Link to='/about'>
        <li>about</li>
        </Link >
         <Link to='/app'>
        <li>app</li>
        </Link>
      
    </ul>
      
  )
}
export default Nav;