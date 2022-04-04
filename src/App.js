//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './components/Data/Profiles/Profiles';
import Service from './components/Data/Service/Service';



const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div class="container-fluid">
          <div class="row">
            <Navbar />
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
             <Route path="/profiles" render={   () => <Profiles /> }/>
             <Route path="/service" render={  () => <Service /> }/>
            </main>
          </div>
        </div>
      </div> 
      </BrowserRouter>
  );
}

{/*<header class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow ">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Компания</a>
      <div class="nav-item text-nowrap text-white">
       Заголовок
      </div>
      <div class="navbar-nav navbar-expand-xl">
        <div class="nav-item">
          <a class="nav-link" href="#">Выйти</a>
          </div>
          <div class="nav-item">
          <a class="nav-link" href="#">Войти</a>
      </div>
       
      </div>
    </header> 
    
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <span data-feather="home"></span>
                  Панель
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="file"></span>
                  Заказы
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span data-feather="shopping-cart"></span>
                  Продукция
                </a>
              </li>              
            </ul>                
          </div>
        </nav>
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Панель</h1>
            <div class="btn-toolbar mb-2 mb-md-0 ">
                <button type="button" class="btn btn-secondary btn-sm">Поделиться</button>
                <button type="button" class="btn btn-secondary btn-sm">Экспорт</button>
            </div>
          </div>
                  
          <h2>Заголовок раздела</h2>
          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Заголовок</th>
                  <th scope="col">Заголовок</th>
                  <th scope="col">Заголовок</th>
                  <th scope="col">Заголовок</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>text</td>
                  <td>random</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>placeholder</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>placeholder</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>irrelevant</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>random</td>
                  <td>data</td>
                  <td>placeholder</td>
                  <td>text</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>visual</td>
                  <td>layout</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>dashboard</td>
                  <td>tabular</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>illustrative</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>text</td>
                  <td>placeholder</td>
                  <td>layout</td>
                  <td>dashboard</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>text</td>
                  <td>visual</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>dashboard</td>
                  <td>illustrative</td>
                  <td>rich</td>
                  <td>data</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>random</td>
                  <td>tabular</td>
                  <td>information</td>
                  <td>text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>*/}

export default App;
