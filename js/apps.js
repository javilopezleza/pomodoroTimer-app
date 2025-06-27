window.addEventListener("load", () => {

    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    const workInput = document.getElementById("work");
    const cycleDisplay = document.getElementById("cycleDisplay");


    const workEndSound = new Audio("assets/sounds/work_end.mp3");
    const breakEndSound = new Audio("assets/sounds/break_end.mp3");

    let timer;
    let isPaused = true;
    let isWorkTime = true;
    let timeLeft = parseFloat(workInput.value) * 60;
    let workSessionCount = 0;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (Math.floor(timeLeft) % 60).toString().padStart(2, '0');
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;
    }

    function updateCycleDisplay() {
        const currentCycle = workSessionCount % 4;
        cycleDisplay.textContent = `Ciclo: ${currentCycle} / 4`;
    }


    function startTimer() {
        if (timer) return;

        timer = setInterval(() => {
            if (!isPaused) {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timer);
                    timer = null;

                    if (isWorkTime) {
                        workEndSound.play();
                        workSessionCount++;
                        updateCycleDisplay();
                        isWorkTime = false;

                        if (workSessionCount % 4 === 0) {
                            timeLeft = 30 * 60;
                        } else {
                            const workMinutes = parseFloat(workInput.value);
                            const breakMinutes = Math.floor((workMinutes / 25) * 5);
                            timeLeft = breakMinutes * 60;
                        }
                    } else {
                        breakEndSound.play();
                        isWorkTime = true;
                        timeLeft = parseFloat(workInput.value) * 60;
                    }

                    updateDisplay();
                    startTimer();
                }
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(timer);
        timer = null;
        isPaused = true;
        isWorkTime = true;
        workSessionCount = 0;
        timeLeft = parseFloat(workInput.value) * 60;
        updateDisplay();
        updateCycleDisplay();

        const startIcon = startButton.querySelector("i");
        startIcon.classList.remove("fa-pause");
        startIcon.classList.add("fa-play");
        startButton.title = "Iniciar";

        const resetIcon = resetButton.querySelector("i");
        resetIcon.classList.remove("fa-rotate-right");
        resetIcon.classList.add("fa-rotate-left");
        resetButton.title = "Reiniciar";
    }

    startButton.addEventListener("click", () => {
        isPaused = !isPaused;

        const icon = startButton.querySelector("i");

        if (!timer) {
            startTimer();
        }

        if (isPaused) {
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
            startButton.title = "Reanudar";
        } else {
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
            startButton.title = "Pausar";
        }
    });

    resetButton.addEventListener("click", () => {
        resetTimer();
    });

    workInput.addEventListener("change", () => {
        if (!isWorkTime) return;
        timeLeft = parseFloat(workInput.value) * 60;
        updateDisplay();
    });

    updateDisplay();
    updateCycleDisplay();
    resetTimer();
});
