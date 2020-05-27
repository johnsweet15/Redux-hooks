import Service from "../service";
import appconfig from "../../config/appconfig";

class LoginService {
  async login(data) {
    return Service.post(appconfig.serviceEndpoint + "/login/login", data);
  }
  async createAccount(data) {
    return Service.post(
      appconfig.serviceEndpoint + "profile/createProfile",
      data
    );
  }
}

const loginService = new LoginService();
export default loginService;
