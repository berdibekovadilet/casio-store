import axios from "axios";
const baseUrl = "https://63734623348e947299079d45.mockapi.io/products";

export default class ProductService {
  static async getAll() {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
