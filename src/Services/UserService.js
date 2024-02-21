import axios from "axios";

class UserService {
    Base_Url = "https://localhost:7036/api/";
    static getInstance() {
        return new UserService();
    }

    loginUser = async (email, password) => {
        let userDetails = { email, password }
        console.log(userDetails)
        const response = await axios.post(this.Base_Url + 'Login',
            userDetails);
        return await response.data;
    }
}
export default UserService;