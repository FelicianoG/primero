import http from '../api/AxiosConfig';

class DashboardService {
    get(){
        return http.get("/api/test");
    }
}

export default DashboardService;