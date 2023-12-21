import React from "react";
import Target from "./Target";

function Main({employees, deleteEmployee, editEmployee, viewEmployee}) {
    return (
      <main>
        {employees.map(e => <Target key={e.id} employee={e} deleteEmployee={deleteEmployee} 
        editEmployee={editEmployee} viewEmployee={viewEmployee}
        />)}
      </main>
    );
}
export default Main;