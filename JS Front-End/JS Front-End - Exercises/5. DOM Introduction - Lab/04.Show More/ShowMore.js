function showText() {
    const readdMoreElement = document.getElementById('more').style.display = 'none';
    const textElement = document.getElementById('text').style.display = 'inline';

    readdMoreElement.textContent = textElement.textContent;

}