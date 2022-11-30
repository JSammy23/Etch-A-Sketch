// Global variables //
const grid = document.querySelector('.grid-cont')
const adjustBtn = document.getElementById('prompt')
const newDiv = document.createElement('div')


function createGrid() {
    for (var i = 0; i < 16; i++){
        grid.innerHTML += '<div class="box"></div>';
    }
}

createGrid();

