// other creative tasks

/*
TASK 1


*/

const labels = ["edit", "coedit"]

const changeLabels = () => { 
    let buttonLabel; 
    const luck = Math.floor(Math.random() * 2);  
    if (luck === 1) {
        buttonLabel = "edit"
    } else {
        buttonLabel = "coedit"
    } return buttonLabel;
}

const determineLabel = () => Math.random() < 0.5 ? "edit" : "coedit"
const determineLabel2 = () => {
    const index = Math.random() < 0.5 ? 0 : 1;
    return labels[index];
}

const determineLabel3 = () => labels[Math.floor(Math.random() * labels.length)]

console.log(determineLabel3());