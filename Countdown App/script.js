// Set target date (January 1, 2026, at midnight)
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

// Update countdown every second
const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    // Stop the countdown when the target date is reached
    if (timeLeft < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "<h2>Happy New Year 2026!</h2>";
    }
}, 1000);
