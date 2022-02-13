function townPopulation(array){
     
    let result={};
    for (let arr of array) {
      let currArr=arr.split(" <-> ");
      let name=currArr[0];
      let population = Number(currArr[1]);
      if (!result[name]) {
        result[name]=0;
      }
      result[name]+=population;

    } 
    for (const key in result) {
        console.log(key+" : "+result[key]);
    }
   
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);