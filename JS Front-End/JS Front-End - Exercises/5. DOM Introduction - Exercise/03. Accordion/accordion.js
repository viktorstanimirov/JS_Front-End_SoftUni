function toggle() {
    const buttonEl = document.getElementsByClassName('button')[0];
    const extraContentEl = document.getElementById('extra');

    if (extraContentEl.style.display === 'none') {
        extraContentEl.style.display = 'block';
        buttonEl.textContent = 'Less'
    } else {
        extraContentEl.style.display = 'none';
        buttonEl.textContent = 'More'
    }
}