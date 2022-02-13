function filterEmployees(data,criteria){
   let dataObject= JSON.parse(data);
   let commands = criteria.split('-');
   let count=0;
   if (commands[1]=="all") {
       dataObject.forEach(x => {
           return console.log(`${count++}. ${x['first_name']} ${x['last_name']} - ${x['email']}`);
       });
   }else{
       let filter= dataObject.filter(obj=>{
           return obj[commands[0]]==commands[1];
       })
       filter.forEach(x => {
        return console.log(`${count++}. ${x['first_name']} ${x['last_name']} - ${x['email']}`);
    });
   }

}
filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)