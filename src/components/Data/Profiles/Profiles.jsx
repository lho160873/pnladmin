import React from 'react';

function getBusinessProfiles() {
    const myList = document.querySelector('tbody');
    fetch('http://89.108.65.107:8002/api/v1/admins/business/')
    .then(response => response.json())
    .then(data => {
      for (const d of data) {
        let tr = document.createElement('tr');
        
        let td_last_name = document.createElement('td');        
        td_last_name.innerHTML = '<strong>' + d.last_name + '</strong>';
        tr.appendChild(td_last_name);
        
        let td_first_name = document.createElement('td');        
        td_first_name.innerHTML = d.first_name;
        tr.appendChild(td_first_name);
        
        let td_middle_name = document.createElement('td');        
        td_middle_name.innerHTML = d.middle_name;
        tr.appendChild(td_middle_name);
      
        myList.appendChild(tr);
      }
    }
    );
}

const Profiles = () => {
  return (
    <div>      
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Профили пользователей / User business Profiles</h1>
            <div class="btn-toolbar mb-2 mb-md-0 ">
                <button type="button" class="btn btn-secondary btn-sm" onClick={getBusinessProfiles}>Обновить</button>
                <button type="button" class="btn btn-secondary btn-sm">Добавить</button>
                <button type="button" class="btn btn-secondary btn-sm">Удалить</button>
            </div>
          </div>           
      <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Фамилия</th>
                  <th scope="col">Имя</th>
                  <th scope="col">Отчество</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
    </div>
  );
}

export default Profiles;