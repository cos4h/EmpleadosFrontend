import React from "react";

function addEmpl({newEmployee, addEmployee, handleChange}) {
    return (
      <aside className="FormAddEmpl">
        <div>
          <h4>Añadir Empleado</h4>
        </div>
        <form onSubmit={addEmployee}>
          <div>
            <label htmlFor="name">Nombre Completo:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={newEmployee.name}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="id">Documento:</label>
            <input
              type="text"
              name="id"
              id="id"
              value={newEmployee.id}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="cargo">Cargo:</label>
            <select
              name="charge"
              id="cargo"
              value={newEmployee.charge}
              onChange={handleChange}
            >
              <option value="Gerente Financiero">Gerente Financiero</option>
              <option value="Director">Director</option>
              <option value="Líder de Talento Humano">
                Líder de Talento Humano
              </option>
              <option value="Líder de Facturación">Líder de Facturación</option>
              <option value="Líder de tesorería y de Contabilidad">
                Líder de tesorería y de Contabilidad
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="dateEntry">Fecha de Ingreso:</label>
            <input
              type="date"
              name="dateEntry"
              id="dateEntry"
              value={newEmployee.dateEntry}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div>
            <label htmlFor="dateEntry">Fecha de Nacimiento:</label>
            <input
              type="date"
              name="dateBirth"
              id="dateBirth"
              value={newEmployee.dateBirth}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div>
            <button type="submit">Añadir</button>
          </div>
        </form>
      </aside>
    );
}

export default addEmpl;