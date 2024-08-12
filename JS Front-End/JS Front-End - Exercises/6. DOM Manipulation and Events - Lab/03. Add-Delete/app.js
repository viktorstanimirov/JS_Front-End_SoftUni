function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = '#';
    deleteLink.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    });
    li.appendChild(deleteLink);
    document.getElementById('items').appendChild(li);
    input.value = '';
}