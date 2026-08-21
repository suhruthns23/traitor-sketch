/* =========================================================
   TRAITOR SKETCH
   COMPLETE FINAL SCRIPT

   3–10 PLAYERS
   3 DRAWING ROUNDS
   20 SECONDS / TURN
   NO ONE-STROKE LIMIT
   DONE & PASS
   3 SECOND PASS BUFFER
   TOPIC + SECRET WORD
   TRAITOR GETS TOPIC HINT
   SKIP TOPIC
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
        "Cereal","French Toast","Fried Rice","Pav Bhaji"
    ],

    Drinks: [
        "Water","Milk","Tea","Coffee","Juice","Lemonade","Milkshake","Smoothie","Hot Chocolate","Coconut Water",
        "Soft Drink","Orange Juice","Apple Juice","Mango Juice","Lassi","Buttermilk","Mocktail","Fruit Juice",
        "Energy Drink","Cocoa","Green Tea","Lime Juice","Tea Cup","Coffee Cup","Water Bottle","Thermos","Flask","Straw","Cup","Mug"
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
        "Purse","Backpack","Suitcase","Plate","Bowl","Spoon","Fork","Knife","Napkin","Cup"
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
        "Guitar","Piano","Drum","Violin","Flute","Trumpet","Saxophone","Harmonica","Tambourine","Bell",
        "Harp","Cello","Microphone","Speaker","DJ Turntable","Music Note","Headphones","Drumstick","Concert Stage","Radio",
        "Keyboard","Tabla","Cymbal","Xylophone","Maracas","Sitar","Recorder","Accordion","Music Stand","Guitar Pick"
    ],

    Clothing: [
        "Shirt","T-Shirt","Pants","Jeans","Shorts","Skirt","Dress","Jacket","Coat","Sweater",
        "Hoodie","Tie","Bow Tie","Belt","Socks","Shoes","Sandals","Boots","Slippers","Hat",
        "Cap","Helmet","Scarf","Gloves","Sunglasses","Glasses","Watch","Ring","Necklace","Bracelet",
        "Earrings","Crown","Mask","Raincoat","Swimsuit","School Uniform","Suit","Backpack","Handbag","Purse"
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
        "Raindrop","Thunder","Pond","Valley","Cliff","Rock","Stone","Garden","Water Lily","River"
    ],

    Space: [
        "Sun","Moon","Earth","Mars","Jupiter","Saturn","Planet","Star","Astronaut","Alien",
        "Rocket","Spaceship","UFO","Satellite","Telescope","Comet","Meteor","Asteroid","Galaxy","Moon Landing",
        "Space Station","Black Hole","Space Suit","Planet Ring","Moon Rover","Alien Ship","Solar System","Earth Globe","Astronaut Helmet","Space Helmet"
    ],

    Tools: [
        "Hammer","Screwdriver","Wrench","Pliers","Saw","Drill","Axe","Shovel","Rake","Hoe",
        "Ladder","Rope","Chain","Nail","Screw","Bolt","Toolbox","Measuring Tape","Flashlight","Work Gloves",
        "Wheelbarrow","Paint Roller","Paintbrush","Bucket","Spanner","Crowbar","Chisel","Clamp","Drill Machine","Screwdriver"
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
        "Binoculars","Map","Hiking","Mountain Climber","Fishing Rod","Anchor","Sail","Lighthouse","Cave","Jungle",
        "Island","Volcano","Waterfall","Bridge","Rope","Ladder","Torch","Gold Coin","Diamond","Treasure"
    ]

};


/* =========================================================
   GAME VARIABLES
========================================================= */

let players = [];

let topic = "";
let secretWord = "";
let traitorIndex = -1;

let identityIndex = 0;

let round = 1;
let playerIndex = 0;

let timer = null;
let bufferTimerInterval = null;

let timeLeft = 20;

let isDrawing = false;
let turnActive = false;

let votes = [];
let voteIndex = 0;
let selectedVote = null;

let canvas;
let ctx;


/* =========================================================
   HELPER
========================================================= */

function $(id) {
    return document.getElementById(id);
}


function randomItem(array) {
    return array[
        Math.floor(Math.random() * array.length)
    ];
}


function showScreen(name) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    const screen =
        $(`${name}Screen`);

    if (screen) {
        screen.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================================================
   DOM REFERENCES
========================================================= */

const playerInputs = $("playerInputs");
const addPlayerBtn = $("addPlayerBtn");
const startGameBtn = $("startGameBtn");

const topicName = $("topicName");
const continueTopicBtn = $("continueTopicBtn");
const skipTopicBtn = $("skipTopicBtn");

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
const bufferTimerDisplay = $("bufferTimer");

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
const finalTopic = $("finalTopic");
const finalTraitor = $("finalTraitor");
const finalIcon = $("finalIcon");
const newGameBtn = $("newGameBtn");


/* =========================================================
   PLAYER SETUP
========================================================= */

function addPlayer(name = "") {

    const index =
        playerInputs.children.length;

    const row =
        document.createElement("div");

    row.className = "player-input";

    row.innerHTML = `
        <div class="player-number"
             style="background:${COLORS[index]}">
            ${index + 1}
        </div>

        <input
            type="text"
            maxlength="20"
            placeholder="Player ${index + 1}"
            value="${name}">
    `;

    playerInputs.appendChild(row);

    updateSetup();
}


function updateSetup() {

    const count =
        playerInputs.children.length;

    addPlayerBtn.style.display =
        count >= 10 ? "none" : "block";

    startGameBtn.disabled =
        count < 3;
}


addPlayer("Player 1");
addPlayer("Player 2");
addPlayer("Player 3");


addPlayerBtn.addEventListener(
    "click",
    () => {

        if (
            playerInputs.children.length < 10
        ) {
            addPlayer();
        }

    }
);


/* =========================================================
   START GAME
========================================================= */

startGameBtn.addEventListener(
    "click",
    () => {

        players = [];

        document
            .querySelectorAll("#playerInputs input")
            .forEach((input, index) => {

                players.push({
                    name:
                        input.value.trim() ||
                        `Player ${index + 1}`,

                    color:
                        COLORS[index],

                    votes: 0
                });

            });


        /* Pick initial topic */

        const topics =
            Object.keys(WORDS);

        topic =
            randomItem(topics);

        secretWord =
            randomItem(WORDS[topic]);


        /* Pick Traitor */

        traitorIndex =
            Math.floor(
                Math.random() *
                players.length
            );


        identityIndex = 0;

        votes =
            new Array(players.length)
                .fill(null);


        topicName.textContent =
            topic;

        showScreen("topic");

    }
);


/* =========================================================
   SKIP TOPIC
   THIS IS THE IMPORTANT FIX
========================================================= */

skipTopicBtn.addEventListener(
    "click",
    function () {

        const topics =
            Object.keys(WORDS);

        if (topics.length === 0) {
            return;
        }


        /*
           Keep selecting until a DIFFERENT
           topic is obtained.
        */

        let newTopic;

        do {

            newTopic =
                randomItem(topics);

        } while (
            topics.length > 1 &&
            newTopic === topic
        );


        /* Change topic */

        topic = newTopic;


        /*
           IMPORTANT:
           Generate a completely NEW
           secret word from the new topic.
        */

        secretWord =
            randomItem(
                WORDS[topic]
            );


        /*
           Immediately update the screen.
        */

        topicName.textContent =
            topic;


        /*
           Small visual feedback.
        */

        skipTopicBtn.textContent =
            "✓ TOPIC CHANGED!";

        setTimeout(() => {

            skipTopicBtn.textContent =
                "🔄 SKIP TOPIC";

        }, 700);

    }
);


/* =========================================================
   CONTINUE TOPIC
========================================================= */

continueTopicBtn.addEventListener(
    "click",
    () => {

        setupIdentity();

        showScreen("identity");

    }
);


/* =========================================================
   IDENTITY
========================================================= */

function setupIdentity() {

    const player =
        players[identityIndex];

    identityPlayerName.textContent =
        player.name;

    identityAvatar.textContent =
        identityIndex + 1;

    identityAvatar.style.background =
        player.color;

    identityReveal.classList.add(
        "hidden"
    );

    revealBtn.style.display =
        "block";

    identityContent.innerHTML =
        "";
}


revealBtn.addEventListener(
    "click",
    () => {

        revealBtn.style.display =
            "none";

        identityReveal.classList.remove(
            "hidden"
        );


        const isTraitor =
            identityIndex ===
            traitorIndex;


        if (isTraitor) {

            identityContent.innerHTML = `

                <div class="traitor-reveal">

                    <strong>
                        🕵️ YOU ARE THE TRAITOR!
                    </strong>

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

                <div>

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

    }
);


/* =========================================================
   HIDE & PASS
========================================================= */

hidePassBtn.addEventListener(
    "click",
    () => {

        identityIndex++;

        if (
            identityIndex >=
            players.length
        ) {

            startDrawing();

        } else {

            setupIdentity();

        }

    }
);


/* =========================================================
   CANVAS
========================================================= */

canvas =
    $("drawingCanvas");

ctx =
    canvas.getContext("2d");


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
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );

    ctx.lineCap =
        "round";

    ctx.lineJoin =
        "round";

    ctx.lineWidth =
        7;
}


function clearCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    ctx.save();

    ctx.setTransform(
        1,0,0,1,0,0
    );

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.restore();

    ctx.fillStyle =
        "#ffffff";

    ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
    );
}


/* =========================================================
   START DRAWING
========================================================= */

function startDrawing() {

    round = 1;
    playerIndex = 0;

    showScreen("drawing");

    setTimeout(() => {

        resizeCanvas();

        clearCanvas();

        startTurn();

    }, 100);
}


/* =========================================================
   START PLAYER TURN
========================================================= */

function startTurn() {

    clearInterval(timer);

    clearInterval(
        bufferTimerInterval
    );

    passBuffer.classList.add(
        "hidden"
    );

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
        `Draw freely!`;


    canvasMessage.classList.remove(
        "hidden"
    );


    doneBtn.disabled =
        false;


    timeLeft = 20;

    timerDisplay.textContent =
        timeLeft;


    timer =
        setInterval(() => {

            timeLeft--;

            timerDisplay.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                clearInterval(timer);

                endTurn();

            }

        }, 1000);

}


/* =========================================================
   DRAWING
========================================================= */

function getPosition(event) {

    const rect =
        canvas.getBoundingClientRect();

    return {

        x:
            event.clientX -
            rect.left,

        y:
            event.clientY -
            rect.top

    };
}


canvas.addEventListener(
    "pointerdown",
    event => {

        if (!turnActive)
            return;

        isDrawing = true;

        canvas.setPointerCapture(
            event.pointerId
        );


        const p =
            getPosition(event);


        ctx.beginPath();

        ctx.moveTo(
            p.x,
            p.y
        );


        ctx.strokeStyle =
            players[playerIndex].color;


        ctx.lineWidth =
            7;


        canvasMessage.classList.add(
            "hidden"
        );

    }
);


canvas.addEventListener(
    "pointermove",
    event => {

        if (
            !isDrawing ||
            !turnActive
        ) {
            return;
        }


        const p =
            getPosition(event);


        ctx.lineTo(
            p.x,
            p.y
        );

        ctx.stroke();

    }
);


canvas.addEventListener(
    "pointerup",
    event => {

        isDrawing = false;

        try {

            canvas.releasePointerCapture(
                event.pointerId
            );

        } catch (error) {}

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

doneBtn.addEventListener(
    "click",
    () => {

        if (!turnActive)
            return;

        endTurn();

    }
);


/* =========================================================
   END TURN
========================================================= */

function endTurn() {

    if (!turnActive)
        return;


    turnActive = false;

    isDrawing = false;

    clearInterval(timer);

    doneBtn.disabled =
        true;


    /*
       NEVER start the next player's
       timer immediately.

       Always give exactly 3 seconds.
    */

    showPassBuffer();

}


/* =========================================================
   3 SECOND PASS BUFFER
========================================================= */

function showPassBuffer() {

    let nextPlayerIndex =
        playerIndex + 1;

    let nextRound =
        round;


    if (
        nextPlayerIndex >=
        players.length
    ) {

        nextPlayerIndex = 0;

        nextRound++;

    }


    if (nextRound > 3) {

        nextPlayerText.textContent =
            "Drawing complete!";

    } else {

        nextPlayerText.textContent =
            `Hand the phone to ${players[nextPlayerIndex].name}`;

    }


    passBuffer.classList.remove(
        "hidden"
    );


    let seconds = 3;

    bufferTimerDisplay.textContent =
        seconds;


    clearInterval(
        bufferTimerInterval
    );


    bufferTimerInterval =
        setInterval(() => {

            seconds--;

            bufferTimerDisplay.textContent =
                seconds;


            if (seconds <= 0) {

                clearInterval(
                    bufferTimerInterval
                );

                passBuffer.classList.add(
                    "hidden"
                );

                advanceTurn();

            }

        }, 1000);

}


/* =========================================================
   ADVANCE TURN
========================================================= */

function advanceTurn() {

    playerIndex++;


    if (
        playerIndex >=
        players.length
    ) {

        playerIndex = 0;

        round++;

    }


    if (round > 3) {

        startVoting();

        return;

    }


    startTurn();

}


/* =========================================================
   START VOTING
========================================================= */

function startVoting() {

    votes =
        new Array(players.length)
            .fill(null);


    players.forEach(
        player => {
            player.votes = 0;
        }
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


startVoteBtn.addEventListener(
    "click",
    () => {

        selectedVote = null;

        submitVoteBtn.disabled =
            true;


        votingForName.textContent =
            `${players[voteIndex].name}'s Vote`;


        renderVotes();

        showScreen("voteSelection");

    }
);


/* =========================================================
   VOTE OPTIONS
========================================================= */

function renderVotes() {

    voteOptions.innerHTML =
        "";


    players.forEach(
        (player, index) => {

            if (
                index === voteIndex
            ) {
                return;
            }


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "vote-option";


            button.type =
                "button";


            button.innerHTML = `

                <span
                    class="vote-color"
                    style="background:${player.color}">
                </span>

                <span class="vote-name">
                    ${player.name}
                </span>

            `;


            button.addEventListener(
                "click",
                () => {

                    selectedVote =
                        index;


                    document
                        .querySelectorAll(
                            ".vote-option"
                        )
                        .forEach(
                            b => {
                                b.classList.remove(
                                    "selected"
                                );
                            }
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
    () => {

        if (
            selectedVote === null
        ) {
            return;
        }


        votes[voteIndex] =
            selectedVote;


        players[selectedVote].votes++;


        voteIndex++;


        if (
            voteIndex >=
            players.length
        ) {

            showResults();

        } else {

            setupVotePass();

            showScreen("voting");

        }

    }
);


/* =========================================================
   RESULTS
========================================================= */

function showResults() {

    resultsList.innerHTML =
        "";


    const sorted =
        players
            .map(
                (player, index) => ({
                    ...player,
                    index
                })
            )
            .sort(
                (a,b) =>
                    b.votes - a.votes
            );


    sorted.forEach(
        (player, index) => {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "result-row";


            row.innerHTML = `

                <div class="result-rank">
                    ${index + 1}
                </div>

                <div
                    class="vote-color"
                    style="background:${player.color}">
                </div>

                <div class="result-player">
                    ${player.name}
                </div>

                <div class="vote-count">
                    ${player.votes}
                </div>

            `;


            resultsList.appendChild(
                row
            );

        }
    );


    const maxVotes =
        Math.max(
            ...players.map(
                player =>
                    player.votes
            )
        );


    const majority =
        maxVotes >
        players.length / 2;


    const topPlayers =
        players.filter(
            player =>
                player.votes === maxVotes
        );


    const caught =
        majority &&
        topPlayers.length === 1 &&
        players[traitorIndex].votes === maxVotes;


    if (caught) {

        resultSummary.innerHTML = `

            <strong>
                🎯 The Traitor was caught!
            </strong>

            <p class="muted">
                But the Traitor still has
                one final chance.
            </p>

        `;

        continueResultsBtn.textContent =
            "Give Traitor Final Guess";

    } else {

        resultSummary.innerHTML = `

            <strong>
                🕵️ The Traitor escapes!
            </strong>

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
   RESULT CONTINUE
========================================================= */

continueResultsBtn.addEventListener(
    "click",
    () => {

        const caught =
            continueResultsBtn.dataset.caught ===
            "yes";


        if (caught) {

            guessArea.classList.add(
                "hidden"
            );

            showGuessInputBtn.style.display =
                "block";

            guessInput.value =
                "";

            showScreen("traitorGuess");

        } else {

            finishGame(
                true,
                "The Traitor was not caught."
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
    submitGuess
);


guessInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            submitGuess();

        }

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
   FINAL GAME
========================================================= */

function finishGame(
    artistsWin,
    message
) {

    finalMessage.textContent =
        message;


    finalWord.textContent =
        secretWord;


    finalTopic.textContent =
        topic;


    finalTraitor.textContent =
        players[traitorIndex].name;


    if (artistsWin) {

        finalIcon.textContent =
            "🎨";

        finalTitle.textContent =
            "Artists Win!";

    } else {

        finalIcon.textContent =
            "🕵️";

        finalTitle.textContent =
            "Traitor Wins!";

    }


    showScreen("final");

}


/* =========================================================
   NEW GAME
========================================================= */

newGameBtn.addEventListener(
    "click",
    () => {

        clearInterval(timer);

        clearInterval(
            bufferTimerInterval
        );


        players = [];

        topic = "";

        secretWord = "";

        traitorIndex = -1;

        identityIndex = 0;

        round = 1;

        playerIndex = 0;

        voteIndex = 0;

        selectedVote = null;


        playerInputs.innerHTML =
            "";


        addPlayer("Player 1");
        addPlayer("Player 2");
        addPlayer("Player 3");


        showScreen("setup");

    }
);


/* =========================================================
   CANVAS RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            $("drawingScreen")
                .classList
                .contains("active")
        ) {

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
    event => {

        if (
            $("drawingScreen")
                .classList
                .contains("active") &&
            event.target === canvas
        ) {

            event.preventDefault();

        }

    },
    {
        passive: false
    }
);
