const monthNames = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function updateUI(tripState, userCountry, userCity, departDate, returnDate) {
    const h1 = document.querySelector('.title');
    const h2 = document.querySelector('.subtitle');
    const output = document.querySelector('.output');
    const travelSum = document.querySelector('.travel-summary');
    const currentDate = new Date();

    output.classList.add('display-on');
    h1.innerHTML = `${userCity}, ${tripState}`;
    h2.innerHTML = `${monthNames[departDate.getMonth()]} ${departDate.getDate()}, ${departDate.getFullYear()} - ${monthNames[returnDate.getMonth()]} ${returnDate.getDate()}, ${returnDate.getFullYear()}`;
    travelSum.innerHTML =
        `I can see that you are traveling to ${userCity} from ${h2.innerHTML}.
        Your trip is ${returnDate.getDate() - departDate.getDate() + 1} days and ${returnDate.getDate() - departDate.getDate()} nights long. 
        Your trip begins in ${departDate.getDate() - currentDate.getDate()} days.`
}

export { updateUI }