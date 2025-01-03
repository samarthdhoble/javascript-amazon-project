import { renderOrderSummary } from "./checkout/ordersummary.js";
import { getProduct } from "../data/products.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import { loadProductsFetch ,loadProducts } from "../data/products.js";
import { loadCart  } from "../data/cart.js";

// import '../data/cart-class.js'
// import '../data/backend-practice.js';


Promise.all([   

    loadProductsFetch()
    ,
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
])
.then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
});





// LEARING PROMICES 

// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve();
//     });

// }).then(() => {

//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });



// CALL BACKS

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });

