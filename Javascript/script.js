//Inserisco le costanti
const priceForKilometer = 0.21;
const nameOfPassenger = document.getElementById(`name`);
const numberOfKilometres = document.getElementById(`km`);
const ageOfPassenger = document.getElementById(`select`);
const submit = document.getElementById(`generate`);


//Assegno un eventListener
submit.addEventListener(`click`, function () {
    const passengerName = nameOfPassenger.value;
    const numKm = numberOfKilometres.value;
    let passengerAge = ageOfPassenger.value;
    let price = numKm * priceForKilometer;
    let ticketOffer = `Biglietto Standard`;


    //Dichiaro un primo if per calcolare lo sconto
    if (passengerAge === `under_18`) {
        const discount20 = price * 20 / 100;
        price -= discount20;
        ticketOffer = `Biglietto Under 18`;

    } else if (passengerAge === `over_65`) {
        const discount40 = price * 40 / 100;
        price -= discount40;
        ticketOffer = `Biglietto Over 65`;
    }
    

    //Dichiaro un secondo if per aprire gli alert: se i dati sono stati inseriti correttamente si apre una card tramite .innerHTML
    if (nameOfPassenger.value === `` || numberOfKilometres.value === ``) {
        alert(`Dato non inserito!`);

    } else if (numberOfKilometres.value < 0) {
        alert(`Il valore inserito deve essere maggiore di 0!`);

    } else {
        let carriage = Math.ceil(Math.random() * 12);
        let cpCode = Math.floor(Math.random() * 100000) + 1;
        const card = document.getElementById(`card_container`);
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
                        <td>${ticketOffer}</td>
                        <td class="collapse d-md-table-cell">${carriage}</td>
                        <td class="collapse d-md-table-cell">${cpCode}</td>
                        <td>€ ${price.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    }

})


//Aggiungo il reset
const reset = document.getElementById(`reset`);

reset.addEventListener(`click`, function () {
    nameOfPassenger.value = ``;
    numberOfKilometres.value = ``;
    const card = document.getElementById(`card_container`);
    card.innerHTML =``;

})



