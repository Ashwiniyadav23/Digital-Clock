const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
    e.target.innerHTML = html.classList.contains("dark") ? "Light mode" : "Dark mode";
});

const updateClock = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;
    const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    timeElement.innerHTML = formattedTime;
    dateElement.innerHTML = formattedDate;
};

// Initialize clock and update every second
updateClock();
setInterval(updateClock, 1000);
