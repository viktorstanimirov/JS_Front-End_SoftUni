function subtract() {
    const [firstNumber, secondNumber] = document.querySelectorAll('input[type="text"]');

    document.getElementById('result')
        .textContent = Number(firstNumber.value) - Number(secondNumber.value);

}