export const getDate = (date) => {
    const objDate = new Date(date);
    return `${objDate.toLocaleString('default', { month: 'long' })} ${objDate.getDay()}, ${objDate.getFullYear()}`
};