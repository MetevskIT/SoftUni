function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let restaurantsOutput = document.getElementById("bestRestaurant").querySelector('p');
   let workersOutput = document.getElementById("workers").querySelector('p');
   function onClick() {
      let textAreaValue = document.querySelector('textarea').value;
      let arrays = JSON.parse(textAreaValue);
      let restaurants = [];
      for (let array of arrays) {
         let restNameAndWorkers = array.split(' - ');
         let workers = restNameAndWorkers[1].split(", ");
         let currObj = {};
         currObj["name"] = restNameAndWorkers[0];
         currObj['Workers'] = [];
         for (let i = 0; i < workers.length; i++) {
            let currWorker = {};
            let workersAndPrice = workers[i].split(' ');
            currWorker['Name'] = workersAndPrice[0]
            currSalary = Number(workersAndPrice[1]);
            currWorker['Salary'] = currSalary;
            currObj.Workers.push(currWorker);
         }
         let currSum = currObj.Workers.reduce((a, b) => a + b.Salary, 0)
         currObj['Average'] = (currSum / currObj.Workers.length) || 0;
         currObj.Workers = currObj.Workers.sort((a, b) => b.Salary - a.Salary);
         restaurants.push(currObj);
      }
      restaurants.sort((a, b) => b.Average - a.Average);
      let bestRestaurant = `Name: ${restaurants[0].name} Average Salary: ${restaurants[0].Average.toFixed(2)} Best Salary: ${restaurants[0].Workers[0].Salary.toFixed(2)}`;
      let bestWorkers = '';
      for (let worker of restaurants[0].Workers) {
         bestWorkers += `Name: ${worker.Name} With Salary: ${worker.Salary} `;
      }
      restaurantsOutput.textContent = bestRestaurant;
      workersOutput.textContent = bestWorkers;


   }
}