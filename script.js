import { armenianAlphabet, latinAlphabet, cyrillic, greekAlphabet } from './alphabets.js';

const createVigenereTable = (alphabet) => {
    const table = document.createElement("table");

    const headerRow = table.insertRow();

    headerRow.insertCell();
    for (let i = 0; i < alphabet.length; i++) {
        const th = document.createElement("th");
        th.textContent = alphabet[i];
        th.addEventListener('click', () => {
            clearMarks();
            emphasizeRowAndColumn(i + 1);
            th.classList.add('selected-row', 'emphasized');
            headerRow.classList.add('selected-row', 'emphasized');
        });
        headerRow.appendChild(th);
    }

    for (let i = 0; i < alphabet.length; i++) {
        const row = table.insertRow();

        const headerCell = document.createElement('th');
        headerCell.textContent = alphabet[i];
        headerCell.addEventListener('click', () => {
            clearMarks();
            emphasizeRowAndColumn(i + 1);
            row.classList.add('selected-row', 'emphasized');
            headerCell.classList.add('selected-row', 'emphasized');
            headerRow.cells[i + 1].classList.add('selected-col', 'emphasized');
        });
        row.append(headerCell);

        for (let j = 0; j < alphabet.length; j++) {
            const cell = row.insertCell();

            const index = (i + j) % alphabet.length;
            cell.textContent = alphabet[index];
            cell.addEventListener('click', () => {
                clearMarks();
                emphasizeRowAndColumn(j + 1);
                cell.classList.add('selected-col', 'emphasized');
                row.classList.add('selected-row', 'emphasized');
                headerRow.cells[j + 1].classList.add('selected-col', 'emphasized');
                cell.classList.add('intersection-cell');
            });
        }
    }

    document.body.appendChild(table);
}

const clearMarks = () => {
    const markedElements = document.querySelectorAll('.selected-row, .selected-col, .intersection-cell, .emphasized');
    markedElements.forEach(el => el.classList.remove('selected-row', 'selected-col', 'intersection-cell', 'emphasized'));
}

const emphasizeRowAndColumn = (index) => {
    const allRows = document.querySelectorAll('tr');
    const allCellsInColumn = document.querySelectorAll(`td:nth-child(${index}), th:nth-child(${index})`);

    allRows.forEach(row => row.classList.add('emphasized'));
    allCellsInColumn.forEach(cell => cell.classList.add('emphasized'));
}

const clearTable = () => {
    const existingTable = document.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }
}

const generator_buttons = document.querySelectorAll('.generator-button');
generator_buttons[0].addEventListener('click', () => {
    clearTable();
    createVigenereTable(armenianAlphabet);
});
generator_buttons[1].addEventListener('click', () => {
    clearTable();
    createVigenereTable(latinAlphabet);
});
generator_buttons[2].addEventListener('click', () => {
    clearTable();
    createVigenereTable(cyrillic);
});
generator_buttons[3].addEventListener('click', () => {
    clearTable();
    createVigenereTable(greekAlphabet);
})
generator_buttons[4].addEventListener('click', () => {
    clearTable();
});