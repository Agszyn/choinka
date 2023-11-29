let nameHTML = document.getElementById("random-person");

function random() {
    return Math.floor(Math.random() * 7) + 1;


}

function losuj() {
    random()
    if (random() === 1) {
        nameHTML.innerHTML = "Marta";
    }
    if (random() === 2) {
        nameHTML.innerHTML = "Wojtek";
    }
    if (random() === 3) {
        nameHTML.innerHTML = "Karolina";
    }
    if (random() === 4) {
        nameHTML.innerHTML = "Piotrek S";
    }
    if (random() === 5) {
        nameHTML.innerHTML = "Aga";
    }
    if (random() === 6) {
        nameHTML.innerHTML = "Piotrek P";
    }
}

