function extractText() {
    const ulElement = document.getElementById('items');
    const textAreaElement = document.getElementById('result');

    const textResult = ulElement.innerText;

    textAreaElement.textContent = textResult
}