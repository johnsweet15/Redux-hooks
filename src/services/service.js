import axios from "axios";

class Service {
  constructor() {
    let service = axios.create({});

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error?.response?.status) {
      case 401:
        alert("Unauthorized");
        break;
      case 403:
        alert("Invalid session. Please try signing in again.");
        window.location.reload();
        break;
      case 404:
        alert("Not found");
        break;
      default:
        alert("Internal server error.");
        break;
    }
    return Promise.reject(error);
  };

  get(path, params) {
    return this.service.get(path, { params: params });
  }

  post(path, payload) {
    return this.service.post(path, payload);
  }
}

let service = new Service();
export default service;
