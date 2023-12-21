import React from "react";

function Target({employee, deleteEmployee, editEmployee, viewEmployee}) {
  return (
    <div className="target">
      <img src="src\assets\photo.png" width="50" />
      <br />
      Nombre: {employee.name}
      <br />
      Documento: {employee.id}
      <br />
      Cargo: {employee.charge}
      <br />
      Fecha de Ingreso:
      <br />
      {employee.dateEntry}
      <br />
      Fecha de Nacimiento:
      <br />
      {employee.dateBirth}
      <br />
      <br />
      <button className="btn btn-danger" onClick={() => {
        deleteEmployee(employee.id)
      }}>Eliminar</button>
      <br />
      <button className="btn btn-warning" onClick={() => {
        editEmployee(employee.id)
      }}>Editar</button>
      <br />
      <button className="btn btn-success" onClick={() => {
        viewEmployee(employee.id)
      }}>Ver</button>
    </div>
  );
}

export default Target;
