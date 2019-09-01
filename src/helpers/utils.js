export const getDate = (date) => {
    const objDate = new Date(date);
    return `${objDate.toLocaleString('default', { month: 'long' })} ${objDate.getDate()}, ${objDate.getFullYear()}`
};

export const getWorkplaceId = () => {
    return 'e6f9c2dc-a191-44f2-8d33-5792d16224e7';
};