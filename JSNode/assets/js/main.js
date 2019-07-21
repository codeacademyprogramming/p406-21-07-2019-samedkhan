// const div01 = document.getElementById('div-01');
// const div02 = document.getElementById('div-02');
// const div05 = document.getElementById('div-05');

// console.dir(div01.children);
// console.log(div02.nextElementSibling);
// console.log(div02.previousElementSibling);

// console.log(div05.querySelector('#div-04'));

// document.querySelectorAll('.dropdown-container')
//   .forEach((dropdownContainer) => {
//     const dropdownTrigger = dropdownContainer.querySelector('.dropdown-trigger');
//     const dropdownWrapper = dropdownContainer.querySelector('.dropdown-wrapper');

//     dropdownTrigger.addEventListener('click', function(e) {
//       if (dropdownWrapper.classList.contains('active')) {
//         dropdownWrapper.classList.remove('active');
//       } else {
//         dropdownWrapper.classList.add('active');
//       }
//     })

//     console.log(dropdownTrigger);
//     console.log(dropdownWrapper);
//   })

// document.querySelectorAll('.dropdown-trigger')
//   .forEach((dropdownTrigger) => {
//     const dropdownWrapper = dropdownTrigger.nextElementSibling;

//     dropdownTrigger.addEventListener('click', function() {
//       document
//         .querySelectorAll('.dropdown-wrapper.active')
//         .forEach((wrapper) => wrapper.classList.remove('active'));
//       dropdownWrapper.classList.toggle('active');
//     });
//   })

// document
//   .querySelectorAll('.dropdown-wrapper')
//   .forEach((wrapper) => {
//     console.log(wrapper.closest('.dropdown-list'));
//   })

// const links = [];
// const menu = document.createElement('ul');

// links.forEach((linkName) => {
//   const newLink = document.createElement('li');
//   newLink.innerText = linkName;

//   menu.appendChild(newLink);
// })

// document.querySelector('body').appendChild(menu);

// const students = [{
//     name: 'John',
//     surname: 'Doe',
//     age: 21,
//   },
//   {
//     name: 'Example',
//     surname: 'Surname',
//     age: 23,
//   }
// ];

// const list = document.getElementById('students-list');

// students.forEach((student) => {
//   const tableRow = document.createElement('tr');

//   for (const key in student) {
//     const tableData = document.createElement('td');
//     tableData.innerText = student[key];
//     tableRow.appendChild(tableData);
//   }

//   list.querySelector('tbody').appendChild(tableRow);
// });

// const list = document.querySelector('.list');

// for (let i = 0; i < 10; i++) {
//   const div = document.createElement('div');
//   div.style.backgroundColor = `rgba(0,0,0,${0.1*i})`;

//   list.appendChild(div);
// }

// const loginForm = document.querySelector('#login');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const username = document.querySelector('input[name="username"]');
//   const password = document.querySelector('input[name="password"]');

//   console.log(username.value);
//   console.log(password.value);
// })

const studentForm = document.querySelector('#student-form');
const studentsScores = [];

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="studentName"]');
  const score = document.querySelector('input[name="score"]');

  studentsScores.push({ name: name.value, score: score.value });
  name.value = '';
  score.value = '';
  fullfillTable();
})

function fullfillTable() {
  const table = document.querySelector('table.table');
  const tbody = table.querySelector('tbody');
  tbody.innerHTML = '';

  studentsScores.forEach((student) => {
    const tableRow = document.createElement('tr');

    for (let key in student) {
      const tableData = document.createElement('td');
      tableData.innerText = student[key];
      tableRow.appendChild(tableData);
    }

    tbody.appendChild(tableRow);
  });
}
