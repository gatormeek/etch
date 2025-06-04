let makeEtch=function() {
    for (let i=0; i<10; i++) {
        let row = document.createElement("div");
        row.style.display="flex";
        for (let j=0; j<10; j++) {
            let column = document.createElement("button");
            column.style.width="25px";
            column.style.height="25px";
            column.style.border="none";
            column.style.padding="0";
            column.style.margin="0";
            column.addEventListener('mouseover', () => {
                column.style.background="red";
            });
            row.appendChild(column);
        }
        document.getElementById("etch-container").appendChild(row);
    }
    
}
makeEtch();

let selectSizeBtn = document.querySelector("#dropbtn");
let sizeSelections = document.querySelector("#dropdown-choices");
let selectionHover = document.querySelectorAll("a");
selectSizeBtn.addEventListener('click', () => {
    sizeSelections.style.display="flex";
    sizeSelections.addEventListener('mouseleave', () => {
        sizeSelections.style.display="none";
    });
});
selectionHover.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color='white';
        link.style.background='#1da1f2';
        link.style.border='none';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color='';
        link.style.background='';
        link.style.border='';
    })
})