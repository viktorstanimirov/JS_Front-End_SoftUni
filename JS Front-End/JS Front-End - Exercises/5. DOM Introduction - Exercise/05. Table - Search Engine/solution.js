function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedValueEl = document.getElementById('searchField');
      const allElements = Array.from(document.querySelectorAll('td'));
      const allRowsElements = Array.from(document.querySelectorAll('tr'));

      for (let row of allRowsElements) {
         row.classList.remove('select')
      }

      for (const element of allElements) {
         if (element.textContent.includes(searchedValueEl.value)) {
            element.parentElement.className = 'select'
         }

      }
      searchedValueEl.value = '';
   }

}