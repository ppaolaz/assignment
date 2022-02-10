const cars=[
    {
        "model": "Budget car",
        "price": 850,
        "seats": 4,
        "luggage": 2,
        "picture": "images/budget.png",
        category: "budget"
    },
    {
        "model": "Standard car",
        "price": 1700,
        "seats": 5,
        "luggage": 4,
        "picture": "images/standard-car.png",
        category: "standard"
    },
    {
        "model": "Minivan",
        "price": 2000,
        "seats": 2,
        "luggage": 1,
        "picture": "images/minivan.png",
        category: "van"
    }
];

const main = document.querySelector(".main-content");

const searchForm = document.querySelector(".searchForm");

const numberOfPeopleInput = document.querySelector(".numberOfPeople");

const numberOfSuitcasesInput = document.querySelector(".numberOfSuitcases");

searchForm.addEventListener('submit', function submitHandler(e){
    e.preventDefault();
    let numberOfPeople = Number(numberOfPeopleInput.value);
    let numberOfSuitcases = Number(numberOfSuitcasesInput.value);
    let filteredCars = cars.filter(function filterFunctions(car){
        return (car.seats >= numberOfPeople) && (car.luggage >= numberOfSuitcases);
    });
    let carBody = '';
    for (const car of filteredCars){
        carBody = carBody + `
            <section class="car1">
            <img src="${car.picture}">
            <h1>${car.model}</h1>
            <p> Category: ${car.category}<br/> Persons:${car.seats} <br> suitcases:${car.luggage} </p>
            <div>
                <h3>${car.price}</h3>
                <button>Book now</button>
            </div>
            </section>
        `
    }
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', carBody);
})
