const valueDisplay = (id, value) => {
    const totalBalance = document.getElementById(id)
    totalBalance.innerText = value;

}
// add some function ---
function getElement(id) {
    const getElm = document.getElementById(id);
    const element = parseInt(getElm.value)
    return element
}
// calculate button site creating ----
document.getElementById('calculate-btn').addEventListener('click', function () {

    const income = getElement('income')
    // expense item adding
    // food is add ----
    const food = getElement('food');
    // rent is add ---
    const rent = getElement('rent');
    // clothes is add ---
    const clothes = getElement('clothes');
    // condition applied ---
    if (
        income < 0 ||
        income == "" ||
        food < 0 ||
        food == "" ||
        rent < 0 ||
        rent == "" ||
        clothes < 0 ||
        clothes == ""
    ) {
        alert('please give this input field positive number');
        return;
    }
    // all ar connect ---
    const expenses = food + rent + clothes;
    const balance = income - expenses;
    // total balance display add ---
    valueDisplay('total-expense', expenses)
    valueDisplay('balance', balance)
})

// saving button site making -----
document.getElementById('save-btn').addEventListener('click', function () {
    // income input ---
    const income = getElement('income');
    // save input ---
    const save = getElement('save');
    // save percentage site ---
    const saveAmount = (save / 100) * income;
    // get balance amount ---
    const balance = document.getElementById('balance').innerText;
    const addedNew = balance - saveAmount;
    // saving amount and remaining balance add ---
    if (saveAmount > balance) {
        alert("please reset fast, saving amount high to balance");
    } else {
        document.getElementById("saving-amount").innerText = saveAmount;
        document.getElementById("remaining-balance").innerText = addedNew;
    }
})