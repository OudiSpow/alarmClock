// var met de naam hour en waarde 0.
var hour = 0;
// var maken met de naam timeHour, dit is voor het HTML element met de ID alarm-time-hour, span, dit toont het uur van het alarm.
var timeHour = document.getElementById("alarm-time-hour");
// var met de naam hourUp, hier zit het HTML element(button) voor het verhogen van het uur van het alarm
var hourUp = document.getElementById("alarm-button-hour-up");
//Event oncklick is toegewezen aan het element hourUp, dit betekent dat een functie wordt uitgevoerd wanneer er op het element wordt geklikt.
hourUp.onclick = function () {
    //met elke klik verhoog het waarde van hour met +1.
    hour += 1;
    //rest naar 0 als het hour 23 overschrijdt.
    if (hour > 23) {
        hour = 0;
    }
    //als het uur minder dan 10, formatteer het als twee cijfers met een "0" voor de echte waarde.
    if (hour < 10) {
        timeHour.innerText = "0" + hour;
    }
    // als er niets van de bovenste condities geldig is, geef de waarde van timeHour door.
    else {
        timeHour.innerText = hour;
    }

}
// var met de naam hourDown, hier zit het HTML element(button) voor het verlagen van het uur van het alarm
var hourDown = document.getElementById("alarm-button-hour-down");
//Event oncklick is toegewezen aan het element hourDown, dit betekent dat een functie wordt uitgevoerd wanneer er op het element wordt geklikt.
hourDown.onclick = function () {
    //met elke klik velaag het waarde van hour met -1.
    hour -= 1;
    //rest naar 23 als het hour onder 0 gaat.
    if (hour < 0) {
        hour = 23;
    }
    //als het uur minder dan 10, formatteer het als twee cijfers met een "0" voor de echte waarde.
    if (hour < 10) {
        timeHour.innerText = "0" + hour;
    }
    // als er niets van de bovenste condities geldig is, geef de waarde van timeHour door.
    else {
        timeHour.innerText = hour;
    }

}
// var met de naam minute en waarde 0.
var minute = 0;
// var maken met de naam timeMinute, dit is voor het HTML element met de ID alarm-time-minute, span, dit toont de minute van het alarm.
var timeMinute = document.getElementById("alarm-time-minute");
// var met de naam minuteUp, hier zit het HTML element(button) voor het verhogen van de minute van het alarm
var minuteUp = document.getElementById("alarm-button-minute-up");
//Event oncklick is toegewezen aan het element minuteUp, dit betekent dat een functie wordt uitgevoerd wanneer er op het element wordt geklikt.
minuteUp.onclick = function () {
    //met elke klik verhoog het waarde van minute met +1.
    minute += 1;
    //rest naar 0 als de minute 59 overschrijdt.
    if (minute > 59) {
        minute = 0;
    }
    //als de minute minder dan 10, formatteer het als twee cijfers met een "0" voor de echte waarde.
    if (minute < 10) {
        timeMinute.innerText = "0" + minute
    }
    // als er niets van de bovenste condities geldig is, geef de waarde van timeMinute door.
    else {
        timeMinute.innerText = minute;
    }

}

// var met de naam minuteDown, hier zit het HTML element(button) voor het verlagen van de minuut van het alarm
var minuteDown = document.getElementById("alarm-button-minute-down");
//Event oncklick is toegewezen aan het element minuteDown, dit betekent dat een functie wordt uitgevoerd wanneer er op het element wordt geklikt.
minuteDown.onclick = function () {
    //met elke klik velaag het waarde van minute met -1.
    minute -= 1;
    //rest naar 59 als het hour onder 0 gaat.
    if (minute < 0) {
        minute = 59;
    }
    //als de minuut minder dan 10, formatteer het als twee cijfers met een "0" voor de echte waarde.
    if (minute < 10) {
        timeMinute.innerText = "0" + minute;
    }
    // als er niets van de bovenste condities geldig is, geef de waarde van timeMinute door.
    else {
        timeMinute.innerText = minute;
    }

}
// Variabele maken het HTML element met ID alarm-toggle voor de checkbox van het alarm
var toggle = document.getElementById("alarm-toggle");
//Eigenschap (checked) wordt ingesteld op (false), dit betekent dat wanneer de pagina geladen wordt de checkbox wordt niet automatisch aangevinkt.
toggle.checked = false;
// Variabele maken het HTML element met ID dialogue, dit is een venster.
var dialogue = document.getElementById("dialogue");
// Audio-element toevoegen voor het alarmgeluid
var audio = new Audio("./sounds/alarm-beep.wav");
//Event onchange is toegewezen aan het element alarm-toggle, dit betekent dat een functie wordt uitgevoerd als het waarde van dit element is varanderd.
toggle.onchange = function () {
    //Als het waarde true is, de checkbox is gevinkt, voer de volgende uit.
    if (toggle.checked === true) {
        //Tonen van de dialoogvenster met de alarminstelling.
        dialogue.innerText = " Je alarm is gezet om " + " " + hour + " uur en " + minute + " minuten";
        //Toevoegen van de CSS class.
        toggle.classList.add("alarm-toggle-checked");
        //Display flex: tonen
        dialogue.style.display = "flex";
        //Dialogvenster na twee seconden verbergen.
        var getTimeOut = setTimeout(function(){
            dialogue.style.display = "none";
        }, 2000)
        //setInterval maakt een interval die elke een minuut wordt herhaald, tijden dit interval maakt een functie die nieuwe datum en tijd initialiseert, dan hij controleert of de alram tijd overeenkomt met de huidg tijd, als het zo is, de audio wordt afgespeld.
        var timer = setInterval(function () {
            var date = new Date();
            var dateHour = date.getHours();
            var dateMinute = date.getMinutes();

            if (hour === dateHour && minute === dateMinute) {
                audio.play();

            }
        }, 60000)
    } else {
        //als de bovonte condite niet zo is, de functie van de var timer wordt niet uitgevoerd
        toggle.classList.remove("alarm-toggle-checked");
        clearInterval(timer);
    }
}





