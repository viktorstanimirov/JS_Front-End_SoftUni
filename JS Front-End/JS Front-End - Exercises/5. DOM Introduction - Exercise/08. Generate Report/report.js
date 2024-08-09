function generateReport() {
    const columnsElements = Array.from(document.querySelectorAll('th input'));
    const selectedColumns = columnsElements.map((input, index) => input.checked ? index : -1).filter(index => index !== -1);

    const reportList = [];

    document.querySelectorAll('tbody tr').forEach(row => {
        const reportItem = {};
        selectedColumns.forEach(colIndex => {
            const headerName = columnsElements[colIndex].name;
            reportItem[headerName] = row.cells[colIndex].textContent.trim();
        });
        reportList.push(reportItem);
    });
    document.getElementById('output').value = JSON.stringify(reportList, null, 2);
}
