import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProducts, newProduct, updateProduct } from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";
const app = express.Router();
//to create new product - /api/v1/product/new
app.post("/new", adminOnly, singleUpload, newProduct);
//to get all product with filters - /api/v1/product/all
app.get("/all", getAllProducts);
//to get last 10 product - /api/v1/product/latest
app.get("/latest", getLatestProducts);
//to get all unique categories - /api/v1/product/categories
app.get("/categories", getAllCategories);
//to get all product - /api/v1/product/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);
//to get update and delete product
app.route("/:id").get(getSingleProducts).put(adminOnly, singleUpload, updateProduct)
    .delete(adminOnly, deleteProduct);
export default app;
