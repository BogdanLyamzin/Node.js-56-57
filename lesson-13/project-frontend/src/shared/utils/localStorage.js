export const getInitialValue = (key, initialValue) => {
    const result = JSON.parse(localStorage.getItem(key));
    return result || initialValue
}