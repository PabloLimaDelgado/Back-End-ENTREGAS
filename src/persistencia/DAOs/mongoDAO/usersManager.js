import { usersModel } from "../../db/models/users.model.js";

class UsersManager {
  constructor() {
    this.model = usersModel;
  }

  async findAll() {
    return this.model.find().populate("cart");
  }

  async findById(id) {
    return this.model.findById(id).populate("cart");
  }

  async findByEmail(email) {
    return this.model
      .findOne({ email })
      .populate({ path: "cart", populate: { path: "products.product" } });
  }

  async createOne(obj) {
    return this.model.create(obj);
  }

  async updateOne(id, obj) {
    return this.model.updateOne({ _id: id }, obj);
  }

  async deleteOne(id) {
    return this.model.deleteOne({ _id: id });
  }
}

export const usersManager = new UsersManager();
