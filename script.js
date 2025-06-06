let selectSizeBtn = document.querySelector("#dropbtn");
let sizeSelections = document.querySelector("#dropdown-choices");
let selectionHover = document.querySelectorAll("a");
let etchContainer = document.querySelector("#etch-container");
let sizeZero = document.querySelector("#size-zero");
let sizeOne = document.querySelector("#size-one");
let sizeTwo = document.querySelector("#size-two");
let sizeThree = document.querySelector("#size-three");
let sizeFour = document.querySelector("#size-four");
let sizeFive = document.querySelector("#size-five");
let sizeSix = document.querySelector("#size-six");
let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

sizeZero.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<1; i++) {
            row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<1; j++) {
                column = document.createElement("button");
                column.style.width="500px";
                column.style.height="500px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeOne.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<4; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<4; j++) {
                let column = document.createElement("button");
                column.style.width="125px";
                column.style.height="125px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeTwo.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<8; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<8; j++) {
                let column = document.createElement("button");
                column.style.width="62.5px";
                column.style.height="62.5px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeThree.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<16; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<16; j++) {
                let column = document.createElement("button");
                column.style.width="31.25px";
                column.style.height="31.25px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeFour.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<32; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<32; j++) {
                let column = document.createElement("button");
                column.style.width="15.625px";
                column.style.height="15.625px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeFive.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<64; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<64; j++) {
                let column = document.createElement("button");
                column.style.width="7.8125px";
                column.style.height="7.8125px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

sizeSix.addEventListener('click', () => {
    etchContainer.innerHTML = '';
    let makeEtch=function() {
        for (let i=0; i<128; i++) {
            let row = document.createElement("div");
            row.style.display="flex";
            for (let j=0; j<128; j++) {
                let column = document.createElement("button");
                column.style.width="3.90625px";
                column.style.height="3.90625px";
                column.style.border="none";
                column.style.padding="0";
                column.style.margin="0";
                column.addEventListener('mouseover', () => {
                    if (!mouseDown) {
                        column.style.background="red";
                    } else {
                        column.style.background="";
                    }
                });
                row.appendChild(column);
            }
            document.getElementById("etch-container").appendChild(row);
        }
        
    }
    makeEtch();
});

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