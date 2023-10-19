let leaderboardData = [];

function addEntry() {
    const nameInput = document.getElementById("racer-name");
    const timeInput = document.getElementById("racer-time");
    const name = nameInput.value.trim();
    const time = parseFloat(timeInput.value);

    if (name && !isNaN(time)) {
        leaderboardData.push({name, time});
        nameInput.value = "";
        timeInput.value = "";
        updateLeaderboard();
    } else {
        alert("Error: Invalid name and time");
    }
}

function updateLeaderboard() {
    leaderboardData.sort((a, b) => a.time - b.time);

    const leaderboardTable = document.getElementById("leaderboard");
    const tbody = leaderboardTable.querySelector("tbody");

    tbody.innerHTML = "";

    leaderboardData.forEach(entry => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const timeCell = document.createElement("td");

        nameCell.textContent = entry.name;
        timeCell.textContent = entry.time.toFixed(2);

        row.appendChild(nameCell);
        row.appendChild(timeCell);
        tbody.appendChild(row);
    });
}

updateLeaderboard();