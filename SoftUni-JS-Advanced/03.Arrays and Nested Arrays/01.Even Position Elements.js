function getEvenPositionElement(input){
    let evenElements="";
    for (let i = 0; i < input.length; i+=2) {
        evenElements+=input[i]+" ";
    }
    console.log(evenElements);
}
getEvenPositionElement(['20', '30', '40', '50', '60']);