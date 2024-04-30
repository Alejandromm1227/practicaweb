'use strict';
const $users1 = document.getElementById('users1');
const $users2 = document.getElementById('users2');

async function getUsers1() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    let html = '';
    for (let i = 0; i < data.length; i++) {
      html += `<li>${data[i].name}</li>`;
    }
    $users1.innerHTML = html;
  } catch (error) {
    console.log('algo salió mal');
  }
}

getUsers1();

function getUsers2() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      let html = '';
      for (let i = 0; i < data.length; i++) {
        html += `<li>${data[i].name}</li>`;
      }
      $users2.innerHTML = html;
    })
    .catch((error) => console.log('algo salió mal'));
}

getUsers2();
