
import { getStudentsAPI, addStudentsAPI } from './api.js';

const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

let localStudents = [];

const renderTable = (dataArray) => {
  studentTableBody.innerHTML = '';

  if (dataArray.length === 0) {
    studentTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center;">No student records found.</td>
      </tr>
    `;
    return;
  }

  dataArray.forEach((student, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.email}</td>
    `;

    studentTableBody.appendChild(row);
  });
};

const initApp = () => {
  console.log('Initializing application...');

  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const studentData = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim()
  };

  if (
    !studentData.firstName ||
    !studentData.lastName ||
    !studentData.email
  ) {
    alert('All input fields must be filled out.');
    return;
  }

  addStudentsAPI(studentData);
  localStudents = getStudentsAPI();
  renderTable(localStudents);
  studentForm.reset();
});

initApp();
