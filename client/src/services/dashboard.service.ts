import axios from '../api/AxiosConfig';

class DashboardService {
    get(){
        return axios.get("/api/test");
    }
}

export default DashboardService;