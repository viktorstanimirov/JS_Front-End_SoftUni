function search() {
   const searchValueEl = document.getElementById('searchText').value;
   const listTownElements = Array.from(document.querySelectorAll('#towns li'));

   let matchCount = 0;
   console.log(searchValueEl);


   for (const element of listTownElements) {
      if (element.textContent.includes(searchValueEl)) {
         matchCount += 1;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   let resultEl = document.getElementById('result');
   resultEl.textContent = `${matchCount} matches found`
}
