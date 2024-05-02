const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("FocusTime", focusTimeInput.value);
    localStorage.setItem("BreakTime", breakTimeInput.value);
});

document.querySelector(".Reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;

});

pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        bell.pause();
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout("decremenT()", 60);
        pauseBtn.textContent = "Pause";
        pauseBtn.classList.remove("Resume");
    } else {
        clearTimeout(initial);
        bell.play();
        pauseBtn.textContent = "Resume";
        pauseBtn.classList.add("Resume");
        paused = true;

    }
});