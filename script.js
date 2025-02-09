const body = document.body;
const container = document.createElement('div');
body.append(container);
container.classList.add('container'); 

// Create 16x16 grid
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    container.append(row);
    row.classList.add('row');
    
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        row.append(square);
        square.classList.add('square');
    }
}

