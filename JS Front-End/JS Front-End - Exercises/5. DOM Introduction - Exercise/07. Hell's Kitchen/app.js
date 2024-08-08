function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let restaurantsObj = {}
      const inputEl = document.querySelectorAll('#inputs textarea');

      let restaurantsData = JSON.parse(inputEl[0].value);

      for (const restaurants of restaurantsData) {
         let [restaurantsName, workers] = restaurants.split(' - ');

         if (!Object.keys(restaurantsObj).includes(restaurantsName)) {
            restaurantsObj[restaurantsName] = {
               totalSalary: 0,
               bestSalary: 0,
               workers: {}
            }
         }
         workers = workers.split(', ')
         for (const worker of workers) {
            let [workerName, salary] = worker.split(' ');
            restaurantsObj[restaurantsName]['totalSalary'] += Number(salary);
            restaurantsObj[restaurantsName]['workers'][workerName] = Number(salary)
         }
         console.log(restaurantsObj);
      }
   }

}