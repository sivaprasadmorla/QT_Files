import axios from "axios";
const addProductInCart = (data) => {
  axios
    .post("http://localhost:3000/addToCart", data)
    .then((res) => {
        alert("Product Added In the Cart Successfully")
    })
    .catch((error) => {
        alert("Failed to add the product in the cart")
    });
};
export default addProductInCart