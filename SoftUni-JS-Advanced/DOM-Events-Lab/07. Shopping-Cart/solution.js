function solve() {
   let products = document.querySelectorAll(".add-product");
   let area = document.querySelector('textarea');
   for (let product of products) {
      product.addEventListener('click', add);
   }
   let checkButton = document.querySelector('.checkout');
   checkButton.addEventListener('click', check);
   let price = 0;
   let buyProduct = [];
   function add(e) {
      let name = e.currentTarget.parentNode.parentNode
         .querySelector(".product-title").textContent;
      if (!buyProduct.some(x => x == name)) {
         buyProduct.push(name);
      }
      let sumForCurrProduct = Number(e.currentTarget.parentNode.parentNode
         .querySelector(".product-line-price").textContent);
      price += sumForCurrProduct;

      area.textContent += `Added ${name} for ${sumForCurrProduct.toFixed(2)} to the cart.\n`;
   }
   function check() {
      for (let product of products) {
         product.removeEventListener('click', add);
      }
      checkButton.removeEventListener('click', check);
      area.textContent += `You bought ${buyProduct.join(', ')} for ${price.toFixed(2)}.`;

   }
}