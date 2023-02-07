const getCurrentMonth = ()=> {
    const now = new Date();
    return now.getMonth() + 1;
}

module.exports = getCurrentMonth;

