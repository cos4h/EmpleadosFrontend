import axios from "axios";

const baseUrl =
  "https://rhetorical-mountain-production.up.railway.app/api/employees";

function getAll() {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
}

function create(employee) {
  const request = axios.post(baseUrl, employee);
  return request.then((response) => response.data);
}

function update(employee) {
  const request = axios.put(`${baseUrl}/${employee.id}`, employee);
  return request.then((response) => response.data);
}
function remove(id) {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
}

function getEmployee(id) {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
}
export default { getAll, create, update, remove, getEmployee };
