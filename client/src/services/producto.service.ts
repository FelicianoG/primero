import axios from '../api/AxiosConfig';
import { Producto } from '../types';

class ProductoDataService {

    getAll() {
      return axios.get("/api/productos");
    }
  
    get(id : string) {
     return axios.get<Producto>(`/api/productos/${id}`);
    }
  
    create(data : any) {
      return axios.post("/api/productos", data);
    }
  
    update( data : any) {
      return axios.put(`/api/productos/${data.id}`, data);
    }
  
    delete(id : string) {
      return axios.delete(`/api/productos/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`/api/productos`);
    }
  
    findByTitle(nombres : string) {
      return axios.get(`/api/productos?nombres=${nombres}`);
    }
}

export default ProductoDataService;