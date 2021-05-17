function updateUI(tripState, userCountry, userCity, departDate, returnDate) {
    const h1 = document.querySelector('.title');
    const h2 = document.querySelector('.subtitle');

    h1.innerHTML = `${userCity}, ${tripState}`;
    h2.innerHTML = `${departDate} - ${returnDate}`;
}

export { updateUI }