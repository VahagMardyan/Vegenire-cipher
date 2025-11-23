import { armenianAlphabet, latinAlphabet, cyrillic, greekAlphabet } from './alphabets.js';

const createVigenereTable = (alphabet) => {
    clearTable();

    const table = document.createElement('table');

    const headerRow = table.insertRow();
    headerRow.insertCell();

    alphabet.forEach((letter, col) => {
        const th = document.createElement('th');
        th.textContent = letter;

        th.addEventListener('click', () => {
            clearMarks();
            emphasizeRowAndColumn(0, col + 1);
        });

        headerRow.appendChild(th);
    });

    alphabet.forEach((rowLetter, row) => {
        const tr = table.insertRow();

        // Row header (left column)
        const th = document.createElement('th');
        th.textContent = rowLetter;

        th.addEventListener('click', () => {
            clearMarks();
            emphasizeRowAndColumn(row + 1, 0);
        });

        tr.appendChild(th);

        // Cells
        alphabet.forEach((_, col) => {
            const cell = tr.insertCell();

            const letterIndex = (row + col) % alphabet.length;
            cell.textContent = alphabet[letterIndex];

            cell.addEventListener('click', () => {
                clearMarks();
                emphasizeRowAndColumn(row + 1, col + 1);
            });
        });
    });

    document.body.appendChild(table);
};

const emphasizeRowAndColumn = (rowIndex, colIndex) => {
    const table = document.querySelector("table");
    if (!table) return;

    // Highlight row
    if (rowIndex > 0) {
        const row = table.rows[rowIndex];
        for (let cell of row.cells) {
            cell.classList.add("emphasized");
        }
    }

    // Highlight column
    if (colIndex > 0) {
        for (let r = 0; r < table.rows.length; r++) {
            const cell = table.rows[r].cells[colIndex];
            if (cell) cell.classList.add("emphasized");
        }
    }

    // Highlight intersection only if it's a real table cell (not header row/col)
    if (rowIndex > 0 && colIndex > 0) {
        table.rows[rowIndex].cells[colIndex].classList.add("intersection-cell");
    }
};

const clearMarks = () => {
    document
        .querySelectorAll(".emphasized, .intersection-cell")
        .forEach(el => el.classList.remove("emphasized", "intersection-cell"));
};

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
generator_buttons[5].addEventListener('click', () => {
    clearMarks(); 
});