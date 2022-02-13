function calculates(product,weight,priceForKg){
      let weightInKg = Number(weight)/1000;
      let price = Number(priceForKg)*weightInKg;
      console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${product}.`);

}
calculates('orange', 2500, 1.80);