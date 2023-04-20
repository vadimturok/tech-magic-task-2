export const getDetailsProductTemplate = (product) => {
    return `<div className="single-product__item">
        <h1>${product.title}</h1>
        <img class="single-product__item-image" src="${product.images[0]}" alt="product-picture">
            <div class="single-product__item-category">${product.category}</div>
            <div class="single-product__item-description">${product.description}</div>
            <div class="single-product__item-brand"><span>Brand: </span>${product.brand}</div>
            <h1 class="single-product__item-price">${product.price}</h1>
    </div>
    `
}

export const getProductTemplate = (product) => {
    return `<div class="product">
        <img class="product__image" src="${product.images[0]}" alt="product-pic">
            <div class="product__info">
                <h3 class="product__title">${product.title}</h3>
                <div class="product__category">${product.category}</div>
                <div class="product__price">${product.price}</div>
            </div>
    </div>
    `
}

export const getCategoryTemplate = (category) => {
    return `<option value="${category}">
        ${category}
    </option>
    `
}