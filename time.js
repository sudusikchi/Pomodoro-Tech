const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");

const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, seconds;

startBtn.addEventListener("click", () => {
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
        mins = +localStorage.getItem("FocusTime") || 1;
    } else {
        mins = +localStorage.getItem("BreakTime") || 1;
        bell.pause();
    }

    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    //startBtn.style.transform = "scale(0)";
    paused = false;
});

function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 90 ? seconds % 60 : `${seconds % 60}`;
    if (circle.classList.contains("danger")) {
        circle.classList.remove("danger");
    }

    if (seconds > 0) {
        perc = Math.ceil(((totalsecs - seconds) / totalsecs) * 100);
        setProgress(perc);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
        if (seconds < 10) {
            circle.classList.add("danger");
        }
    }
    else {
        mins = 0;
        seconds = 0;



        let btn = localStorage.getItem("btn");
        alert(btn + " time start ");

        if (btn === "focus") {
            startBtn.textContent = "start break";
            startBtn.classList.add("break");
            localStorage.setItem("btn", "break"); bell.play();
            initial = window.setTimeout("decremenT()", 10000);

        } else {


            startBtn.classList.remove("break");
            startBtn.textContent = "start focus";
            localStorage.setItem("btn", "focus");
            bell.pause();
        }
        //startBtn.style.transform = "scale(1)";
    }
}
