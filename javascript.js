generate_grid();

// Create the `Clear!` button. 
const reset_button = document.createElement("button");
reset_button.textContent = "Clear!";
reset_button.style.margin = `10px`;
const divContainerRef = document.querySelector("div");
document.querySelector("body").insertBefore(reset_button, divContainerRef);


buttonRef = document.querySelector("button");
buttonRef.addEventListener("click", (event) => {
    document.querySelector("body").removeChild(document.querySelector("div#container"));
    let choice = prompt("Enter a grid size between 1 and 100:")
    generate_grid(+choice);
})


// Generate the grid
function generate_grid(gridSize = 50) {
    let containerRef = document.createElement("div");
    containerRef.setAttribute("id", "container");
    // let gridSize = gridsize;
    const HEIGHT_AND_WITH = 1000/gridSize;

    // Create the grid.
    for (let i = 1; i <= gridSize; i++) {
        
        // Create a row in this grid with appropriate attributes.
        const divRow = document.createElement("div"); 
        divRow.setAttribute("id", `row_${i}`);
        divRow.setAttribute("class", "row");

        for (let j = 1; j <= gridSize; j++) {
            
            // Create and append the div element in this row after giving it attributes.
            const divElement = document.createElement("div");
            divElement.setAttribute("id", `col_${j}`);
            divElement.setAttribute("class", "col");
            divElement.style.width = `${HEIGHT_AND_WITH}px`;
            divElement.style.height = `${HEIGHT_AND_WITH}px`;
            divRow.appendChild(divElement);

            // Set up a hover event for each "pixel" in this grid.
            const rgbVals = rgb();
            divElement.addEventListener('mouseenter', function() {
                this.style.backgroundColor = rgbVals;
            })

        }
        containerRef.appendChild(divRow);
    }
    document.querySelector("body").appendChild(containerRef);

    function rgb() {
        // A function to generate a random pixel color value.
        var r =  Math.round(Math.random() * 255);
        var g =  Math.round(Math.random() * 255);
        var b =  Math.round(Math.random() * 255);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
}
 