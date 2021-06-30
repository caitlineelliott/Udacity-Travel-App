function updateServer(userCity, departDate, returnDate, packingList, todoList) {
    postData('/api/trip', {
        city: userCity,
        departure: departDate,
        arrival: returnDate,
        packingList: packingList,
        todoList: todoList
    });
}

const postData = async (url = '', data = {}) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        console.log(`DATA SENT TO SERVER`);
        return await response.json();
    }
    catch {
        console.log('FAILED TO POST DATA TO SERVER');
    }
};

export {
    updateServer,
    postData
}