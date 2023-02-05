let homeScore = 0;
let guestScore = 0;
let homeScorediv = document.getElementById("home-score");
let guestScorediv = document.getElementById("guest-score");

function incrementByOne(team) {
    if (team === "home") {
        homeScore += 1;
        homeScorediv.textContent = homeScore;
    } else {
        guestScore += 1;
        guestScorediv.textContent = guestScore;
    }
    highlight();
}

function incrementByTwo(team) {
    if (team === "home") {
        homeScore += 2;
        homeScorediv.textContent = homeScore;
    } else {
        guestScore += 2;
        guestScorediv.textContent = guestScore;
    }
    highlight();
}

function incrementByThree(team) {
    if (team === "home") {
        homeScore += 3;
        homeScorediv.textContent = homeScore;
    } else {
        guestScore += 3;
        guestScorediv.textContent = guestScore;
    }
    highlight();
}

function highlight() {
if (homeScore > guestScore){
    homeScorediv.classList.add("highlight");
    guestScorediv.classList.remove("highlight");
} else {
    guestScorediv.classList.add("highlight");
    homeScorediv.classList.remove("highlight");
}
    
}