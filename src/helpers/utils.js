export const getDate = (date, short) => {
    const objDate = new Date(date);
    let month = objDate.toLocaleString('default', { month: 'long' });
    return `${month} ${objDate.getDate()}, ${objDate.getFullYear()}`
};

export const getShortDate = (date, short) => {
    const objDate = new Date(date);
    let month = objDate.toLocaleString('default', { month: 'long' });
    return `${month.toString().slice(0,3)} ${objDate.getDate()}, ${objDate.getFullYear()}`
};

export const getWorkplaceId = () => {
    return '1da8f310-c096-4558-88d5-7c6f21344a00';
};