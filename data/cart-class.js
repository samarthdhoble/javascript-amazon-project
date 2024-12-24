class Cart{

    cartItems;
    localStorageKey;

    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)); 
    
        if (!this.cartItems){
        
        this.cartItems = [{
                productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity : 2,
                deliveryOptionId : '1'
            },{
                productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity : 1,
                deliveryOptionId : '2' // created new vaiable to store delivery option id
            }
        ];
        }
    }


    saveToStorage(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
    }

    addToCart(productId){

        let matchingItem; // created a variable to store the matching item.
    
        this.cartItems.forEach((cartItem) => { // looping through the cart 
        if (productId === cartItem.productId){ // checking the product name is same as previously or already added product.
            
            matchingItem = cartItem; // if the name is same than the product is stored in the 'matchingItem' variable.
        }
        });
    
        if (matchingItem) { // checking the matching item is empty.
    
        matchingItem.quantity+=1; // if the matchingItem is not empty than we increase the quantity by 1.
        
        } else {
        this.cartItems.push({
            productId : productId,
            quantity : 1,
            deliveryOptionId : '1' 
        });
        }
    
        this.saveToStorage();
    }

    
    removeFromCart(productId){ // PASS THE PARAMETRE TO THE FUNTION.

        let newCart = []; // CREATED THE NEW ARRAY FOR NEW CART THAT ADDES THE CART ITEM EXCEPT THE ONE PRODUCT THAT WE REMOVED.
    
    
        this.cartItems.forEach((cartItem) => { // LOOPING THROUGH CART
        if (cartItem.productId !== productId){ // COMPARING PRODUCT ID'S IF PRODUCT ID'S ARE NOT EQUAL THAN IT ADD THE CARTITEM INTO NEW CART ARRAY.
    
            newCart.push(cartItem); 
        }
        })
    
        this.cartItems = newCart; // ASSIGHING NEW CART TO CART. 
        this.saveToStorage();

    }


    
    updateDeliveryOption(productId,deliveryOptionId){

        let matchingItem; // created a variable to store the matching item.
    
        this.cartItems.forEach((cartItem) => { // looping through the cart 
        if (productId === cartItem.productId){ // checking the product name is same as previously or already added product.
            
            matchingItem = cartItem; // if the name is same than the product is stored in the 'matchingItem' variable.
        }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
    
        this.saveToStorage();
    
    }
    

}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');



console.log(cart);
console.log(businessCart);











