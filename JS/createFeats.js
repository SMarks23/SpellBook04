/*FEATS*/
//VARIABLES
let featConts = document.getElementsByClassName("featCont");
let feats = document.getElementsByClassName("feat");
let activeFeats = [];

//ACTIONS
//Checks which Feat is tapped and checks if it is already part of the activeFeats array
function tapFeat(e) {
    let f = e.innerHTML;

    if (activeFeats.includes(f)) {
        removeFeat(f);
    } else {
        addFeat(f);
    }

    findActiveFeats();
}

//If the Feat is already part of the array, it is removed
function removeFeat(f) {
    activeFeats.splice(activeFeats.indexOf(f), 1);
}

//If the Feat isn't part of the array, it is added
function addFeat(f) {
    activeFeats.push(f);
}

//Finds which Feast to color
function findActiveFeats() {
    for (let i = 0; i < feats.length; i++) {
        if (activeFeats.includes(feats[i].innerHTML)) {
            colorActiveFeats(i);
        } else {
            colorInactiveFeats(i);
        }
    }
}

//Color the active Feats
function colorActiveFeats(f) {
    feats[f].style.color = "#0a0";
    featConts[f].style.borderColor = "#0a0";
}
//Color the inactive Feats
function colorInactiveFeats(f) {
    feats[f].style.color = "whitesmoke";
    featConts[f].style.borderColor = "#555";

}
