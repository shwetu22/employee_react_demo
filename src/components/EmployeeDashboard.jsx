import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://employee-crud-django-1.onrender.com/getAll")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong:", error);
      });
  }, []);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td>{index + 1}</td>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeDashboard;