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
}
// handle deposite balance
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount)
})
//  handle widthdraw balance
document.getElementById('withdraw-button').addEventListener('click', function () {
    const widthdrawAmount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', widthdrawAmount)
})
// handle main balance
document.getElementById('')