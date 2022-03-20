"use strict"

let letterChanger;
let cron;
let secondToStart;
let second;
let milesecond;
let totalms;
let roundPaused = true;
let topRanking = []

function start(event) {
    resetGame()
}

function resetGame() {
    if (roundPaused) {
        secondToStart = 3;
        second = 0;
        milesecond = 0;
        totalms = 0;
        displayChanger();
        roundPaused = false;
    }
}

function displayChanger() {
    letterChanger = setInterval(changeLetter, 1000);
}

function changeLetter() {
    if (secondToStart > 0) {
        setSecond(secondToStart);
        secondToStart--;
    } else {
        let letter = letterCreator();
        setLetter(letter);
        clearInterval(letterChanger);
        secondToStart = 3;
        contTiming();
    }
}

function setSecond(secondToStart) {
    document.getElementById('letter').innerText = `${secondToStart}`;
    document.getElementById('letter').style.color = "black";
}

function setLetter(letter) {
    document.getElementById('letter').innerText = `${letter}`;
    document.getElementById('letter').style.color = "red";
}

function letterCreator() {
    let characters = 'abcdefghijklmnopqrstuvwxyz23456789';
    let charactersLength = characters.length;
    let letter = characters.charAt(Math.floor(Math.random() * charactersLength));
    return letter;
}

function myKeyPress(e) {
    var keynum;
    if (window.event) keynum = e.keyCode;
    else if (e.which) keynum = e.which;

    let corretKey = document.getElementById('letter').innerText;

    if (!roundPaused && String.fromCharCode(keynum) === corretKey) {
        clearInterval(cron);
        
        updateRanking();

        roundPaused = true;
    }
}

function updateRanking() {
    let s = (second < 10) ? `0${second}` : second;
    let m = (milesecond < 10) ? `0${milesecond}` : milesecond;

    topRanking.push({
        "name": document.getElementById('name').value,
        "second": s,
        "milesecond": m,
        "totalms": totalms
    })

    let aux = topRanking;

    function compare(a, b) {
        if (a.totalms < b.totalms) {
            return -1;
        }
        if (a.totalms > b.totalms) {
            return 1;
        }
        return 0;
    }

    topRanking = aux.sort(compare);

    if (topRanking.length > 5) {
        topRanking.pop();
    }

    changeDashboard()
}

function changeDashboard() {
    topRanking.forEach(function(player, i) {
        document.getElementById(`top${i + 1}`).innerText = `${i+1}. ${player.name} - ${player.second}:${player.milesecond}`;
    })
}

function contTiming() {
    cron = setInterval(getTiming, 1);
}

function getTiming() {
    milesecond++;
    totalms++;
    if (milesecond === 1000) {
        milesecond = 0;
        second++;
    }
    updateTiming();
}

function updateTiming() {
    let s = (second < 10) ? `0${second}` : second;
    let m = (milesecond < 10) ? `0${milesecond}` : milesecond;
    let playerName = document.getElementById('name').value;
    document.getElementById('timing').innerText = `${playerName} - ${s}:${m}`;
}