console.log("we are working in this directory with the correct page loaded")

console.log("how to calculate")

containerRef = document.querySelector("div");
let gridSize = 20;
const HEIGHT_AND_WITH = 1000/gridSize;
for (let i = 1; i <= gridSize; i++) {
    const divRow = document.createElement("div"); 
    divRow.setAttribute("id", `row_${i}`);
    divRow.setAttribute("class", "row");
    for (let j = 1; j <= gridSize; j++) {
        const divCol = document.createElement("div");
        divCol.setAttribute("id", `col_${j}`);
        divCol.setAttribute("class", "col");
        divCol.style.width = `${HEIGHT_AND_WITH}px`;
        divCol.style.height = `${HEIGHT_AND_WITH}px`;
        divRow.appendChild(divCol);
    }
    containerRef.appendChild(divRow);
}

  


 