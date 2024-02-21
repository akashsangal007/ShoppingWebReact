import axios from "axios";

class CartService {
  Base_Url = 'https://localhost:7036/api/Cart/'

  static getInstance() {
    return new CartService();
  }

  GetCartDetails = async (userId) => {
    var response = await axios.get(this.Base_Url + userId)
    return await response.data
  }

  AddToCart = async (userId, product) => {
    var response = await axios.post(this.Base_Url + 'add-to-cart/' + userId, product);
    return await response.data
  }

}
export default CartService