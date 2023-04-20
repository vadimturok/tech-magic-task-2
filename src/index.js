import css from './index.css'
import {getCategoryTemplate, getDetailsProductTemplate, getProductTemplate} from "./templates";
import {ProductsService} from "./products.service";
import {BadRequestError} from './error'

const productsList = document.querySelector('.main__right')
const categorySelect = document.querySelector('.select')
const singleProduct = document.querySelector('.single-product')


const showInitialProducts = async () => {
    try{
        const products = await ProductsService.getAllProducts()
        showAllProducts(products.products)
    }catch(e){
        if(e instanceof BadRequestError){
            productsList.textContent = e.message
        }
    }
}

const showSingleProduct = async (product) => {
    if(!product) return;
    singleProduct.innerHTML = ''
    const singleProductElement = document.createElement('div')
    const clearButton = document.createElement('button')
    clearButton.textContent = 'Clear'
    clearButton.className = 'single-product__item-button'
    clearButton.addEventListener('click', clearProduct)
    singleProductElement.innerHTML = getDetailsProductTemplate(product)
    singleProduct.prepend(clearButton)
    singleProduct.appendChild(singleProductElement)
}

const showAllProducts = (products) => {
    productsList.innerHTML = ''
    products.forEach(product => {
        const productElement = document.createElement('div')
        productElement.addEventListener('click', () => selectProduct(product.id))
        productElement.innerHTML = getProductTemplate(product)
        productsList.appendChild(productElement)
    })
}

const showAllCategories = async () => {
    const categories = await ProductsService.getAllCategories()
    categories.forEach(category =>
        categorySelect.insertAdjacentHTML('beforeend', getCategoryTemplate(category)))
}

const selectCategory = async (e) => {
    if(e.target.value === 'All'){
        showInitialProducts()
    }else{
        try{
            const prods = await ProductsService.getProductsByCategory(e.target.value)
            showAllProducts(prods.products)
        }catch(e){
            if(e instanceof BadRequestError){
                productsList.textContent = e.message
            }
        }
    }
}

const selectProduct = async (id) => {
    try{
        const product = await ProductsService.getProductById(id)
        showSingleProduct(product)
    }catch(e){
        if(e instanceof BadRequestError){
            singleProduct.textContent = e.message
        }
    }
}

const clearProduct = () => {
    singleProduct.innerHTML = ''
}


categorySelect.addEventListener('change', selectCategory)
showInitialProducts()
showAllCategories()

