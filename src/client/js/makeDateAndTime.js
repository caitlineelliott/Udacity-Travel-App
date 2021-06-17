// Make Date + Time
const makeDateAndTime = () => {
    const today = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
    if (today.getHours() > 12) {
        let dateTime = `${date} | ${today.getHours() - 12}:${today.getMinutes()} p.m.`;
        return dateTime;
    } else {
        let dateTime = `${date} | ${today.getHours()}:${today.getMinutes()} a.m.`;
        return dateTime;
    }
};

export {
    makeDateAndTime
}