<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Record Manager</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f7fa;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    form {
      max-width: 500px;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
      margin: 0 auto;
    }
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      margin-top: 15px;
      background: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    .records {
      max-width: 100%;
      margin: 30px auto;
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #007bff;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

  <h1>Student Record Manager</h1>

  <form id="studentForm">
    <label>First Name:</label>
    <input type="text" id="firstName" required>

    <label>Middle Name:</label>
    <input type="text" id="middleName">

    <label>Last Name:</label>
    <input type="text" id="lastName" required>

    <label>Age:</label>
    <input type="number" id="age" required>

    <label>Date of Birth:</label>
    <input type="date" id="dob">

    <label>Address:</label>
    <input type="text" id="address">

    <label>Contact #:</label>
    <input type="text" id="contact">

    <label>Mother's Name:</label>
    <input type="text" id="motherName">

    <label>Father's Name:</label>
    <input type="text" id="fatherName">

    <label>Emergency Contact Number:</label>
    <input type="text" id="emergencyContact">

    <button type="button" id="saveBtn">Save</button>
  </form>

  <div class="records">
    <h3>Saved Student Records:</h3>
    <table id="studentTable">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Date of Birth</th>
          <th>Address</th>
          <th>Contact #</th>
          <th>Mother's Name</th>
          <th>Father's Name</th>
          <th>Emergency Contact</th>
        </tr>
      </thead>
      <tbody>
        <!-- Rows will appear here -->
      </tbody>
    </table>
  </div>

  <script>
    const students = [];

    document.getElementById("saveBtn").addEventListener("click", function() {
      const student = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        age: document.getElementById("age").value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        contact: document.getElementById("contact").value,
        motherName: document.getElementById("motherName").value,
        fatherName: document.getElementById("fatherName").value,
        emergencyContact: document.getElementById("emergencyContact").value
      };

      // Add student to array
      students.push(student);

      // Log to console
      console.log("✅ New student saved:", student);
      console.log("📋 All student records:", students);

      // Add a row to the table
      const tableBody = document.querySelector("#studentTable tbody");
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${student.firstName}</td>
        <td>${student.middleName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.dob}</td>
        <td>${student.address}</td>
        <td>${student.contact}</td>
        <td>${student.motherName}</td>
        <td>${student.fatherName}</td>
        <td>${student.emergencyContact}</td>
      `;

      tableBody.appendChild(row);

      // Reset form fields
      document.getElementById("studentForm").reset();
    });
  </script>

</body>
</html>