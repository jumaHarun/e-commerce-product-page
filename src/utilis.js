export const getCurrencyLocale = (str) => {
    return Number(str).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
};