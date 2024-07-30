function calc() {
    const numberOneElement = document.getElementById('num1');
    const numberTwoElement = document.getElementById('num2');
    const resultElement = document.getElementById('sum');

    const numberOne = Number(numberOneElement.value);
    const numberTwo = Number(numberTwoElement.value);

    resultElement.value = numberOne + numberTwo;
}
