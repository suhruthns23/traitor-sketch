/* =========================================================
   TRAITOR SKETCH
   Local single-device pass-the-phone game
   ========================================================= */


/* =========================================================
   GAME DATA
========================================================= */

const COLORS = [
    "#ef4444", // Red
    "#3b82f6", // Blue
    "#22c55e", // Green
    "#eab308", // Yellow
    "#a855f7", // Purple
    "#f97316", // Orange
    "#06b6d4", // Cyan
    "#ec4899", // Pink
    "#14b8a6", // Teal
    "#8b5cf6"  // Violet
];

const CATEGORIES = {

    Animals: {
        icon: "🐾",
        words: [
            "CAT",
            "DOG",
            "ELEPHANT",
            "TIGER",
            "LION",
            "MONKEY",
            "HORSE",
            "RABBIT",
            "GIRAFFE",
            "ZEBRA"
        ]
    },

    Fruits: {
        icon: "🍎",
        words: [
            "APPLE",
            "BANANA",
            "MANGO",
            "ORANGE",
            "GRAPE",
            "WATERMELON",
            "PINEAPPLE",
            "PAPAYA",
            "GUAVA",
            "STRAWBERRY"
        ]
    },

    "Household Items": {
        icon: "🏠",
        words: [
            "CHAIR",
            "TABLE",
            "PILLOW",
            "MIRROR",
            "BROOM",
            "BUCKET",
            "SPOON",
            "PLATE",
            "LAMP",
            "CLOCK"
        ]
    },

    Vegetables: {
        icon: "🥕",
        words: [
            "CARROT",
            "POTATO",
            "ONION",
            "TOMATO",
            "CABBAGE",
            "SPINACH",
            "BEANS",
            "PEAS",
            "PUMPKIN",
            "RADISH"
        ]
    },

    Vehicles: {
        icon: "🚗",
        words: [
            "CAR",
            "BUS",
            "BICYCLE",
            "TRAIN",
            "AIRPLANE",
            "BOAT",
            "MOTORCYCLE",
            "TRUCK",
            "HELICOPTER",
            "SCOOTER"
        ]
    },

    Sports: {
        icon: "⚽",
        words: [
            "CRICKET",
            "FOOTBALL",
            "TENNIS",
            "BASKETBALL",
            "HOCKEY",
            "BADMINTON",
            "VOLLEYBALL",
            "BASEBALL",
            "GOLF",
            "BOXING"
        ]
    }
};


/* =========================================================
   GAME STATE
========================================================= */

let players = [];

let selectedCategory = "";
let secretWord = "";
let traitorIndex = -1;

let identityIndex = 0;

let currentRound = 1;
let currentPlayerIndex = 0;

let currentStrokeStarted = false;
let strokeFinished = false;

let timerValue = 15;
let timerInterval = null;

let canvas;
let ctx;

let isDrawing = false;

let votes = [];

let currentVoteIndex = 0;
let selectedVote = null;

let finalResult = null;


/* =========================================================
   DOM REFERENCES
========================================================= */

const screens = {
    setup: document.getElementById("setupScreen"),
    category: document.getElementById("categoryScreen"),
    identity: document.getElementById("identityScreen"),
    drawing: document.getElementById("drawingScreen"),
    voting: document.getElementById("votingScreen"),
    voteSelection: document.getElementById("voteSelectionScreen"),
    results: document.getElementById("resultsScreen"),
    traitorGuess: document.getElementById("traitorGuessScreen"),
    final: document.getElementById("finalScreen")
};

const playerInputs = document.getElementById("playerInputs");

const addPlayerBtn =
    document.getElementById("addPlayerBtn");

const startGameBtn =
    document.getElementById("startGameBtn");

const categoryGrid =
    document.getElementById("categoryGrid");

const revealBtn =
    document.getElementById("revealBtn");

const hidePassBtn =
    document.getElementById("hidePassBtn");

const identityReveal =
    document.getElementById("identityReveal");

const identityContent =
    document.getElementById("identityContent");

const identityPlayerName =
    document.getElementById("identityPlayerName");

const identityAvatar =
    document.getElementById("identityAvatar");

const drawingPlayerName =
    document.getElementById("drawingPlayerName");

const roundLabel =
    document.getElementById("roundLabel");

const playerColorDot =
    document.getElementById("playerColorDot");

const timerDisplay =
    document.getElementById("timer");

const strokeInfo =
    document.getElementById("strokeInfo");

const canvasMessage =
    document.getElementById("canvasMessage");

const voteAvatar =
    document.getElementById("voteAvatar");

const votePlayerName =
    document.getElementById("votePlayerName");

const startVoteBtn =
    document.getElementById("startVoteBtn");

const votingForName =
    document.getElementById("votingForName");

const voteOptions =
    document.getElementById("voteOptions");

const submitVoteBtn =
    document.getElementById("submitVoteBtn");

const resultsList =
    document.getElementById("resultsList");

const resultSummary =
    document.getElementById("resultSummary");

const continueResultsBtn =
    document.getElementById("continueResultsBtn");

const showGuessInputBtn =
    document.getElementById("showGuessInputBtn");

const guessArea =
    document.getElementById("guessArea");

const guessInput =
    document.getElementById("guessInput");

const submitGuessBtn =
    document.getElementById("submitGuessBtn");

const finalTitle =
    document.getElementById("finalTitle");

const finalMessage =
    document.getElementById("finalMessage");

const finalWord =
    document.getElementById("finalWord");

const finalTraitor =
    document.getElementById("finalTraitor");

const finalIcon =
    document.getElementById("finalIcon");

const newGameBtn =
    document.getElementById("newGameBtn");


/* =========================================================
   SCREEN MANAGEMENT
========================================================= */

function showScreen(screenName) {

    Object.values(screens).forEach(screen => {
        screen.classList.remove("active");
    });

    screens[screenName].classList.add("active");

    window.scrollTo(0, 0);
}


/* =========================================================
   UTILITY
========================================================= */

function randomItem(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}

function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] =
            [copy[j], copy[i]];
    }

    return copy;
}


/* =========================================================
   PLAYER SETUP
========================================================= */

function createPlayerInput(name = "") {

    const index =
        playerInputs.children.length;

    const row =
        document.createElement("div");

    row.className = "player-input";

    row.innerHTML = `
        <div
            class="player-number"
            style="
                background:${COLORS[index]};
                color:white;
            ">
            ${index + 1}
        </div>

        <input
            type="text"
            maxlength="20"
            placeholder="Player ${index + 1}"
            value="${name}">
    `;

    playerInputs.appendChild(row);

    updatePlayerControls();
}


function updatePlayerControls() {

    const count =
        playerInputs.children.length;

    addPlayerBtn.style.display =
        count >= 10
            ? "none"
            : "block";

    startGameBtn.disabled =
        count < 3;
}


/* Initial players */

createPlayerInput("Player 1");
createPlayerInput("Player 2");
createPlayerInput("Player 3");


addPlayerBtn.addEventListener(
    "click",
    () => {

        if (playerInputs.children.length < 10) {
            createPlayerInput();
        }

    }
);


/* =========================================================
   START GAME
========================================================= */

startGameBtn.addEventListener(
    "click",
    startGame
);


function startGame() {

    players = [];

    const inputs =
        playerInputs.querySelectorAll("input");

    inputs.forEach((input, index) => {

        const name =
            input.value.trim() ||
            `Player ${index + 1}`;

        players.push({
            name,
            color: COLORS[index],
            votes: 0
        });

    });

    traitorIndex =
        Math.floor(
            Math.random() * players.length
        );

    votes =
        new Array(players.length).fill(null);

    identityIndex = 0;

    renderCategories();

    showScreen("category");
}


/* =========================================================
   CATEGORY SELECTION
========================================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";

    const categories =
        shuffle(Object.keys(CATEGORIES));

    categories.forEach(category => {

        const button =
            document.createElement("button");

        button.className = "category-btn";

        button.innerHTML = `
            <span>${CATEGORIES[category].icon}</span>
            ${category}
        `;

        button.addEventListener(
            "click",
            () => selectCategory(category)
        );

        categoryGrid.appendChild(button);

    });
}


function selectCategory(category) {

    selectedCategory = category;

    secretWord =
        randomItem(
            CATEGORIES[category].words
        );

    identityIndex = 0;

    setupIdentityScreen();

    showScreen("identity");
}


/* =========================================================
   IDENTITY REVEAL
========================================================= */

function setupIdentityScreen() {

    const player =
        players[identityIndex];

    identityPlayerName.textContent =
        player.name;

    identityAvatar.textContent =
        identityIndex + 1;

    identityAvatar.style.background =
        player.color;

    revealBtn.style.display =
        "block";

    identityReveal.classList.add("hidden");

    identityContent.innerHTML = "";
}


revealBtn.addEventListener(
    "click",
    revealIdentity
);


function revealIdentity() {

    const isTraitor =
        identityIndex === traitorIndex;

    revealBtn.style.display =
        "none";

    identityReveal.classList.remove(
        "hidden"
    );

    if (isTraitor) {

        identityContent.innerHTML = `
            <div class="traitor-reveal">

                <strong>
                    YOU ARE THE TRAITOR!
                </strong>

                <p>
                    Topic:
                    <b>${selectedCategory}</b>
                </p>

                <p class="muted">
                    You do not know the secret word.
                    Study the drawing carefully.
                </p>

            </div>
        `;

    } else {

        identityContent.innerHTML = `
            <div class="real-artist">

                <p>
                    Your secret word is:
                </p>

                <span class="secret-word">
                    ${secretWord}
                </span>

                <p class="muted">
                    Draw carefully without making
                    the word too obvious.
                </p>

            </div>
        `;

    }
}


hidePassBtn.addEventListener(
    "click",
    nextIdentityPlayer
);


function nextIdentityPlayer() {

    identityIndex++;

    if (identityIndex >= players.length) {

        startDrawingPhase();

    } else {

        setupIdentityScreen();

    }
}


/* =========================================================
   CANVAS INITIALIZATION
========================================================= */

canvas =
    document.getElementById(
        "drawingCanvas"
    );

ctx =
    canvas.getContext("2d");


function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    const oldCanvas =
        document.createElement("canvas");

    oldCanvas.width =
        canvas.width;

    oldCanvas.height =
        canvas.height;

    const oldCtx =
        oldCanvas.getContext("2d");

    if (canvas.width > 0) {

        oldCtx.drawImage(
            canvas,
            0,
            0
        );

    }

    const ratio =
        window.devicePixelRatio || 1;

    canvas.width =
        rect.width * ratio;

    canvas.height =
        rect.height * ratio;

    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 7;

    if (
        oldCanvas.width > 0 &&
        oldCanvas.height > 0
    ) {

        ctx.drawImage(
            oldCanvas,
            0,
            0,
            oldCanvas.width,
            oldCanvas.height,
            0,
            0,
            rect.width,
            rect.height
        );

    }
}


window.addEventListener(
    "resize",
    () => {

        if (
            screens.drawing.classList.contains(
                "active"
            )
        ) {
            resizeCanvas();
        }

    }
);


/* =========================================================
   DRAWING PHASE
========================================================= */

function startDrawingPhase() {

    currentRound = 1;
    currentPlayerIndex = 0;

    showScreen("drawing");

    setTimeout(() => {

        resizeCanvas();

        clearCanvas();

        startPlayerTurn();

    }, 100);
}


function clearCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    ctx.save();

    ctx.setTransform(1, 0, 0, 1, 0, 0);

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.restore();

    ctx.fillStyle = "#ffffff";

    ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
    );

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
}


function startPlayerTurn() {

    clearTimer();

    isDrawing = false;
    currentStrokeStarted = false;
    strokeFinished = false;

    const player =
        players[currentPlayerIndex];

    drawingPlayerName.textContent =
        player.name;

    drawingPlayerName.style.color =
        player.color;

    playerColorDot.style.background =
        player.color;

    roundLabel.textContent =
        `ROUND ${currentRound}`;

    strokeInfo.textContent =
        `Stroke ${currentRound} of 2`;

    canvasMessage.classList.remove(
        "hidden"
    );

    timerValue = 15;

    timerDisplay.textContent =
        timerValue;

    startTimer();
}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    clearTimer();

    timerInterval =
        setInterval(() => {

            timerValue--;

            timerDisplay.textContent =
                timerValue;

            if (timerValue <= 0) {

                clearTimer();

                endPlayerTurn();

            }

        }, 1000);
}


function clearTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;
    }
}


/* =========================================================
   CANVAS DRAWING
========================================================= */

function getPointerPosition(event) {

    const rect =
        canvas.getBoundingClientRect();

    return {
        x:
            event.clientX - rect.left,

        y:
            event.clientY - rect.top
    };
}


canvas.addEventListener(
    "pointerdown",
    event => {

        if (
            strokeFinished ||
            isDrawing
        ) {
            return;
        }

        isDrawing = true;
        currentStrokeStarted = true;

        canvas.setPointerCapture(
            event.pointerId
        );

        const pos =
            getPointerPosition(event);

        ctx.beginPath();

        ctx.moveTo(
            pos.x,
            pos.y
        );

        ctx.strokeStyle =
            players[currentPlayerIndex].color;

        ctx.lineWidth = 7;

        canvasMessage.classList.add(
            "hidden"
        );

    }
);


canvas.addEventListener(
    "pointermove",
    event => {

        if (!isDrawing) {
            return;
        }

        const pos =
            getPointerPosition(event);

        ctx.lineTo(
            pos.x,
            pos.y
        );

        ctx.stroke();

    }
);


canvas.addEventListener(
    "pointerup",
    event => {

        if (!isDrawing) {
            return;
        }

        isDrawing = false;

        strokeFinished = true;

        try {
            canvas.releasePointerCapture(
                event.pointerId
            );
        } catch (_) {}

        endPlayerTurn();

    }
);


canvas.addEventListener(
    "pointercancel",
    () => {

        if (isDrawing) {

            isDrawing = false;

            strokeFinished = true;

            endPlayerTurn();

        }

    }
);


/* =========================================================
   END DRAWING TURN
========================================================= */

function endPlayerTurn() {

    clearTimer();

    isDrawing = false;

    setTimeout(
        advanceDrawingTurn,
        350
    );
}


function advanceDrawingTurn() {

    currentPlayerIndex++;

    if (
        currentPlayerIndex >=
        players.length
    ) {

        currentPlayerIndex = 0;

        if (currentRound === 1) {

            currentRound = 2;

            setTimeout(
                startPlayerTurn,
                400
            );

        } else {

            startVotingPhase();

        }

        return;
    }

    startPlayerTurn();
}


/* =========================================================
   VOTING PHASE
========================================================= */

function startVotingPhase() {

    clearTimer();

    currentVoteIndex = 0;

    votes =
        new Array(players.length).fill(null);

    setupVotePassScreen();

    showScreen("voting");
}


function setupVotePassScreen() {

    const player =
        players[currentVoteIndex];

    voteAvatar.textContent =
        currentVoteIndex + 1;

    voteAvatar.style.background =
        player.color;

    votePlayerName.textContent =
        player.name;

    startVoteBtn.textContent =
        "Vote";
}


startVoteBtn.addEventListener(
    "click",
    openVoteSelection
);


function openVoteSelection() {

    selectedVote = null;

    submitVoteBtn.disabled = true;

    votingForName.textContent =
        `${players[currentVoteIndex].name}'s Vote`;

    renderVoteOptions();

    showScreen("voteSelection");
}


/* =========================================================
   VOTE OPTIONS
========================================================= */

function renderVoteOptions() {

    voteOptions.innerHTML = "";

    players.forEach(
        (player, index) => {

            if (
                index === currentVoteIndex
            ) {
                return;
            }

            const button =
                document.createElement("button");

            button.className =
                "vote-option";

            button.innerHTML = `
                <div
                    class="vote-color"
                    style="
                        background:${player.color};
                    ">
                </div>

                <span class="vote-name">
                    ${player.name}
                </span>
            `;

            button.addEventListener(
                "click",
                () => {

                    selectedVote = index;

                    document
                        .querySelectorAll(
                            ".vote-option"
                        )
                        .forEach(
                            option =>
                                option.classList.remove(
                                    "selected"
                                )
                        );

                    button.classList.add(
                        "selected"
                    );

                    submitVoteBtn.disabled =
                        false;

                }
            );

            voteOptions.appendChild(
                button
            );

        }
    );
}


/* =========================================================
   SUBMIT VOTE
========================================================= */

submitVoteBtn.addEventListener(
    "click",
    submitVote
);


function submitVote() {

    if (selectedVote === null) {
        return;
    }

    votes[currentVoteIndex] =
        selectedVote;

    players[selectedVote].votes++;

    currentVoteIndex++;

    if (
        currentVoteIndex >=
        players.length
    ) {

        calculateResults();

    } else {

        setupVotePassScreen();

        showScreen("voting");

    }
}


/* =========================================================
   RESULTS
========================================================= */

function calculateResults() {

    renderResults();

    showScreen("results");
}


function renderResults() {

    resultsList.innerHTML = "";

    const sortedPlayers =
        players
            .map((player, index) => ({
                ...player,
                index
            }))
            .sort(
                (a, b) =>
                    b.votes - a.votes
            );

    sortedPlayers.forEach(
        (player, position) => {

            const row =
                document.createElement("div");

            row.className =
                "result-row";

            row.innerHTML = `
                <div class="result-rank">
                    ${position + 1}
                </div>

                <div
                    class="vote-color"
                    style="
                        background:${player.color};
                    ">
                </div>

                <div class="result-player">
                    ${player.name}
                </div>

                <div class="vote-count">
                    ${player.votes}
                </div>
            `;

            resultsList.appendChild(row);

        }
    );


    const highestVotes =
        Math.max(
            ...players.map(
                player => player.votes
            )
        );

    const majority =
        players.length / 2;

    const topPlayers =
        players.filter(
            player =>
                player.votes ===
                highestVotes
        );

    const hasMajority =
        highestVotes > majority;

    const traitorHasMajority =
        hasMajority &&
        topPlayers.length === 1 &&
        players[traitorIndex].votes ===
            highestVotes;


    if (traitorHasMajority) {

        finalResult =
            "traitor-caught";

        resultSummary.innerHTML = `
            <strong>
                The group found the Traitor!
            </strong>

            <p class="muted">
                But the Traitor gets one final chance
                to guess the secret word.
            </p>
        `;

    } else {

        finalResult =
            "traitor-wins";

        if (!hasMajority) {

            resultSummary.innerHTML = `
                <strong>
                    No majority vote.
                </strong>

                <p class="muted">
                    The Traitor escapes!
                </p>
            `;

        } else {

            resultSummary.innerHTML = `
                <strong>
                    The group voted for the wrong player.
                </strong>

                <p class="muted">
                    The Traitor escapes!
                </p>
            `;

        }

    }

}


/* =========================================================
   RESULTS CONTINUE
========================================================= */

continueResultsBtn.addEventListener(
    "click",
    () => {

        if (
            finalResult ===
            "traitor-caught"
        ) {

            showScreen("traitorGuess");

        } else {

            showFinalScreen(
                false,
                "The group failed to catch the Traitor."
            );

        }

    }
);


/* =========================================================
   TRAITOR GUESS
========================================================= */

showGuessInputBtn.addEventListener(
    "click",
    () => {

        showGuessInputBtn.style.display =
            "none";

        guessArea.classList.remove(
            "hidden"
        );

        guessInput.focus();

    }
);


submitGuessBtn.addEventListener(
    "click",
    submitTraitorGuess
);


guessInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            submitTraitorGuess();
        }

    }
);


function submitTraitorGuess() {

    const guess =
        guessInput.value
            .trim()
            .toUpperCase();

    if (!guess) {
        return;
    }

    const correct =
        guess ===
        secretWord.toUpperCase();

    if (correct) {

        showFinalScreen(
            false,
            `The Traitor guessed the secret word correctly: ${secretWord}.`
        );

    } else {

        showFinalScreen(
            true,
            `The Traitor guessed "${guess}", but the secret word was ${secretWord}.`
        );

    }

}


/* =========================================================
   FINAL SCREEN
========================================================= */

function showFinalScreen(
    artistsWin,
    message
) {

    finalWord.textContent =
        secretWord;

    finalTraitor.textContent =
        players[traitorIndex].name;

    finalMessage.textContent =
        message;

    if (artistsWin) {

        finalTitle.textContent =
            "Artists Win!";

        finalIcon.textContent =
            "🎨";

    } else {

        finalTitle.textContent =
            "Traitor Wins!";

        finalIcon.textContent =
            "🕵️";

    }

    showScreen("final");
}


/* =========================================================
   NEW GAME
========================================================= */

newGameBtn.addEventListener(
    "click",
    () => {

        players = [];

        selectedCategory = "";
        secretWord = "";
        traitorIndex = -1;

        identityIndex = 0;

        currentRound = 1;
        currentPlayerIndex = 0;

        currentVoteIndex = 0;

        votes = [];

        finalResult = null;

        clearTimer();

        playerInputs.innerHTML = "";

        createPlayerInput("Player 1");
        createPlayerInput("Player 2");
        createPlayerInput("Player 3");

        showScreen("setup");

    }
);


/* =========================================================
   PREVENT ACCIDENTAL PAGE SCROLL WHILE DRAWING
========================================================= */

document.addEventListener(
    "touchmove",
    event => {

        if (
            screens.drawing.classList.contains(
                "active"
            )
        ) {

            if (
                event.target === canvas
            ) {
                event.preventDefault();
            }

        }

    },
    { passive: false }
);
