// Set the target date and time (March 4, 11:00 AM)
const targetDate = new Date("2024-03-05T11:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    // If the target date has passed, display a message
    document.getElementById("countdown").innerHTML = "Countdown expired!";
    clearInterval(countdownInterval);
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("days").innerHTML = `${days}d`;
    document.getElementById("hours").innerHTML = `${hours}h`;
    document.getElementById("minutes").innerHTML = `${minutes}m`;
    document.getElementById("seconds").innerHTML = `${seconds}s`;
  }
}
