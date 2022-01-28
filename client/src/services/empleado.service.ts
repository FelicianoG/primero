import http from '../api/AxiosConfig';

class EmpleadoDataService {

    getAll() {
        return http.get("/empleados");
      }
    
      get(id : string) {
        return http.get(`/empleados/${id}`);
      }
    
      create(data : any) {
        return http.post("/empleados", data);
      }
    
      update(id : string, data : any) {
        return http.put(`/empleados/${id}`, data);
      }
    
      delete(id : string) {
        return http.delete(`/empleados/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/empleados`);
      }
    
      findByTitle(nombres : string) {
        return http.get(`/empleados?nombres=${nombres}`);
      }
}

export default new EmpleadoDataService();