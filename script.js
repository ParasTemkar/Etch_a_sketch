const body = document.body;
const container = document.createElement('div');
body.append(container);
container.classList.add('container');

// Create nxn grid
let n = prompt('Enter what size of grid you want: ');

for (let i = 0; i < n; i++) {
    const row = document.createElement('div');
    container.append(row);
    row.classList.add('row');

    for (let i = 0; i < n; i++) {
        const square = document.createElement('div');
        row.append(square);
        square.classList.add('square');

        // Adding event listener to change color on hover
        square.addEventListener('mouseenter', () => {
            if (!square.classList.contains('clicked')) {
                square.style.backgroundColor = 'antiquewhite';
            }
        });

        square.addEventListener('mouseleave', () => {
            if (!square.classList.contains('clicked')) {
                square.style.backgroundColor = 'whitesmoke';
            }
        });

        // Adding event listener to change color on click
        square.addEventListener('click', () => {
            if (!square.classList.contains('clicked')) {
                square.style.backgroundColor = 'red';
                square.classList.add('clicked');
            } else {
                square.style.backgroundColor = 'whitesmoke';
                square.classList.remove('clicked');
            }
        });
    }
}

