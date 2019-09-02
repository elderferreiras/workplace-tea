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
    return 'e6f9c2dc-a191-44f2-8d33-5792d16224e7';
};