import React from 'react';

function getService() {
  const myList = document.querySelector('tbody');
  fetch('http://89.108.65.107:8006/api/v1/service/')
  .then(response => response.json())
  .then(data => {
    for (const d of data) {
      let tr = document.createElement('tr');
      
      let td_name = document.createElement('td');        
      td_name.innerHTML = '<strong>' + d.name + '</strong>';
      tr.appendChild(td_name);
      
     
    
      myList.appendChild(tr);
    }
  }
  );
}

const Service = () => {
return (
  <div>
 <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Service</h1>
            <div class="btn-toolbar mb-2 mb-md-0 ">
                <button type="button" class="btn btn-secondary btn-sm" onClick={getService}>Обновить</button>
                <button type="button" class="btn btn-secondary btn-sm">Добавить</button>
                <button type="button" class="btn btn-secondary btn-sm">Удалить</button>
            </div>
          </div>   
    <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Название</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
  </div>
);
}

export default Service;