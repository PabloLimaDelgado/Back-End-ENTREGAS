import { productsModel } from "../../db/models/products.model.js";

class ProductsManager {
  constructor() {
    this.model = productsModel;
  }

  async createOne(productData) {
    return this.model.create(productData);
  }

  // Otras funciones relacionadas con el manejo de productos...

}

export const productsManager = new ProductsManager();