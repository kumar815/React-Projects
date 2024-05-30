import React from "react";
import {link} from 'react-router-dom';
import { NavLink } from "react-router-dom";

let Navbar = () =>{
    return(
        <React.Fragment>
            <nav className="nav navbar-dark text-center bg-success navbar-expand-sm">
               <div className="container">
                   <link to="/" className="navbar-brand">
                   <i className="fa fa-shopping-cart"/>Big-Basket</link>
                   <div className="collapse navbar-collapse">
                       <ul children="navbar-Nav">
                           <li className="nav-item">
                           <link to ="/" className="nav-link">Home</link>
                           </li>
                       </ul>
                       <ul children="navbar-Nav">
                           <li className="nav-item">
                               <link to ="/" className="nav-link">Product</link>
                           </li>
                       </ul>
                       <ul children="navbar-Nav">
                           <li className="nav-item">
                               <link to ="/" className="nav-link">Admin</link>
                           </li>
                       </ul>
                   </div>
               </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;