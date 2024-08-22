export let cart = JSON.parse(localStorage.getItem('cart')); 

if (!cart){

  cart = [{
      productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity : 2
      },{
        productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity : 1
      }
  ];

}



function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));

};

export function addToCart(productId){

    let matchingItem; // created a variable to store the matching item.
  
    cart.forEach((cartItem) => { // looping through the cart 
      if (productId === cartItem.productId){ // checking the product name is same as previously or already added product.
        
        matchingItem = cartItem; // if the name is same than the product is stored in the 'matchingItem' variable.
      }
    });
  
    if (matchingItem) { // checking the matching item is empty.
  
      matchingItem.quantity+=1; // if the matchingItem is not empty than we increase the quantity by 1.
    
    } else {
      cart.push({
        productId : productId,
        quantity : 1
      });
    }

    saveToStorage();
  }


  export function removeFromCart(productId){ // PASS THE PARAMETRE TO THE FUNTION.

    let newCart = []; // CREATED THE NEW ARRAY FOR NEW CART THAT ADDES THE CART ITEM EXCEPT THE ONE PRODUCT THAT WE REMOVED.


    cart.forEach((cartItem) => { // LOOPING THROUGH CART
      if (cartItem.productId !== productId){ // COMPARING PRODUCT ID'S IF PRODUCT ID'S ARE NOT EQUAL THAN IT ADD THE CARTITEM INTO NEW CART ARRAY.

        newCart.push(cartItem); 
      }
    })

    cart = newCart; // ASSIGHING NEW CART TO CART. 
    saveToStorage();

  }
  