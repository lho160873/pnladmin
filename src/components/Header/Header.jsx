import React from 'react';


const Header = () => {
  return (
    <header>          
      <div class="navbar navbar-dark sticky-top bg-primary p-0 shadow">
        <div class="nav-item navbar-brand text-nowrap text-white col-md-3 col-lg-2 me-0 px-3">
          Lapaa-Администрирование
        </div>               
        <div class="navbar-nav flex-row">
        <div class="nav-item">
            <a class="nav-link" href="#">Войти</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#">Профиль</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="#">Регистрация</a>
          </div>
        </div>        
      </div> 

    </header>
  );
}

export default Header;