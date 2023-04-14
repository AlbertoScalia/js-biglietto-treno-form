const priceForKilometer = 0.21;
let nameOfPassenger = document.getElementById('name');
let numberOfKilometres = document.getElementById('km');
let ageOfPassenger = document.getElementById('select');
let submit = document.getElementById('generate');



submit.addEventListener('click', function() {
    const passengerName = nameOfPassenger.value;
    const numKm = numberOfKilometres.value;
    let passengerAge = ageOfPassenger.value;
    let price = numKm * priceForKilometer;

    if (passengerAge === 'under_18') {
        const discount20 = price * 20 / 100;
        price -= discount20;

    } else if (passengerAge === 'over_65') {
        const discount40 = price * 40 / 100;
        price -= discount40;
    }

    let carrozzaAssegnata = Math.ceil(Math.random() * 12);
    console.log("carrozza", carrozzaAssegnata);

    let cpCode = Math.floor(Math.random() * 100000) + 1;
})



