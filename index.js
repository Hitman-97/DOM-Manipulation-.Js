 const form = document.querySelector('form');
 const studentNameInput = document.getElementById('StudentName');
 const studentIdInput = document.getElementById('studentid');
 const classInput = document.getElementById('class-name');
 const rollNoInput = document.getElementById('roll-num');
 const cardContainer = document.getElementById('cardContainer');
 function createStudentCard(name, studentId, className, rollNo) {
    // Create a new div element for the student card
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>ID:</strong> ${studentId}</p>
        <p><strong>Class:</strong> ${className}</p>
        <p><strong>Roll No:</strong> ${rollNo}</p>
    `;
    cardContainer.appendChild(card);
 }
 function resetForm() {
    studentNameInput.value = '';
    studentIdInput.value = '';
    classInput.value = '';
    rollNoInput.value = '';
 }
 form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const studentName = studentNameInput.value.trim();
    const studentId = studentIdInput.value.trim();
    const className = classInput.value.trim();
    const rollNo = rollNoInput.value.trim();
    if (studentName === '' || studentId === '' || className === '' || rollNo === 
'') {
        alert('Please fill in all the fields.');
        return;
    }
    createStudentCard(studentName, studentId, className, rollNo);
    resetForm();
 })
