import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main.jsx";
import AddEmpl from "./components/AddEmpl.jsx";
import employeeService from "./services/Employee.js";

function App() {
  // I want to use the useState hook to manage the state of the employees array with all properties
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    id: "",
    charge: "Gerente Financiero",
    dateEntry: "",
    dateBirth: "",
  });

  useEffect(() => {
    employeeService.getAll().then((initialEmployees) => {
      setEmployees(initialEmployees);
    });
  }, []);

  const addEmployee = (e) => {
    e.preventDefault();

    employeeService
      .create(newEmployee)
      .then((returnedEmployee) => {
        setEmployees(employees.concat(returnedEmployee));
      })
      .catch((error) => {
        console.log(error);
      });

    setNewEmployee({
      name: "",
      id: "",
      charge: "Gerente Financiero",
      dateEntry: "",
      dateBirth: "",
    });
  };

  const handleChange = (e) => {
    setNewEmployee({
      ...newEmployee,
      [e.target.name]: e.target.value,
    });
  };

  const deleteEmployee = (id) => {
    employeeService.remove(id).then((response) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const editEmployee = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    const changedEmployee = { ...employee, charge: "Gerente de Ventas" };
    employeeService.update(employee).then((response) => {
      console.log(response);
    });
  };

  const viewEmployee = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    employeeService.getEmployee(id).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="body">
      <Header />
      <Main
        employees={employees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
        viewEmployee={viewEmployee}
      />
      <AddEmpl
        newEmployee={newEmployee}
        addEmployee={addEmployee}
        handleChange={handleChange}
      />

      <footer>Footer</footer>
    </div>
  );
}

export default App;
