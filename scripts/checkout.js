import { renderOrderSummary } from "./checkout/ordersummary.js";
import { getProduct } from "../data/products.js";
import { renderPaymentSummary } from "./checkout/paymentsummary.js";
import '../data/cart-class.js'

renderOrderSummary();
renderPaymentSummary();
