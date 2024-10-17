export function isToday(date) {
    const today = new Date();

    console.log('today.toDateString(): ', today.toDateString())
    console.log('date.toDateString: ', date.toDateString())

    return today.toDateString() === date.toDateString();
}