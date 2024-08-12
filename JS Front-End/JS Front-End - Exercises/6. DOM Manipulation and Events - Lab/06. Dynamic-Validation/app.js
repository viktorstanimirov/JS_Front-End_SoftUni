function validate() {
    let inputFieldEl = document.getElementById('email');
    inputFieldEl.addEventListener('change', onChangeEvent)

    let searchedPattern = /[a-z]+@[a-z]+\.[a-z]+/g

    function onChangeEvent(el) {
        let currentValue = el.currentTarget.value;
        if (!currentValue.match(searchedPattern)) {
            el.currentTarget.className = 'error'
        } else {
            el.currentTarget.classList.remove('error')

        }
    }
}
