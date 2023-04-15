const priceForKilometer = 0.21;
const nameOfPassenger = document.getElementById('name');
const numberOfKilometres = document.getElementById('km');
const ageOfPassenger = document.getElementById('select');
const submit = document.getElementById('generate');

submit.addEventListener('click', function () {
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
    const card = document.getElementById('card_container');
    card.innerHTML =
        `<h4 class="mb-0 text-uppercase fw-bold text-center text-white">Il tuo biglietto</h4>
    <div class="card mt-3 rounded-0">
    <div class="card-header d-flex align-items-center">
    <h5 class="mb-0 ps-1 text-uppercase">Dettaglio passeggeri</h5>
    </div>
    <div class="card-body">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" class="text-uppercase" >Nome passeggero</th>
                    <th scope="col">Offerta</th>
                    <th class="collapse d-md-table-cell" scope="col">Carrozza</th>
                    <th class="collapse d-md-table-cell" scope="col">Codice CP</th>
                    <th scope="col">Costo biglietto</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="fw-bold">${passengerName}</th>
                    <td> Biglietto Standard</td>
                    <td class="collapse d-md-table-cell">${carrozzaAssegnata}</td>
                    <td class="collapse d-md-table-cell">${cpCode}</td>
                    <td>€ ${price.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
})

const reset = document.getElementById('reset');

reset.addEventListener('click', function () {
    nameOfPassenger.value = "";
    numberOfKilometres.value = "";
})



