import axios from '../api/AxiosConfig';

class EmpleadoDataService {

      getAll() {
        return axios.get("/api/empleados");
      }
    
      get(id : string) {
       return axios.get(`/api/empleados/${id}`);
      }
    
      create(data : any) {
        return axios.post("/api/empleados", data);
      }
    
      update(id : string, data : any) {
        return axios.put(`/api/empleados/${id}`, data);
      }
    
      delete(id : string) {
        return axios.delete(`/api/empleados/${id}`);
      }
    
      deleteAll() {
        return axios.delete(`/api/empleados`);
      }
    
      findByTitle(nombres : string) {
        return axios.get(`/api/empleados?nombres=${nombres}`);
      }
}

export default EmpleadoDataService;