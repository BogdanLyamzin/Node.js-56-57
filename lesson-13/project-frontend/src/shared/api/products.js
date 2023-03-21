import axios from "axios";

const productsInstance = axios.create({
    baseURL: "https://62becfba0bc9b125615fd0f7.mockapi.io/api/products"
})

export const getAllProducts = async()=> {
    const {data} = await productsInstance.get("/");
    return data;
}

export const deleteProduct = async(id)=> {
    const {data} = await productsInstance.delete(`/${id}`);
    return data;
}