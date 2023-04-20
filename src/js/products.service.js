import {BadRequestError} from "./error";

const BASE_URL = 'https://dummyjson.com'

export class ProductsService{
    static getProductsBySearchQuery = async (query) => {
        try{
            const fetchedProducts = await fetch(BASE_URL + `/products/search?q=${query}`)
            const products = await fetchedProducts.json()
            return products
        }catch(e){
            throw new BadRequestError('Error while fetching products by query')
        }
    }

    static getAllProducts = async () => {
        try{
            const fetchedProducts = await fetch(BASE_URL + '/products?limit=20')
            const products = await fetchedProducts.json()
            return products
        }catch(e){
            throw new BadRequestError('Error while fetching products')
        }
    }

    static getProductById = async (id) => {
        try{
            const fetchedProduct = await fetch(BASE_URL + `/products/${id}`)
            const product = await fetchedProduct.json()
            return product
        }catch(e){
            throw new BadRequestError('Error while fetching product')
        }
    }

    static getProductsByCategory = async (categoryName) => {
        try{
            const fetchedProducts = await fetch(BASE_URL + `/products/category/${categoryName}`)
            const products = await fetchedProducts.json()
            return products
        }catch(e){
            throw new BadRequestError('Error while fetching products by category')
        }
    }

    static getAllCategories = async () => {
        try{
            const fetchedCategories = await fetch(BASE_URL + `/products/categories`)
            const categories = await fetchedCategories.json()
            return categories
        }catch(e){
            throw new BadRequestError('Error while fetching categories')
        }
    }
}
