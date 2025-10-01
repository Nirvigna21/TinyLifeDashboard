// Load saved data on page load
window.onload = function() {
    if(localStorage.getItem('water')) document.getElementById('waterDisplay').innerText = localStorage.getItem('water') + " glasses";
    if(localStorage.getItem('steps')) document.getElementById('stepsDisplay').innerText = localStorage.getItem('steps') + " steps";
    if(localStorage.getItem('mood')) document.getElementById('moodDisplay').innerText = localStorage.getItem('mood');
    if(localStorage.getItem('note')) document.getElementById('noteDisplay').innerText = localStorage.getItem('note');
}

// Functions to save data
function saveWater() {
    let water = document.getElementById('waterInput').value;
    localStorage.setItem('water', water);
    document.getElementById('waterDisplay').innerText = water + " glasses";
}

function saveSteps() {
    let steps = document.getElementById('stepsInput').value;
    localStorage.setItem('steps', steps);
    document.getElementById('stepsDisplay').innerText = steps + " steps";
}

function saveMood(mood) {
    localStorage.setItem('mood', mood);
    document.getElementById('moodDisplay').innerText = mood;
}

function saveNote() {
    let note = document.getElementById('noteInput').value;
    localStorage.setItem('note', note);
    document.getElementById('noteDisplay').innerText = note;
}
