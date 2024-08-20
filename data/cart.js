export const cart = [];

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
  }
  