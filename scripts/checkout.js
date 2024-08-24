import { cart , removeFromCart, updateDeliveryOption} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import {deliveryOptions} from '../data/deliveryOptios.js'





let cartSummaryHTML = ''; // this stores the html of cart itmes 


cart.forEach((cartItem) => {

    const productId = cartItem.productId; // saved product id in 'productId' variabble.

    let matchingProduct; // created vaiable to normalize the data 

    products.forEach((product) => { // looping in products array.

        if(product.id === productId){ //if product id is same as cartItem's product id than the product is saved to matchingProduct variable.

            matchingProduct = product;
        }

    });
    

    const deliveryOptionId = cartItem.deliveryOptionId; // get delivery option id in variable 'deliveryOptionId'.

    let deliveryOption; // this for getting which option of delivery selected stored in the cart.

    deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId){
            deliveryOption = option; 
        }
    });



    //days :
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days'); // getting deliveryOpton's deliveryDays.
    const datestring = deliveryDate.format('dddd, MMMM D'); // formating the date.
    

    //price :
    const priceString = deliveryOption.priceCents === 0 ? 'Free' : `$${formatCurrency(deliveryOption.priceCents)}`;



    // WE HAVE ADDED CLASS 'js-cart-item-container-${matchingProduct.id}' FOR GETTING CORRECT PRODUCT CONTAINER TO REMOVE IT FORM THE PAGE.    
    cartSummaryHTML += 
    `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">  
        <div class="delivery-date">
            ${datestring}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="${matchingProduct.name}">
                Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>
            <div class="product-price">
                &#x20b9 ${formatCurrency(matchingProduct.priceCents)} 
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
            ${deliveryOptionsHTML(matchingProduct,cartItem)}
            </div>
        </div>
    </div>

    `
}); 





// this funtion generate html of delivery Options.
function deliveryOptionsHTML(matchingProduct,cartItem){ 

    let html = ``; // this element store the html of the delivery option

    deliveryOptions.forEach((deliveryOption) => {

        //days
        const today = dayjs(); // 
        const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
        const datestring = deliveryDate.format('dddd, MMMM D');

        //prices
        const priceString = deliveryOption.priceCents === 0 ? 'Free' : `$${formatCurrency(deliveryOption.priceCents)}`;
        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
         

        // generating html of delievry options
        html +=` <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio" 
                ${isChecked ? 'checked': ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    ${datestring}
                </div>
                <div class="delivery-option-price">
                    ${priceString} - Shipping
                </div>
                </div>
            </div>
        `
    });
    return html; // returning the html for generating.

}


// this line is for generating the order Summary/cart html.
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;



// this is for delete links to delete the product from the cart. 
document.querySelectorAll('.js-delete-link').forEach((link) => {

    link.addEventListener('click', () => {

        let productId = link.dataset.productId; // GET THE PRODUCT ID OF THE PRODUCT'S DELETE LINK USING 'dataset'.

        removeFromCart(productId); // CALLING REMOVE FORM CART FUNTION TO REMOVE THE ELEMENT FORM CART ARRAY.

        const container = document.querySelector(`.js-cart-item-container-${productId}`); // GET THE CLASS OF THE PRODUCT TO WITH UNIQUE ID OF THE PRODUCT TO REMOVE.

        container.remove(); // REMOVED THE PRODUCT FORM THE PAGE. 

    })
});

document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click',() => {
        updateDeliveryOption(productId,deliveryOptionId);
    })
});