import { cart , removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


let cartSummaryHTML = '';

cart.forEach((cartItem) => {

    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if(product.id === productId){
            matchingProduct = product;
        }

    });
    

// WE HAVE ADDED CLASS 'js-cart-item-container-${matchingProduct.id}' FOR GETTING CORRECT PRODUCT CONTAINER TO REMOVE IT FORM THE PAGE.    
    cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">  
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="${matchingProduct.name}">
                Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)} 
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span data-product-id="${matchingProduct.id}" class="delete-quantity-link link-primary js-delete-link">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

    `
}); 


document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link').forEach((link) => {

    link.addEventListener('click', () => {

        let productId = link.dataset.productId; // GET THE PRODUCT ID OF THE PRODUCT'S DELETE LINK USING 'dataset'.

        removeFromCart(productId); // CALLING REMOVE FORM CART FUNTION TO REMOVE THE ELEMENT FORM CART ARRAY.

        const container = document.querySelector(`.js-cart-item-container-${productId}`); // GET THE CLASS OF THE PRODUCT TO WITH UNIQUE ID OF THE PRODUCT TO REMOVE.

        container.remove(); // REMOVED THE PRODUCT FORM THE PAGE. 

    })
})