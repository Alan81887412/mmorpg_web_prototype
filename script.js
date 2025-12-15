const players = [
    { realId: "A123", id: "player1" },
    { realId: "B456", id: "player2" },
    { realId: "C789", id: "player3" }
];

let team = [];

const floor = {
    id: 1,
    requiredPlayers: 3,
    clearedBy: null
};

const playerList = document.getElementById("playerList");
const teamList = document.getElementById("teamList");
const result = document.getElementById("result");

players.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.id}（實名）`;
    playerList.appendChild(li);
});

function addToTeam() {
    if (team.length >= players.length) return;
    const nextPlayer = players[team.length];
    team.push(nextPlayer.id);
    renderTeam();
}

function attemptClear() {
    if (floor.clearedBy !== null) {
        result.textContent = "❌ 此樓層已被其他攻略團破關";
        return;
    }

    if (team.length < floor.requiredPlayers) {
        result.textContent = "❌ 人數不足，不可能破關";
        return;
    }

    floor.clearedBy = [...team];
    result.textContent = `🎉 樓層已由 ${team.join(", ")} 唯一破關！`;
}

function renderTeam() {
    teamList.innerHTML = "";
    team.forEach(m => {
        const li = document.createElement("li");
        li.textContent = m;
        teamList.appendChild(li);
    });
}
