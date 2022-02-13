import axios from '../api/AxiosConfig';
import { Direccion } from '../types';

class DireccionDataService {

      getAll() {
        return axios.get("/api/direcciones");
      }
    
      get(id : string) {
       return axios.get<Direccion>(`/api/direcciones/${id}`);
      }
    
      create(data : any) {
        return axios.post("/api/direcciones", data);
      }
    
      update( data : any) {
        return axios.put(`/api/direcciones/${data.id}`, data);
      }
    
      delete(id : string) {
        return axios.delete(`/api/direcciones/${id}`);
      }
    
      deleteAll() {
        return axios.delete(`/api/direcciones`);
      }
    
}

export default DireccionDataService;