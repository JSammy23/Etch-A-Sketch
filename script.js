// Global variables //
const adjustBtn = document.getElementById('prompt');



function createGrid(numberCells) {
    numberCells = numberCells || 16;
    // Calulate cell width & height to fill board
    let cellWidth = 40/numberCells + "rem";
    let cellHeight = 40/numberCells + 'rem';
    // Create Array for new divs
    const gridDiv = document.getElementById("grid-cont");
    // Instantiate array
    let divArray = [];
    // Iterate through for loop creating 16 divs
    for (i = 0; i < numberCells; i++) {
        // For each div created, loop through and create 16 nested divs
        divArray[i] = document.createElement("div");
        // Add the new element with the text content to the DOM
        gridDiv.appendChild(divArray[i]);
        // Iterate through for loop creating 16 divs
        for (j = 0; j < numberCells; j++) {
            // Create a new div
            const newDiv = document.createElement("div");
            // Create a class attribute
            const classAttribute = document.createAttribute("class");
            // Set the value of the class attribute
            classAttribute.value = "cell";
            // Add the class attribute to the div
            newDiv.setAttributeNode(classAttribute);
            // Create a style attribute for cell width
            const widthHeightAttribute = document.createAttribute("style")
            // Assign a value to the style attribute
            widthHeightAttribute.value = `width: ${cellWidth}; height: ${cellHeight};`;
            // Add the style attribute to the div
            newDiv.setAttributeNode(widthHeightAttribute);
            // Add the new element with the text content to the DOM
            divArray[i].appendChild(newDiv);
        }
    }
    //onLoad();
}

function refreshGrid() {
    let allCells = document.querySelectorAll('.cell');
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "white";
    };
    let promptCells = prompt("Enter amount of cells in grid: (Default 16x16)")
    let numberCells = parseInt(promptCells);
    const gridDiv = document.getElementById("grid-cont");
    // Delete all divs from the main container
    while (gridDiv.firstChild) gridDiv.removeChild( gridDiv.firstChild);
    createGrid(numberCells);
    listen();
}

// Event Listener
adjustBtn.addEventListener('click', refreshGrid);

function listen() {
    gridCell = document.getElementsByClassName('cell');
    for (let i = 0; i < gridCell.length; i++) {
        gridCell[i].addEventListener('mouseover', () => {
            gridCell[i].style.backgroundColor = "lime";
        })
    }
}

