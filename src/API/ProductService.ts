import axios from "axios";

const baseUrl = "https://63734623348e947299079d45.mockapi.io/products?";
const baseUrlId = "https://63734623348e947299079d45.mockapi.io/products?id=";

export default class ProductService {
  static async getAll() {
    const response = await axios.get(baseUrl);
    return response.data;
  }

  static async getOne(id: number) {
    const response = await axios.get(baseUrlId + id);
    return response.data;
  }
}
