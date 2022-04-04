import React from 'react';

const Navbar = () => {
    return (
      <div class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="nav flex-column">
          <div class="nav-item">
          <a class="nav-link" href="/profiles">Профили пользователей</a>
          </div>
          <div class="nav-item">
          <a class="nav-link" href="/service">Service</a> 
          </div>
         
        </div>
      </div>
    );
  }

export default Navbar;