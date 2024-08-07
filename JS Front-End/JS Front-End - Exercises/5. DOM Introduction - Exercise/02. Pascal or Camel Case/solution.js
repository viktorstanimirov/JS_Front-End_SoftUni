function solve() {
    const validNamingConvention = ['Camel Case', 'Pascal Case'];

    const [textEl, namingConventionEl] = document.querySelectorAll('input[type="text"]');
    const resultEl = document.getElementById('result');

    if (!validNamingConvention.includes(namingConventionEl.value)) {
        resultEl.textContent = "Error!";
    } else {
        let result;
        if (namingConventionEl.value === 'Camel Case') {
            result = textEl.value.toLowerCase()
                .split(' ')
                .map((word, index) => {
                    if (index === 0) {
                        return word;
                    }
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join('');
        } else if (namingConventionEl.value === 'Pascal Case') {
            result = textEl.value.toLowerCase()
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join('');
        }
        resultEl.textContent = result;
    }
}