function getInputValue(inputField) {
    const inputValue = document.getElementById(inputField);
    const inputText = inputValue.value;
    const value = parseFloat(inputText);
    inputValue.value = '';
    return value;
}
function updateTotal(updateField, amount) {
    const updateTotalTag = document.getElementById(updateField);
    const totalText = updateTotalTag.innerText;
    const previousTotal = parseFloat(totalText);
    const newTotal = previousTotal + amount;
    updateTotalTag.innerText = newTotal;
    return newTotal;
}
// handle deposite balance
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount)
})
//  handle widthdraw balance
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount)
    updateBalance(amount)
})
// handle main balance
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceTotalText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceTotalText);
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = balanceTotal;
}
