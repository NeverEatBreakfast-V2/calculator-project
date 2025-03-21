function appendToInput(value) {
    const input = document.getElementById('input');
    if (input.value === "0") {
        input.value = value;
    } else {
        input.value += value;
    }
}

function clearInput() {
    document.getElementById('input').value = "0";
}

function calculateResult() {
    const input = document.getElementById('input');
    try {
        const result = eval(input.value);
        input.value = result;
    } catch (error) {
        input.value = "Error";
    }
}
