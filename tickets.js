// script.js

// Function to simulate buying tickets
function buyTickets(team) {
  alert(`Buy tickets for ${team} game!`); // Replace with actual ticket purchasing logic
}

// Function to fetch game schedule (placeholder)
function fetchSchedule() {
  // This function would typically fetch schedule data from an API (e.g., ESPN)
  // For simplicity, let's just create a placeholder schedule
  const schedule = [
    { team: "Philadelphia Eagles", date: "2024-04-15", opponent: "New York Giants" },
    { team: "Philadelphia 76ers", date: "2024-04-16", opponent: "Brooklyn Nets" },
    // Add more schedule entries as needed
  ];

  return schedule;
}

// Function to display the schedule as a calendar (placeholder)
function displayCalendar() {
  const calendar = document.getElementById("calendar");
  const schedule = fetchSchedule();

  // Display schedule in the calendar
  schedule.forEach(game => {
    const gameEntry = document.createElement("div");
    gameEntry.textContent = `${game.team} vs ${game.opponent} - ${game.date}`;
    calendar.appendChild(gameEntry);
  });
}

// Call the function to display the calendar when the page loads
window.onload = displayCalendar;
