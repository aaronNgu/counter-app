import React from 'react';

//Stateless functional components

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
         Number of Items <span className = "badge badge-pill badge-secondary">
         { totalCounters }</span>
         </a>
    </nav>
  );
}

export default NavBar;
