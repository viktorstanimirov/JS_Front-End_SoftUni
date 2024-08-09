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

                if (Number(salary) > restaurantsObj[restaurantsName]['bestSalary']) {
                    restaurantsObj[restaurantsName]['bestSalary'] = Number(salary);
                }
            }
        }

        let bestRestaurant = {
            name: '',
            averageSalary: 0,
            bestSalary: 0,
            workers: []
        }

        for (const restaurant in restaurantsObj) {
            let currentRestaurant = restaurantsObj[restaurant];
            let currentAverageSalary = currentRestaurant.totalSalary / Object.keys(currentRestaurant.workers).length;
            if (currentAverageSalary > bestRestaurant.averageSalary) {
                bestRestaurant.name = restaurant;
                bestRestaurant.averageSalary = currentAverageSalary.toFixed(2);
                bestRestaurant.bestSalary = currentRestaurant.bestSalary.toFixed(2);
                bestRestaurant.workers = Object.entries(currentRestaurant.workers)
                    .sort((a, b) => b[1] - a[1])
                    .map(([workerName, salary]) => `Name: ${workerName} With Salary: ${salary}`)
                    .join(' ');
            }
        }

        let bestRestaurantEl = document.querySelector('#bestRestaurant p');
        let workersEl = document.querySelector('#workers p');
        bestRestaurantEl.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;
        workersEl.textContent = bestRestaurant.workers; //
    }
}

