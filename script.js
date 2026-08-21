/* =========================================================
   TRAITOR SKETCH
   FINAL VERSION

   3-10 PLAYERS
   3 ROUNDS
   20 SECONDS / TURN
   NO ONE-STROKE LIMIT
   DONE & PASS
   3 SECOND PASS BUFFER
   TOPIC HINT FOR TRAITOR
========================================================= */


/* =========================================================
   PLAYER COLORS
========================================================= */

const COLORS = [
    "#ef4444",
    "#3b82f6",
    "#22c55e",
    "#eab308",
    "#a855f7",
    "#f97316",
    "#06b6d4",
    "#ec4899",
    "#14b8a6",
    "#8b5cf6"
];


/* =========================================================
   WORD DATABASE
   Compact comma-separated format
========================================================= */

const WORDS = {

    Animals: [
        "Lion","Tiger","Elephant","Giraffe","Zebra","Horse","Cow","Goat","Sheep","Pig",
        "Dog","Cat","Rabbit","Mouse","Rat","Monkey","Gorilla","Panda","Koala","Kangaroo",
        "Bear","Polar Bear","Fox","Wolf","Deer","Buffalo","Camel","Donkey","Leopard","Cheetah",
        "Jaguar","Hippopotamus","Rhinoceros","Crocodile","Alligator","Snake","Lizard","Frog","Turtle","Tortoise",
        "Penguin","Parrot","Eagle","Owl","Crow","Pigeon","Peacock","Swan","Flamingo","Ostrich",
        "Bat","Squirrel","Hedgehog","Porcupine","Beaver","Otter","Dolphin","Whale","Shark","Octopus",
        "Crab","Lobster","Jellyfish","Seahorse","Starfish","Snail","Butterfly","Bee","Ant","Spider",
        "Mosquito","Dragonfly","Beetle","Chicken","Rooster","Duck","Goose","Turkey","Seal","Walrus",
        "Hyena","Moose","Reindeer","Llama","Alpaca","Meerkat","Chameleon","Iguana","Dinosaur","Scorpion"
    ],

    Fruits: [
        "Apple","Banana","Mango","Orange","Grapes","Watermelon","Pineapple","Papaya","Guava","Strawberry",
        "Blueberry","Raspberry","Blackberry","Cherry","Peach","Pear","Plum","Kiwi","Lemon","Lime",
        "Coconut","Avocado","Pomegranate","Fig","Date","Apricot","Melon","Lychee","Jackfruit","Dragon Fruit",
        "Passion Fruit","Star Fruit","Grapefruit","Tangerine","Cranberry","Raisin","Olive","Tamarind","Custard Apple","Sapota",
        "Jamun","Mulberry","Gooseberry","Persimmon","Nectarine","Quince","Durian","Rambutan","Longan","Musk Melon"
    ],

    Vegetables: [
        "Carrot","Potato","Onion","Tomato","Cabbage","Spinach","Beans","Peas","Pumpkin","Radish",
        "Beetroot","Broccoli","Cauliflower","Cucumber","Brinjal","Ladyfinger","Capsicum","Chilli","Corn","Sweet Potato",
        "Ginger","Garlic","Turnip","Lettuce","Celery","Mushroom","Bottle Gourd","Bitter Gourd","Ridge Gourd","Drumstick",
        "Zucchini","Artichoke","Asparagus","Leek","Yam","Parsnip","Kale","Mint","Coriander","Curry Leaves"
    ],

    Food: [
        "Pizza","Burger","Sandwich","Hot Dog","Cake","Ice Cream","Cupcake","Donut","Cookie","Biscuit",
        "Chocolate","Candy","Lollipop","Popcorn","Noodles","Pasta","Spaghetti","Lasagna","Fries","Pancake",
        "Waffle","Omelette","Toast","Bread","Cheese","Butter","Yogurt","Rice","Dosa","Idli",
        "Vada","Samosa","Paratha","Roti","Chapati","Biryani","Curry","Soup","Salad","Sushi",
        "Taco","Burrito","Nachos","Pretzel","Muffin","Pie","Pudding","Jelly","Honey","Jam",
        "Cereal","French Toast","Pasta Bowl","Fruit Salad","Donut","Pancakes","Fried Rice","Sandwich","Pav Bhaji","Noodles"
    ],

    Drinks: [
        "Water","Milk","Tea","Coffee","Juice","Lemonade","Milkshake","Smoothie","Hot Chocolate","Coconut Water",
        "Soft Drink","Water Bottle","Tea Cup","Coffee Cup","Mocktail","Fruit Juice","Orange Juice","Apple Juice","Mango Juice","Milkshake",
        "Coconut Drink","Lassi","Buttermilk","Soup","Energy Drink","Drink Can","Thermos","Flask","Straw","Cup"
    ],

    Vehicles: [
        "Car","Bus","Bicycle","Motorcycle","Scooter","Train","Truck","Van","Taxi","Ambulance",
        "Fire Truck","Police Car","Tractor","Jeep","Race Car","Sports Car","Airplane","Helicopter","Rocket","Hot Air Balloon",
        "Boat","Ship","Sailboat","Submarine","Canoe","Kayak","Yacht","Rickshaw","Auto Rickshaw","Metro",
        "Tram","Bullet Train","School Bus","Ferry","Forklift","Dump Truck","Tow Truck","Cement Truck","Race Bike","Skateboard"
    ],

    Household: [
        "Chair","Table","Sofa","Bed","Pillow","Blanket","Mattress","Mirror","Broom","Mop",
        "Bucket","Dustbin","Lamp","Clock","Fan","Television","Remote","Curtain","Door","Window",
        "Key","Lock","Hanger","Iron","Ironing Board","Vacuum Cleaner","Washing Machine","Refrigerator","Oven","Microwave",
        "Toaster","Blender","Mixer","Kettle","Pan","Pot","Pressure Cooker","Bottle","Jar","Box",
        "Basket","Vase","Candle","Plant Pot","Bookshelf","Drawer","Carpet","Rug","Doormat","Umbrella",
        "Raincoat","Towel","Toothbrush","Toothpaste","Soap","Shampoo","Comb","Hairbrush","Perfume","Wallet",
        "Purse","Backpack","Suitcase","Mug","Plate","Bowl","Spoon","Fork","Knife","Napkin"
    ],

    School: [
        "Book","Notebook","Pencil","Pen","Eraser","Ruler","Sharpener","Marker","Crayon","Paintbrush",
        "Paint","Paper","Envelope","Stapler","Paper Clip","Scissors","Glue","Tape","Calculator","Desk",
        "Blackboard","Whiteboard","Chalk","School Bag","School Bus","Computer","Laptop","Keyboard","Mouse","Printer",
        "Monitor","Headphones","Microphone","Folder","File","Calendar","Diary","Sticker","Badge","ID Card",
        "Certificate","Trophy","Compass","Geometry Box","Water Bottle","Lunch Box","School Bell","Uniform","Report Card","Globe"
    ],

    Electronics: [
        "Phone","Smartphone","Tablet","Laptop","Computer","Camera","Television","Radio","Speaker","Headphones",
        "Earphones","Watch","Smartwatch","Remote Control","Game Controller","Keyboard","Mouse","Printer","Projector","Drone",
        "Router","Charger","Battery","USB Drive","Memory Card","Power Bank","Light Bulb","Flashlight","Alarm Clock","Calculator",
        "Microphone","Monitor","Camera Lens","Tripod","Cable","Plug","Socket","Game Console","TV Remote","Smart TV"
    ],

    Sports: [
        "Cricket","Football","Tennis","Basketball","Hockey","Badminton","Volleyball","Baseball","Golf","Boxing",
        "Wrestling","Swimming","Running","Cycling","Skateboarding","Surfing","Skiing","Archery","Bowling","Table Tennis",
        "Carrom","Chess","Kabaddi","Kho Kho","Rugby","Cricket Bat","Cricket Ball","Tennis Racket","Badminton Racket","Golf Club",
        "Baseball Bat","Boxing Glove","Medal","Trophy","Whistle","Sports Shoes","Helmet","Stopwatch","Football Goal","Basketball Hoop",
        "Swimming Pool","Golf Hole","Bowling Pin","Bowling Ball","Hockey Stick","Skateboard","Surfboard","Bicycle"
    ],

    Music: [
        "Guitar","Piano","Drum","Violin","Flute","Trumpet","Bell","Microphone","Speaker","Headphones","Drumstick","Radio",
        "Keyboard","Tabla","Music Stand"
    ],

    Clothing: [
        "Shirt","T-Shirt","Pants","Jeans","Shorts","Skirt","Dress","Jacket","Coat","Sweater",
        "Hoodie","Tie","Bow Tie","Belt","Socks","Shoes","Sandals","Boots","Slippers","Hat",
        "Cap","Helmet","Scarf","Gloves","Sunglasses","Glasses","Watch","Ring","Necklace","Bracelet",
        "Earrings","Crown","Mask","Raincoat","Swimsuit","School Uniform","Suit","Tie","Backpack","Handbag"
    ],

    Places: [
        "House","School","Hospital","Bank","Hotel","Restaurant","Cafe","Library","Museum","Cinema",
        "Theater","Stadium","Park","Playground","Zoo","Aquarium","Airport","Railway Station","Bus Stop","Train Station",
        "Fire Station","Police Station","Post Office","Supermarket","Shop","Bakery","Temple","Church","Mosque","Castle",
        "Palace","Lighthouse","Bridge","Tower","Skyscraper","Factory","Farm","Garage","Pet Shop","Bookstore",
        "Beach","Mountain","Camping Site","Amusement Park","Water Park","Gym","Office","College","University","Market"
    ],

    Nature: [
        "Tree","Flower","Grass","Bush","Forest","Mountain","Hill","Volcano","River","Lake",
        "Waterfall","Ocean","Beach","Island","Cave","Desert","Palm Tree","Cactus","Mushroom","Sun",
        "Moon","Star","Cloud","Rain","Rainbow","Snow","Lightning","Tornado","Wind","Wave",
        "Leaf","Pine Tree","Sunflower","Rose","Lotus","Daisy","Tulip","Vine","Seashell","Snowflake",
        "Raindrop","Thunder","River","Pond","Valley","Cliff","Rock","Stone","Garden","Water Lily"
    ],

    Space: [
        "Sun","Moon","Earth","Mars","Jupiter","Saturn","Planet","Star","Astronaut","Alien",
        "Rocket","Spaceship","UFO","Satellite","Telescope","Comet","Meteor","Asteroid","Galaxy","Moon Landing",
        "Space Station","Black Hole","Space Suit","Planet Ring","Moon Rover","Alien Ship","Solar System","Earth Globe","Astronaut Helmet","Space Helmet"
    ],

    Tools: [
        "Hammer","Screwdriver","Wrench","Pliers","Saw","Drill","Axe","Shovel","Rake","Hoe",
        "Ladder","Rope","Chain","Nail","Screw","Bolt","Toolbox","Measuring Tape","Flashlight","Work Gloves",
        "Wheelbarrow","Paint Roller","Paintbrush","Bucket","Hammer and Nail","Spanner","Crowbar","Chisel","Clamp","Drill Machine"
    ],

    People: [
        "Teacher","Student","Doctor","Nurse","Police Officer","Firefighter","Chef","Farmer","Pilot","Driver",
        "Soldier","Astronaut","Artist","Singer","Dancer","Actor","Photographer","Engineer","Scientist","Builder",
        "Carpenter","Plumber","Electrician","Barber","Baker","Fisherman","Sailor","Mailman","Judge","Detective",
        "Magician","Clown","Princess","King","Queen","Pirate","Ninja","Superhero","Wizard","Witch"
    ],

    Toys: [
        "Ball","Teddy Bear","Doll","Toy Car","Yo-Yo","Kite","Robot","Puzzle","Dice","Domino",
        "Chess Piece","Carrom Board","Playing Cards","Spinning Top","Toy Train","Bubbles","Balloon","Marble","Slime","Lego",
        "Building Blocks","Jigsaw Puzzle","Board Game","Game Controller","Roller Skates","Swing","Slide","Toy Plane","Toy Boat","Toy Robot"
    ],

    Celebration: [
        "Birthday Cake","Birthday Candle","Balloon","Gift","Present","Party Hat","Confetti","Firework","Christmas Tree","Santa Claus",
        "Snowman","Christmas Stocking","Diya","Lantern","Candle","Garland","Flower Garland","Drum","Mask","Party Popper",
        "Invitation","Wedding Ring","Wedding Cake","Bouquet","Parade","Party","Birthday","Wedding","Festival","Decoration"
    ],

    Adventure: [
        "Treasure Chest","Treasure Map","Pirate Ship","Sword","Shield","Castle","Dragon","Unicorn","Mermaid","Fairy",
        "Ghost","Vampire","Witch","Wizard","Magic Wand","Campfire","Tent","Sleeping Bag","Picnic Basket","Compass",
        "Binoculars","Map","Hiking","Mountain Climber","Fisherman","Fishing Rod","Anchor","Sail","Lighthouse","Cave",
        "Jungle","Island","Volcano","Waterfall","Bridge","Rope","Ladder","Torch","Gold Coin","Diamond"
    ]

};


/* =========================================================
   GAME STATE
========================================================= */

let players = [];
let topic = "";
let secretWord = "";
let traitorIndex = -1;

let identityIndex = 0;

let round = 1;
let playerIndex = 0;

let timer = null;
let timeLeft = 20;

let isDrawing = false;
let turnActive = false;

let votes = [];
let voteIndex = 0;
let selectedVote = null;

let canvas;
let ctx;


/* =========================================================
   DOM
========================================================= */

const $ = id => document.getElementById(id);

const screens = {
    setup: $("setupScreen"),
    topic: $("topicScreen"),
    identity: $("identityScreen"),
    drawing: $("drawingScreen"),
    voting: $("votingScreen"),
    voteSelection: $("voteSelectionScreen"),
    results: $("resultsScreen"),
    traitorGuess: $("traitorGuessScreen"),
    final: $("finalScreen")
};

const playerInputs = $("playerInputs");
const addPlayerBtn = $("addPlayerBtn");
const startGameBtn = $("startGameBtn");

const topicName = $("topicName");
const continueTopicBtn = $("continueTopicBtn");

const identityAvatar = $("identityAvatar");
const identityPlayerName = $("identityPlayerName");
const revealBtn = $("revealBtn");
const identityReveal = $("identityReveal");
const identityContent = $("identityContent");
const hidePassBtn = $("hidePassBtn");

const drawingPlayerName = $("drawingPlayerName");
const roundLabel = $("roundLabel");
const playerColorDot = $("playerColorDot");
const timerDisplay = $("timer");
const strokeInfo = $("strokeInfo");
const canvasMessage = $("canvasMessage");
const doneBtn = $("doneBtn");

const passBuffer = $("passBuffer");
const nextPlayerText = $("nextPlayerText");
const bufferTimer = $("bufferTimer");

const voteAvatar = $("voteAvatar");
const votePlayerName = $("votePlayerName");
const startVoteBtn = $("startVoteBtn");

const votingForName = $("votingForName");
const voteOptions = $("voteOptions");
const submitVoteBtn = $("submitVoteBtn");

const resultsList = $("resultsList");
const resultSummary = $("resultSummary");
const continueResultsBtn = $("continueResultsBtn");

const showGuessInputBtn = $("showGuessInputBtn");
const guessArea = $("guessArea");
const guessInput = $("guessInput");
const submitGuessBtn = $("submitGuessBtn");

const finalTitle = $("finalTitle");
const finalMessage = $("finalMessage");
const finalWord = $("finalWord");
const finalTraitor = $("finalTraitor");
const finalIcon = $("finalIcon");
const newGameBtn = $("newGameBtn");


/* =========================================================
   SCREEN
========================================================= */

function showScreen(name) {

    Object.values(screens).forEach(
        s => s.classList.remove("active")
    );

    screens[name].classList.add("active");

    window.scrollTo(0,0);
}


/* =========================================================
   RANDOM
========================================================= */

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


/* =========================================================
   PLAYER SETUP
========================================================= */

function addPlayer(name = "") {

    const index = playerInputs.children.length;

    const row = document.createElement("div");

    row.className = "player-input";

    row.innerHTML = `
        <div class="player-number"
             style="background:${COLORS[index]}">
            ${index + 1}
        </div>

        <input type="text"
               maxlength="20"
               placeholder="Player ${index + 1}"
               value="${name}">
    `;

    playerInputs.appendChild(row);

    updateSetup();
}


function updateSetup() {

    const count = playerInputs.children.length;

    addPlayerBtn.style.display =
        count >= 10 ? "none" : "block";

    startGameBtn.disabled =
        count < 3;
}


addPlayer("Player 1");
addPlayer("Player 2");
addPlayer("Player 3");


addPlayerBtn.onclick = () => {

    if (playerInputs.children.length < 10) {
        addPlayer();
    }

};


/* =========================================================
   START GAME
========================================================= */

startGameBtn.onclick = () => {

    players = [];

    document
        .querySelectorAll("#playerInputs input")
        .forEach((input,index) => {

            players.push({
                name:
                    input.value.trim() ||
                    `Player ${index + 1}`,

                color: COLORS[index],
                votes: 0
            });

        });

    const topics = Object.keys(WORDS);

    topic = randomItem(topics);

    secretWord = randomItem(WORDS[topic]);

    traitorIndex =
        Math.floor(
            Math.random() * players.length
        );

    identityIndex = 0;

    votes = new Array(players.length).fill(null);

    topicName.textContent = topic;

    showScreen("topic");
};


/* =========================================================
   TOPIC
========================================================= */

continueTopicBtn.onclick = () => {

    setupIdentity();

    showScreen("identity");

};


/* =========================================================
   IDENTITY
========================================================= */

function setupIdentity() {

    const player = players[identityIndex];

    identityPlayerName.textContent =
        player.name;

    identityAvatar.textContent =
        identityIndex + 1;

    identityAvatar.style.background =
        player.color;

    identityReveal.classList.add("hidden");

    revealBtn.style.display = "block";

    identityContent.innerHTML = "";
}


revealBtn.onclick = () => {

    revealBtn.style.display = "none";

    identityReveal.classList.remove(
        "hidden"
    );

    const traitor =
        identityIndex === traitorIndex;

    if (traitor) {

        identityContent.innerHTML = `
            <div class="traitor-reveal">

                <strong>🕵️ YOU ARE THE TRAITOR!</strong>

                <p>
                    Topic:
                    <b>${topic}</b>
                </p>

                <p class="muted">
                    You don't know the secret word.
                    Watch the drawing and figure it out!
                </p>

            </div>
        `;

    } else {

        identityContent.innerHTML = `
            <div class="real-artist">

                <p>
                    Your secret word:
                </p>

                <span class="secret-word">
                    ${secretWord}
                </span>

                <p class="muted">
                    Topic: ${topic}
                </p>

            </div>
        `;

    }

};


hidePassBtn.onclick = () => {

    identityIndex++;

    if (identityIndex >= players.length) {

        startDrawing();

    } else {

        setupIdentity();

    }

};


/* =========================================================
   CANVAS
========================================================= */

canvas = $("drawingCanvas");
ctx = canvas.getContext("2d");


function resizeCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    const ratio =
        window.devicePixelRatio || 1;

    canvas.width =
        rect.width * ratio;

    canvas.height =
        rect.height * ratio;

    ctx.setTransform(
        ratio,0,0,ratio,0,0
    );

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 7;
}


function clearCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    ctx.save();

    ctx.setTransform(1,0,0,1,0,0);

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
}


/* =========================================================
   DRAWING START
========================================================= */

function startDrawing() {

    round = 1;
    playerIndex = 0;

    showScreen("drawing");

    setTimeout(() => {

        resizeCanvas();

        clearCanvas();

        startTurn();

    },100);

}


/* =========================================================
   PLAYER TURN
========================================================= */

function startTurn() {

    clearInterval(timer);

    passBuffer.classList.add("hidden");

    turnActive = true;
    isDrawing = false;

    const player =
        players[playerIndex];

    drawingPlayerName.textContent =
        player.name;

    drawingPlayerName.style.color =
        player.color;

    playerColorDot.style.background =
        player.color;

    roundLabel.textContent =
        `ROUND ${round} / 3`;

    strokeInfo.textContent =
        `Draw freely • ${topic}`;

    canvasMessage.classList.remove(
        "hidden"
    );

    doneBtn.disabled = false;

    timeLeft = 20;

    timerDisplay.textContent = timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent =
            timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            endTurn();

        }

    },1000);

}


/* =========================================================
   POINTER DRAWING
========================================================= */

function position(e) {

    const rect =
        canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

}


canvas.addEventListener(
    "pointerdown",
    e => {

        if (!turnActive) return;

        isDrawing = true;

        canvas.setPointerCapture(
            e.pointerId
        );

        const p = position(e);

        ctx.beginPath();

        ctx.moveTo(
            p.x,
            p.y
        );

        ctx.strokeStyle =
            players[playerIndex].color;

        ctx.lineWidth = 7;

        canvasMessage.classList.add(
            "hidden"
        );

    }
);


canvas.addEventListener(
    "pointermove",
    e => {

        if (!isDrawing || !turnActive)
            return;

        const p = position(e);

        ctx.lineTo(
            p.x,
            p.y
        );

        ctx.stroke();

    }
);


canvas.addEventListener(
    "pointerup",
    e => {

        if (!isDrawing)
            return;

        isDrawing = false;

        try {
            canvas.releasePointerCapture(
                e.pointerId
            );
        } catch (_) {}

    }
);


canvas.addEventListener(
    "pointercancel",
    () => {

        isDrawing = false;

    }
);


/* =========================================================
   DONE & PASS
========================================================= */

doneBtn.onclick = () => {

    if (!turnActive) return;

    endTurn();

};


/* =========================================================
   END TURN
========================================================= */

function endTurn() {

    if (!turnActive) return;

    turnActive = false;
    isDrawing = false;

    clearInterval(timer);

    doneBtn.disabled = true;

    /*
       IMPORTANT:
       The next player's timer does NOT
       start immediately.

       Exactly 3 seconds of buffer.
    */

    showPassBuffer();

}


/* =========================================================
   3 SECOND PASS BUFFER
========================================================= */

function showPassBuffer() {

    let nextIndex =
        playerIndex + 1;

    let nextRound = round;

    if (nextIndex >= players.length) {

        nextIndex = 0;

        nextRound++;

    }

    if (nextRound > 3) {

        nextPlayerText.textContent =
            "Drawing complete!";

    } else {

        nextPlayerText.textContent =
            `Hand the phone to ${players[nextIndex].name}`;

    }

    passBuffer.classList.remove(
        "hidden"
    );

    let seconds = 3;

    bufferTimer.textContent = seconds;

    const buffer = setInterval(() => {

        seconds--;

        bufferTimer.textContent =
            seconds;

        if (seconds <= 0) {

            clearInterval(buffer);

            passBuffer.classList.add(
                "hidden"
            );

            advanceTurn();

        }

    },1000);

}


/* =========================================================
   NEXT TURN
========================================================= */

function advanceTurn() {

    playerIndex++;

    if (playerIndex >= players.length) {

        playerIndex = 0;

        round++;

    }

    /*
       3 rounds complete
    */

    if (round > 3) {

        startVoting();

        return;

    }

    startTurn();

}


/* =========================================================
   VOTING START
========================================================= */

function startVoting() {

    votes =
        new Array(players.length).fill(null);

    players.forEach(
        p => p.votes = 0
    );

    voteIndex = 0;

    setupVotePass();

    showScreen("voting");

}


/* =========================================================
   VOTE PASS
========================================================= */

function setupVotePass() {

    const player =
        players[voteIndex];

    voteAvatar.textContent =
        voteIndex + 1;

    voteAvatar.style.background =
        player.color;

    votePlayerName.textContent =
        player.name;

}


startVoteBtn.onclick = () => {

    selectedVote = null;

    submitVoteBtn.disabled = true;

    votingForName.textContent =
        `${players[voteIndex].name}'s Vote`;

    renderVotes();

    showScreen("voteSelection");

};


/* =========================================================
   VOTE OPTIONS
========================================================= */

function renderVotes() {

    voteOptions.innerHTML = "";

    players.forEach(
        (player,index) => {

            if (index === voteIndex)
                return;

            const button =
                document.createElement("button");

            button.className =
                "vote-option";

            button.innerHTML = `
                <span class="vote-color"
                      style="background:${player.color}">
                </span>

                <span class="vote-name">
                    ${player.name}
                </span>
            `;

            button.onclick = () => {

                selectedVote = index;

                document
                    .querySelectorAll(
                        ".vote-option"
                    )
                    .forEach(
                        b =>
                        b.classList.remove(
                            "selected"
                        )
                    );

                button.classList.add(
                    "selected"
                );

                submitVoteBtn.disabled = false;

            };

            voteOptions.appendChild(button);

        }
    );

}


/* =========================================================
   SUBMIT VOTE
========================================================= */

submitVoteBtn.onclick = () => {

    if (selectedVote === null)
        return;

    votes[voteIndex] =
        selectedVote;

    players[selectedVote].votes++;

    voteIndex++;

    if (voteIndex >= players.length) {

        showResults();

    } else {

        setupVotePass();

        showScreen("voting");

    }

};


/* =========================================================
   RESULTS
========================================================= */

function showResults() {

    resultsList.innerHTML = "";

    const sorted =
        players
            .map(
                (p,i) => ({
                    ...p,
                    index:i
                })
            )
            .sort(
                (a,b) =>
                    b.votes - a.votes
            );

    sorted.forEach(
        (player,index) => {

            const row =
                document.createElement("div");

            row.className =
                "result-row";

            row.innerHTML = `
                <div class="result-rank">
                    ${index + 1}
                </div>

                <div class="vote-color"
                     style="background:${player.color}">
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


    const maxVotes =
        Math.max(
            ...players.map(
                p => p.votes
            )
        );

    const majority =
        maxVotes >
        players.length / 2;

    const top =
        players.filter(
            p => p.votes === maxVotes
        );

    const caught =
        majority &&
        top.length === 1 &&
        players[traitorIndex].votes === maxVotes;


    if (caught) {

        resultSummary.innerHTML = `
            <strong>🎯 The Traitor was caught!</strong>
            <p class="muted">
                But they still have one final chance...
            </p>
        `;

        continueResultsBtn.textContent =
            "Give Traitor Final Guess";

    } else {

        resultSummary.innerHTML = `
            <strong>🕵️ The Traitor escapes!</strong>
            <p class="muted">
                The players failed to identify
                the Traitor correctly.
            </p>
        `;

        continueResultsBtn.textContent =
            "See Result";

    }

    continueResultsBtn.dataset.caught =
        caught ? "yes" : "no";

    showScreen("results");

}


/* =========================================================
   RESULTS CONTINUE
========================================================= */

continueResultsBtn.onclick = () => {

    const caught =
        continueResultsBtn.dataset.caught ===
        "yes";

    if (caught) {

        guessArea.classList.add("hidden");

        showGuessInputBtn.style.display =
            "block";

        guessInput.value = "";

        showScreen("traitorGuess");

    } else {

        finishGame(
            false,
            "The Traitor was not caught."
        );

    }

};


/* =========================================================
   TRAITOR GUESS
========================================================= */

showGuessInputBtn.onclick = () => {

    showGuessInputBtn.style.display =
        "none";

    guessArea.classList.remove(
        "hidden"
    );

    guessInput.focus();

};


submitGuessBtn.onclick =
    submitGuess;


guessInput.addEventListener(
    "keydown",
    e => {

        if (e.key === "Enter")
            submitGuess();

    }
);


function submitGuess() {

    const guess =
        guessInput.value
            .trim()
            .toLowerCase();

    if (!guess)
        return;

    const correct =
        guess ===
        secretWord.toLowerCase();

    if (correct) {

        finishGame(
            false,
            `The Traitor guessed the secret word correctly: ${secretWord}.`
        );

    } else {

        finishGame(
            true,
            `The Traitor guessed "${guess}", but the secret word was "${secretWord}".`
        );

    }

}


/* =========================================================
   FINAL SCREEN
========================================================= */

function finishGame(
    artistsWin,
    message
) {

    finalMessage.textContent =
        message;

    finalWord.textContent =
        secretWord;

    finalTraitor.textContent =
        players[traitorIndex].name;

    if (artistsWin) {

        finalIcon.textContent = "🎨";

        finalTitle.textContent =
            "Artists Win!";

    } else {

        finalIcon.textContent = "🕵️";

        finalTitle.textContent =
            "Traitor Wins!";

    }

    showScreen("final");

}


/* =========================================================
   NEW GAME
========================================================= */

newGameBtn.onclick = () => {

    clearInterval(timer);

    players = [];
    topic = "";
    secretWord = "";
    traitorIndex = -1;

    identityIndex = 0;
    round = 1;
    playerIndex = 0;
    voteIndex = 0;

    playerInputs.innerHTML = "";

    addPlayer("Player 1");
    addPlayer("Player 2");
    addPlayer("Player 3");

    showScreen("setup");

};


/* =========================================================
   CANVAS RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            screens.drawing.classList.contains(
                "active"
            )
        ) {

            /*
               Do not resize unnecessarily
               while somebody is drawing.
            */

            if (!isDrawing) {
                resizeCanvas();
            }

        }

    }
);


/* =========================================================
   PREVENT PAGE SCROLL WHILE DRAWING
========================================================= */

document.addEventListener(
    "touchmove",
    e => {

        if (
            screens.drawing.classList.contains(
                "active"
            ) &&
            e.target === canvas
        ) {

            e.preventDefault();

        }

    },
    {
        passive:false
    }
);
