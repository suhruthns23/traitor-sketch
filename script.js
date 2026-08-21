/* =========================================================
   TRAITOR SKETCH
   LOCAL SINGLE-DEVICE PASS-THE-PHONE GAME

   VERSION:
   - No categories
   - 1000-word master pool
   - 3-10 players
   - 2 drawing rounds
   - 15 seconds per stroke
   - Private pass-the-phone voting
   - Traitor final guess
========================================================= */


/* =========================================================
   PLAYER COLORS
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


/* =========================================================
   1000 DRAWABLE WORDS
========================================================= */

const WORDS = [

    /* ---------- ANIMALS ---------- */

    "CAT",
    "DOG",
    "LION",
    "TIGER",
    "ELEPHANT",
    "GIRAFFE",
    "ZEBRA",
    "HORSE",
    "COW",
    "GOAT",
    "SHEEP",
    "PIG",
    "CHICKEN",
    "ROOSTER",
    "DUCK",
    "GOOSE",
    "TURKEY",
    "RABBIT",
    "MOUSE",
    "RAT",
    "HAMSTER",
    "SQUIRREL",
    "MONKEY",
    "GORILLA",
    "CHIMPANZEE",
    "BEAR",
    "POLAR BEAR",
    "PANDA",
    "KOALA",
    "KANGAROO",
    "DEER",
    "BUFFALO",
    "CAMEL",
    "DONKEY",
    "FOX",
    "WOLF",
    "LEOPARD",
    "CHEETAH",
    "JAGUAR",
    "HYENA",
    "PENGUIN",
    "SEAL",
    "WALRUS",
    "OTTER",
    "DOLPHIN",
    "WHALE",
    "SHARK",
    "OCTOPUS",
    "SQUID",
    "CRAB",
    "LOBSTER",
    "TURTLE",
    "CROCODILE",
    "ALLIGATOR",
    "SNAKE",
    "LIZARD",
    "FROG",
    "TOAD",
    "SNAIL",
    "BUTTERFLY",
    "BEE",
    "ANT",
    "SPIDER",
    "MOSQUITO",
    "DRAGONFLY",
    "BEETLE",
    "PARROT",
    "EAGLE",
    "OWL",
    "CROW",
    "PIGEON",
    "PEACOCK",
    "SWAN",
    "FLAMINGO",
    "OSTRICH",
    "WOODPECKER",
    "SEAGULL",
    "BAT",
    "HEDGEHOG",
    "PORCUPINE",
    "HIPPOPOTAMUS",
    "RHINOCEROS",
    "GORILLA",
    "CAMEL",
    "LLAMA",
    "ALPACA",
    "DONKEY",
    "MOOSE",
    "REINDEER",
    "BEAVER",
    "SKUNK",
    "MEERKAT",
    "CHEETAH",
    "CHAMELEON",
    "IGUANA",
    "DINOSAUR",

    /* ---------- FRUITS ---------- */

    "APPLE",
    "BANANA",
    "MANGO",
    "ORANGE",
    "GRAPE",
    "WATERMELON",
    "PINEAPPLE",
    "PAPAYA",
    "GUAVA",
    "STRAWBERRY",
    "BLUEBERRY",
    "RASPBERRY",
    "BLACKBERRY",
    "CHERRY",
    "PEACH",
    "PEAR",
    "PLUM",
    "KIWI",
    "LEMON",
    "LIME",
    "COCONUT",
    "AVOCADO",
    "POMEGRANATE",
    "FIG",
    "DATE",
    "APRICOT",
    "MELON",
    "CANTALOUPE",
    "LYCHEE",
    "JACKFRUIT",
    "DRAGON FRUIT",
    "PASSION FRUIT",
    "STAR FRUIT",
    "GRAPEFRUIT",
    "TANGERINE",
    "CRANBERRY",
    "RAISIN",
    "OLIVE",
    "TAMARIND",
    "CUSTARD APPLE",
    "SAPOTA",
    "JAMUN",
    "MULBERRY",
    "GOOSEBERRY",
    "PERSIMMON",
    "NECTARINE",
    "QUINCE",
    "DURIAN",
    "LONGAN",
    "RAMBUTAN",

    /* ---------- VEGETABLES ---------- */

    "CARROT",
    "POTATO",
    "ONION",
    "TOMATO",
    "CABBAGE",
    "SPINACH",
    "BEANS",
    "PEAS",
    "PUMPKIN",
    "RADISH",
    "BEETROOT",
    "BROCCOLI",
    "CAULIFLOWER",
    "CUCUMBER",
    "BRINJAL",
    "EGGPLANT",
    "LADYFINGER",
    "CAPSICUM",
    "CHILLI",
    "CORN",
    "SWEET POTATO",
    "GINGER",
    "GARLIC",
    "TURNIP",
    "LETTUCE",
    "CELERY",
    "MUSHROOM",
    "BOTTLE GOURD",
    "BITTER GOURD",
    "RIDGE GOURD",
    "DRUMSTICK",
    "ZUCCHINI",
    "ARTICHOKE",
    "ASPARAGUS",
    "LEEK",
    "YAM",
    "PARSNIP",
    "KALE",
    "MINT",
    "CORIANDER",

    /* ---------- FOOD ---------- */

    "PIZZA",
    "BURGER",
    "SANDWICH",
    "HOT DOG",
    "CAKE",
    "ICE CREAM",
    "CUPCAKE",
    "DONUT",
    "COOKIE",
    "BISCUIT",
    "CHOCOLATE",
    "CANDY",
    "LOLLIPOP",
    "POPCORN",
    "NOODLES",
    "PASTA",
    "SPAGHETTI",
    "LASAGNA",
    "FRIES",
    "PANCAKE",
    "WAFFLE",
    "OMELETTE",
    "TOAST",
    "BREAD",
    "CHEESE",
    "BUTTER",
    "YOGURT",
    "RICE",
    "DOSA",
    "IDLI",
    "VADA",
    "SAMOSA",
    "PARATHA",
    "ROTI",
    "CHAPATI",
    "BIRYANI",
    "CURRY",
    "SOUP",
    "SALAD",
    "SUSHI",
    "TACO",
    "BURRITO",
    "NACHOS",
    "PRETZEL",
    "MUFFIN",
    "PIE",
    "PUDDING",
    "JELLY",
    "HONEY",
    "JAM",
    "KETCHUP",
    "MUSTARD",
    "SAUCE",
    "KETCHUP BOTTLE",
    "CEREAL",
    "SPOON",
    "FORK",
    "KNIFE",
    "PLATE",
    "BOWL",
    "CUP",

    /* ---------- DRINKS ---------- */

    "WATER",
    "MILK",
    "TEA",
    "COFFEE",
    "JUICE",
    "LEMONADE",
    "MILKSHAKE",
    "SMOOTHIE",
    "HOT CHOCOLATE",
    "COCONUT WATER",
    "SOFT DRINK",
    "WATER BOTTLE",
    "TEA CUP",
    "COFFEE CUP",
    "STRAW",
    "THERMOS",

    /* ---------- HOUSEHOLD ITEMS ---------- */

    "CHAIR",
    "TABLE",
    "SOFA",
    "BED",
    "PILLOW",
    "BLANKET",
    "MATTRESS",
    "MIRROR",
    "BROOM",
    "MOP",
    "BUCKET",
    "DUSTBIN",
    "LAMP",
    "CLOCK",
    "FAN",
    "TELEVISION",
    "REMOTE",
    "CURTAIN",
    "DOOR",
    "WINDOW",
    "KEY",
    "LOCK",
    "HANGER",
    "IRON",
    "IRONING BOARD",
    "VACUUM CLEANER",
    "WASHING MACHINE",
    "REFRIGERATOR",
    "OVEN",
    "MICROWAVE",
    "TOASTER",
    "BLENDER",
    "MIXER",
    "KETTLE",
    "PAN",
    "POT",
    "PRESSURE COOKER",
    "BOTTLE",
    "JAR",
    "BOX",
    "BASKET",
    "VASE",
    "CANDLE",
    "PLANT POT",
    "BOOKSHELF",
    "DRAWER",
    "CARPET",
    "RUG",
    "DOORMAT",
    "UMBRELLA",
    "RAINCOAT",
    "TOWEL",
    "TOOTHBRUSH",
    "TOOTHPASTE",
    "SOAP",
    "SHAMPOO",
    "COMB",
    "HAIRBRUSH",
    "SCISSORS",
    "NAIL CLIPPER",
    "PERFUME",
    "WALLET",
    "PURSE",
    "BACKPACK",
    "SUITCASE",

    /* ---------- SCHOOL / OFFICE ---------- */

    "BOOK",
    "NOTEBOOK",
    "PENCIL",
    "PEN",
    "ERASER",
    "RULER",
    "SHARPENER",
    "MARKER",
    "CRAYON",
    "PAINTBRUSH",
    "PAINT",
    "PAPER",
    "ENVELOPE",
    "STAPLER",
    "PAPER CLIP",
    "SCISSORS",
    "GLUE",
    "TAPE",
    "CALCULATOR",
    "DESK",
    "BLACKBOARD",
    "WHITEBOARD",
    "CHALK",
    "SCHOOL BAG",
    "SCHOOL BUS",
    "COMPUTER",
    "LAPTOP",
    "KEYBOARD",
    "MOUSE",
    "PRINTER",
    "MONITOR",
    "HEADPHONES",
    "MICROPHONE",
    "FOLDER",
    "FILE",
    "CALENDAR",
    "DIARY",
    "STICKER",
    "BADGE",
    "ID CARD",
    "CERTIFICATE",
    "TROPHY",

    /* ---------- ELECTRONICS ---------- */

    "PHONE",
    "SMARTPHONE",
    "TABLET",
    "LAPTOP",
    "COMPUTER",
    "CAMERA",
    "TELEVISION",
    "RADIO",
    "SPEAKER",
    "HEADPHONES",
    "EARPHONES",
    "WATCH",
    "SMARTWATCH",
    "REMOTE CONTROL",
    "GAME CONTROLLER",
    "KEYBOARD",
    "MOUSE",
    "PRINTER",
    "PROJECTOR",
    "DRONE",
    "ROUTER",
    "CHARGER",
    "BATTERY",
    "USB DRIVE",
    "MEMORY CARD",
    "POWER BANK",
    "LIGHT BULB",
    "FLASHLIGHT",
    "ALARM CLOCK",
    "CALCULATOR",

    /* ---------- VEHICLES ---------- */

    "CAR",
    "BUS",
    "BICYCLE",
    "MOTORCYCLE",
    "SCOOTER",
    "TRAIN",
    "TRUCK",
    "VAN",
    "TAXI",
    "AMBULANCE",
    "FIRE TRUCK",
    "POLICE CAR",
    "TRACTOR",
    "JEEP",
    "RACE CAR",
    "SPORTS CAR",
    "AIRPLANE",
    "HELICOPTER",
    "ROCKET",
    "HOT AIR BALLOON",
    "BOAT",
    "SHIP",
    "SAILBOAT",
    "SUBMARINE",
    "CANOE",
    "KAYAK",
    "YACHT",
    "CART",
    "RICKSHAW",
    "AUTO RICKSHAW",
    "METRO",
    "TRAM",
    "BULLET TRAIN",
    "SCHOOL BUS",
    "AMBULANCE",
    "FERRY",
    "FORKLIFT",
    "DUMP TRUCK",
    "TOW TRUCK",
    "CEMENT TRUCK",

    /* ---------- SPORTS ---------- */

    "CRICKET",
    "FOOTBALL",
    "SOCCER",
    "TENNIS",
    "BASKETBALL",
    "HOCKEY",
    "BADMINTON",
    "VOLLEYBALL",
    "BASEBALL",
    "GOLF",
    "BOXING",
    "WRESTLING",
    "SWIMMING",
    "RUNNING",
    "CYCLING",
    "SKATEBOARDING",
    "SURFING",
    "SKIING",
    "ARCHERY",
    "BOWLING",
    "TABLE TENNIS",
    "CARROM",
    "CHESS",
    "KABADDI",
    "KHO KHO",
    "RUGBY",
    "CRICKET BAT",
    "CRICKET BALL",
    "FOOTBALL",
    "TENNIS RACKET",
    "BADMINTON RACKET",
    "GOLF CLUB",
    "BASEBALL BAT",
    "BOXING GLOVE",
    "MEDAL",
    "TROPHY",
    "WHISTLE",
    "SPORTS SHOES",
    "HELMET",
    "STOPWATCH",

    /* ---------- MUSICAL ITEMS ---------- */

    "GUITAR",
    "PIANO",
    "DRUM",
    "VIOLIN",
    "FLUTE",
    "TRUMPET",
    "SAXOPHONE",
    "HARMONICA",
    "TAMBOURINE",
    "BELL",
    "HARP",
    "CELLO",
    "MICROPHONE",
    "SPEAKER",
    "DJ TURNTABLE",
    "MUSIC NOTE",
    "HEADPHONES",
    "DRUMSTICK",
    "CONCERT STAGE",
    "RADIO",

    /* ---------- CLOTHING ---------- */

    "SHIRT",
    "T-SHIRT",
    "PANTS",
    "JEANS",
    "SHORTS",
    "SKIRT",
    "DRESS",
    "JACKET",
    "COAT",
    "SWEATER",
    "HOODIE",
    "TIE",
    "BOW TIE",
    "BELT",
    "SOCKS",
    "SHOES",
    "SANDALS",
    "BOOTS",
    "SLIPPERS",
    "HAT",
    "CAP",
    "HELMET",
    "SCARF",
    "GLOVES",
    "SUNGLASSES",
    "GLASSES",
    "WATCH",
    "RING",
    "NECKLACE",
    "BRACELET",
    "EARRINGS",
    "CROWN",
    "MASK",
    "RAINCOAT",

    /* ---------- PLACES / BUILDINGS ---------- */

    "HOUSE",
    "SCHOOL",
    "HOSPITAL",
    "BANK",
    "HOTEL",
    "RESTAURANT",
    "CAFE",
    "LIBRARY",
    "MUSEUM",
    "CINEMA",
    "THEATER",
    "STADIUM",
    "PARK",
    "PLAYGROUND",
    "ZOO",
    "AQUARIUM",
    "AIRPORT",
    "RAILWAY STATION",
    "BUS STOP",
    "TRAIN STATION",
    "FIRE STATION",
    "POLICE STATION",
    "POST OFFICE",
    "SUPERMARKET",
    "SHOP",
    "BAKERY",
    "TEMPLE",
    "CHURCH",
    "MOSQUE",
    "CASTLE",
    "PALACE",
    "LIGHTHOUSE",
    "BRIDGE",
    "TOWER",
    "SKYSCRAPER",
    "FACTORY",
    "FARM",
    "GARAGE",
    "PET SHOP",
    "BOOKSTORE",

    /* ---------- NATURE ---------- */

    "TREE",
    "FLOWER",
    "GRASS",
    "BUSH",
    "FOREST",
    "MOUNTAIN",
    "HILL",
    "VOLCANO",
    "RIVER",
    "LAKE",
    "WATERFALL",
    "OCEAN",
    "BEACH",
    "ISLAND",
    "CAVE",
    "DESERT",
    "PALM TREE",
    "CACTUS",
    "MUSHROOM",
    "SUN",
    "MOON",
    "STAR",
    "CLOUD",
    "RAIN",
    "RAINBOW",
    "SNOW",
    "LIGHTNING",
    "TORNADO",
    "WIND",
    "WAVE",
    "LEAF",
    "PINE TREE",
    "SUNFLOWER",
    "ROSE",
    "LOTUS",
    "DAISY",
    "TULIP",
    "CACTUS",
    "VINE",
    "SEASHELL",

    /* ---------- SPACE ---------- */

    "SUN",
    "MOON",
    "EARTH",
    "MARS",
    "JUPITER",
    "SATURN",
    "PLANET",
    "STAR",
    "ASTRONAUT",
    "ALIEN",
    "ROCKET",
    "SPACESHIP",
    "UFO",
    "SATELLITE",
    "TELESCOPE",
    "COMET",
    "METEOR",
    "ASTEROID",
    "GALAXY",
    "MOON LANDING",
    "SPACE STATION",
    "BLACK HOLE",

    /* ---------- TOOLS ---------- */

    "HAMMER",
    "SCREWDRIVER",
    "WRENCH",
    "PLIERS",
    "SAW",
    "DRILL",
    "AXE",
    "SHOVEL",
    "RAKE",
    "HOE",
    "LADDER",
    "ROPE",
    "CHAIN",
    "NAIL",
    "SCREW",
    "BOLT",
    "TOOLBOX",
    "MEASURING TAPE",
    "FLASHLIGHT",
    "WORK GLOVES",
    "WHEELBARROW",
    "PAINT ROLLER",
    "PAINTBRUSH",
    "BUCKET",
    "HAMMER AND NAIL",

    /* ---------- BODY / HEALTH ---------- */

    "HAND",
    "FOOT",
    "EYE",
    "EAR",
    "NOSE",
    "MOUTH",
    "TOOTH",
    "HEART",
    "BRAIN",
    "BONE",
    "HAIR",
    "MUSTACHE",
    "BEARD",
    "FINGER",
    "THUMB",
    "ARM",
    "LEG",
    "KNEE",
    "ELBOW",
    "DOCTOR",
    "NURSE",
    "STETHOSCOPE",
    "BANDAGE",
    "THERMOMETER",
    "MEDICINE",
    "FIRST AID KIT",
    "WHEELCHAIR",
    "CRUTCH",
    "AMBULANCE",
    "HOSPITAL BED",

    /* ---------- PEOPLE / PROFESSIONS ---------- */

    "TEACHER",
    "STUDENT",
    "DOCTOR",
    "NURSE",
    "POLICE OFFICER",
    "FIREFIGHTER",
    "CHEF",
    "FARMER",
    "PILOT",
    "DRIVER",
    "SOLDIER",
    "ASTRONAUT",
    "ARTIST",
    "SINGER",
    "DANCER",
    "ACTOR",
    "PHOTOGRAPHER",
    "ENGINEER",
    "SCIENTIST",
    "BUILDER",
    "CARPENTER",
    "PLUMBER",
    "ELECTRICIAN",
    "BARBER",
    "BAKER",
    "FISHERMAN",
    "SAILOR",
    "MAILMAN",
    "JUDGE",
    "DETECTIVE",
    "MAGICIAN",
    "CLOWN",
    "PRINCESS",
    "KING",
    "QUEEN",
    "PIRATE",
    "NINJA",
    "SUPERHERO",

    /* ---------- FUN / TOYS ---------- */

    "BALL",
    "TEDDY BEAR",
    "DOLL",
    "TOY CAR",
    "YO-YO",
    "KITE",
    "ROBOT",
    "PUZZLE",
    "DICE",
    "DOMINO",
    "CHESS PIECE",
    "CARROM BOARD",
    "PLAYING CARDS",
    "SPINNING TOP",
    "TOY TRAIN",
    "TOY GUN",
    "BUBBLES",
    "BALLOON",
    "YO-YO",
    "MARBLE",
    "SLIME",
    "LEGO",
    "BUILDING BLOCKS",
    "JIGSAW PUZZLE",
    "BOARD GAME",
    "GAME CONTROLLER",
    "TAMBourINE",
    "KICK SCOOTER",
    "ROLLER SKATES",
    "SWING",

    /* ---------- FESTIVAL / CELEBRATION ---------- */

    "BIRTHDAY CAKE",
    "BIRTHDAY CANDLE",
    "BALLOON",
    "GIFT",
    "PRESENT",
    "PARTY HAT",
    "CONFETTI",
    "FIREWORK",
    "CHRISTMAS TREE",
    "SANTA CLAUS",
    "SNOWMAN",
    "CHRISTMAS STOCKING",
    "DIYA",
    "LANTERN",
    "CANDLE",
    "GARLAND",
    "FLOWER GARLAND",
    "DRUM",
    "MASK",
    "PARTY POPPER",
    "INVITATION",
    "WEDDING RING",
    "WEDDING CAKE",
    "BOUQUET",
    "UMBRELLA",
    "PARADE",

    /* ---------- EVERYDAY OBJECTS ---------- */

    "KEY",
    "LOCK",
    "WALLET",
    "PURSE",
    "BACKPACK",
    "SUITCASE",
    "BAG",
    "BOTTLE",
    "GLASS",
    "MUG",
    "PLATE",
    "BOWL",
    "SPOON",
    "FORK",
    "KNIFE",
    "NAPKIN",
    "TISSUE",
    "TOOTHBRUSH",
    "TOOTHPASTE",
    "SOAP",
    "COMB",
    "MIRROR",
    "WATCH",
    "PHONE",
    "CHARGER",
    "CABLE",
    "REMOTE",
    "CLOCK",
    "CALENDAR",
    "NEWSPAPER",
    "MAGAZINE",
    "BOOK",
    "PEN",
    "PENCIL",
    "ERASER",
    "RULER",
    "SCISSORS",
    "GLUE",
    "TAPE",
    "BOX",
    "BAG",
    "BASKET",
    "BELL",
    "WHISTLE",
    "CANDLE",
    "MATCHBOX",
    "COIN",
    "MONEY",
    "CREDIT CARD",
    "PASSPORT",

    /* ---------- ACTIONS / ACTIVITIES ---------- */

    "RUNNING",
    "WALKING",
    "JUMPING",
    "SWIMMING",
    "DANCING",
    "SINGING",
    "COOKING",
    "READING",
    "WRITING",
    "DRAWING",
    "PAINTING",
    "SLEEPING",
    "EATING",
    "DRINKING",
    "FISHING",
    "CAMPING",
    "HIKING",
    "CYCLING",
    "DRIVING",
    "FLYING",
    "SAILING",
    "SKATING",
    "SKIING",
    "SURFING",
    "SHOPPING",
    "TEACHING",
    "STUDYING",
    "PLAYING",
    "WATCHING TV",
    "TAKING PHOTO",
    "MAKING MUSIC",
    "PLAYING CRICKET",
    "PLAYING FOOTBALL",
    "PLAYING TENNIS",
    "FLYING KITE",
    "RIDING BICYCLE",
    "RIDING HORSE",
    "CLIMBING",
    "COOKING FOOD",
    "WASHING CLOTHES",

    /* ---------- OBJECT COMBINATIONS ---------- */

    "TREASURE CHEST",
    "SCHOOL BUS",
    "ICE CREAM TRUCK",
    "FIRE TRUCK",
    "POLICE CAR",
    "RACE TRACK",
    "CAMPFIRE",
    "TENT",
    "SLEEPING BAG",
    "PICNIC BASKET",
    "BEACH BALL",
    "SAND CASTLE",
    "SNOWMAN",
    "TREE HOUSE",
    "BIRD HOUSE",
    "DOG HOUSE",
    "MAILBOX",
    "TRAFFIC LIGHT",
    "STOP SIGN",
    "ROAD SIGN",
    "PARK BENCH",
    "FOUNTAIN",
    "SWIMMING POOL",
    "DIVING BOARD",
    "PLAYGROUND",
    "SLIDE",
    "SWING SET",
    "MERRY-GO-ROUND",
    "FERRIS WHEEL",
    "ROLLER COASTER",
    "CIRCUS TENT",
    "CIRCUS ELEPHANT",
    "MAGIC WAND",
    "PIRATE SHIP",
    "TREASURE MAP",
    "SWORD",
    "SHIELD",
    "CROWN",
    "CASTLE TOWER",
    "DRAWBRIDGE",
    "DRAGON",
    "UNICORN",
    "MERMAID",
    "FAIRY",
    "GHOST",
    "VAMPIRE",
    "WITCH",
    "WIZARD",

    /* ---------- MORE EASY DRAWABLE WORDS ---------- */

    "ANCHOR",
    "BELL",
    "BINOCULARS",
    "BOW",
    "ARROW",
    "COMPASS",
    "FLAG",
    "GLOBE",
    "MAP",
    "TELESCOPE",
    "MAGNIFYING GLASS",
    "HOURGLASS",
    "SCALE",
    "THERMOMETER",
    "MAGNET",
    "LIGHTHOUSE",
    "WHEEL",
    "TIRE",
    "ENGINE",
    "STEERING WHEEL",
    "BRAKE",
    "PEDAL",
    "LICENSE PLATE",
    "TRAFFIC CONE",
    "ROAD",
    "HIGHWAY",
    "TUNNEL",
    "BRIDGE",
    "STAIRS",
    "ESCALATOR",
    "ELEVATOR",
    "DOOR BELL",
    "KEYBOARD KEY",
    "COMPUTER SCREEN",
    "PHONE SCREEN",
    "CAMERA LENS",
    "PHOTO",
    "VIDEO CAMERA",
    "TRIPOD",
    "BATTERY",
    "PLUG",
    "SOCKET",
    "SWITCH",
    "LIGHT SWITCH",
    "FAN",
    "CEILING FAN",
    "TABLE FAN",
    "AIR CONDITIONER",
    "HEATER",
    "FIREPLACE",
    "CHIMNEY",

    /* ---------- FINAL EXTRA WORDS ---------- */

    "CLOUD",
    "SUNGLASSES",
    "RAIN BOOTS",
    "RAINBOW",
    "SNOWFLAKE",
    "SNOWMAN",
    "RAINDROP",
    "THUNDER",
    "LIGHTNING",
    "TORNADO",
    "VOLCANO",
    "EARTHQUAKE",
    "WAVE",
    "ISLAND",
    "SHIPWRECK",
    "PIRATE",
    "TREASURE",
    "GOLD COIN",
    "DIAMOND",
    "RUBY",
    "EMERALD",
    "PEARL",
    "RING",
    "CROWN",
    "NECKLACE",
    "BRACELET",
    "KEY",
    "LOCK",
    "CHEST",
    "ROPE",
    "LADDER",
    "HAMMOCK",
    "TENT",
    "CAMPFIRE",
    "TORCH",
    "CAMPING BAG",
    "BINOCULARS",
    "COMPASS",
    "MAP",
    "MOUNTAIN CLIMBER",
    "HIKER",
    "FISHING ROD",
    "FISHING BOAT",
    "FISH",
    "FISHING NET",
    "SEASHELL",
    "STARFISH",
    "JELLYFISH",
    "CORAL",
    "PALM TREE",
    "BEACH UMBRELLA",
    "BEACH CHAIR",
    "SANDCASTLE",
    "BEACH TOWEL",
    "SURFBOARD",
    "SWIMMER",
    "LIFEGUARD",
    "LIFEBUOY",
    "LIFE JACKET",
    "DIVING MASK",
    "SNORKEL",
    "FLIPPERS",
    "UNDERWATER CAMERA",
    "SUBMARINE",
    "TREASURE CHEST",
    "MERMAID",
    "OCTOPUS",
    "SHARK",
    "WHALE",
    "DOLPHIN",
    "SEAL",
    "TURTLE",
    "CRAB",
    "LOBSTER",
    "SEAHORSE",
    "STARFISH",
    "JELLYFISH",
    "ANCHOR",
    "SAIL",
    "PIRATE FLAG",
    "SHIP",
    "LIGHTHOUSE",
    "DOCK",
    "HARBOR",
    "BOAT",
    "CANOE",
    "KAYAK",
    "YACHT",
    "FERRY",
    "SAILOR",
    "CAPTAIN",
    "LIFEBOAT",
    "BUOY",
    "OAR",
    "PADDLE",
    "FISHING ROD",
    "NET",
    "HOOK",
    "WORM",
    "BAIT",
    "FISH",
    "AQUARIUM",
    "FISHBOWL",
    "GOLDFISH",
    "SEAWEED",
    "CORAL REEF",
    "DIVING SUIT",
    "DIVING HELMET",
    "UNDERWATER CAMERA",
    "SCUBA DIVER"
];


/* =========================================================
   GAME STATE
========================================================= */

let players = [];

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

const playerInputs =
    document.getElementById("playerInputs");

const addPlayerBtn =
    document.getElementById("addPlayerBtn");

const startGameBtn =
    document.getElementById("startGameBtn");

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
        Math.floor(
            Math.random() * array.length
        )
    ];
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

        if (
            playerInputs.children.length < 10
        ) {
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

    inputs.forEach(
        (input, index) => {

            const name =
                input.value.trim() ||
                `Player ${index + 1}`;

            players.push({
                name: name,
                color: COLORS[index],
                votes: 0
            });

        }
    );

    /*
       Random Traitor
    */

    traitorIndex =
        Math.floor(
            Math.random() *
            players.length
        );

    /*
       Random secret word
       from the complete 1000-word pool
    */

    secretWord =
        randomItem(WORDS);

    /*
       Reset voting
    */

    votes =
        new Array(
            players.length
        ).fill(null);

    identityIndex = 0;

    /*
       IMPORTANT:
       Category screen is completely skipped.
    */

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

    identityReveal.classList.add(
        "hidden"
    );

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
                    You do NOT know the secret word.
                </p>

                <p class="muted">
                    Watch the drawing carefully,
                    figure out what everyone is drawing,
                    and avoid getting caught.
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

    if (
        identityIndex >=
        players.length
    ) {

        startDrawingPhase();

    } else {

        setupIdentityScreen();

    }
}


/* =========================================================
   CANVAS
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

    setTimeout(
        () => {

            resizeCanvas();

            clearCanvas();

            startPlayerTurn();

        },
        100
    );
}


function clearCanvas() {

    const rect =
        canvas.getBoundingClientRect();

    ctx.save();

    ctx.setTransform(
        1,
        0,
        0,
        1,
        0,
        0
    );

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
        setInterval(
            () => {

                timerValue--;

                timerDisplay.textContent =
                    timerValue;

                if (
                    timerValue <= 0
                ) {

                    clearTimer();

                    endPlayerTurn();

                }

            },
            1000
        );
}


function clearTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;
    }
}


/* =========================================================
   DRAWING
========================================================= */

function getPointerPosition(event) {

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
            players[
                currentPlayerIndex
            ].color;

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
   END PLAYER TURN
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

        if (
            currentRound === 1
        ) {

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
        new Array(
            players.length
        ).fill(null);

    /*
       Reset vote counters
    */

    players.forEach(
        player => {
            player.votes = 0;
        }
    );

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

            /*
               Cannot vote for yourself
            */

            if (
                index ===
                currentVoteIndex
            ) {
                return;
            }

            const button =
                document.createElement(
                    "button"
                );

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

                    selectedVote =
                        index;

                    document
                        .querySelectorAll(
                            ".vote-option"
                        )
                        .forEach(
                            option =>
                                option.classList
                                    .remove(
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

    if (
        selectedVote === null
    ) {
        return;
    }

    votes[
        currentVoteIndex
    ] = selectedVote;

    players[
        selectedVote
    ].votes++;

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
            .map(
                (player, index) => ({
                    ...player,
                    index
                })
            )
            .sort(
                (a, b) =>
                    b.votes -
                    a.votes
            );

    sortedPlayers.forEach(
        (player, position) => {

            const row =
                document.createElement(
                    "div"
                );

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

            resultsList.appendChild(
                row
            );

        }
    );


    const highestVotes =
        Math.max(
            ...players.map(
                player =>
                    player.votes
            )
        );

    /*
       Strict majority:
       more than half of all players
    */

    const majority =
        players.length / 2;

    const topPlayers =
        players.filter(
            player =>
                player.votes ===
                highestVotes
        );

    const hasMajority =
        highestVotes >
        majority;

    /*
       The Traitor must be the ONLY
       player with the majority.
    */

    const traitorHasMajority =
        hasMajority &&
        topPlayers.length === 1 &&
        players[
            traitorIndex
        ].votes ===
            highestVotes;


    if (
        traitorHasMajority
    ) {

        finalResult =
            "traitor-caught";

        resultSummary.innerHTML = `
            <strong>
                The group found the Traitor!
            </strong>

            <p class="muted">
                But the Traitor gets one final
                chance to guess the secret word.
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

            showScreen(
                "traitorGuess"
            );

        } else {

            showFinalScreen(
                false,
                "The group failed to catch the Traitor."
            );

        }

    }
);


/* =========================================================
   TRAITOR FINAL GUESS
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

        if (
            event.key ===
            "Enter"
        ) {

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
        players[
            traitorIndex
        ].name;

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

        secretWord = "";

        traitorIndex = -1;

        identityIndex = 0;

        currentRound = 1;

        currentPlayerIndex = 0;

        currentVoteIndex = 0;

        votes = [];

        finalResult = null;

        clearTimer();

        guessInput.value = "";

        guessArea.classList.add(
            "hidden"
        );

        showGuessInputBtn.style.display =
            "block";

        playerInputs.innerHTML = "";

        createPlayerInput(
            "Player 1"
        );

        createPlayerInput(
            "Player 2"
        );

        createPlayerInput(
            "Player 3"
        );

        showScreen("setup");

    }
);


/* =========================================================
   PREVENT PAGE SCROLL DURING DRAWING
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
                event.target ===
                canvas
            ) {

                event.preventDefault();

            }

        }

    },
    {
        passive: false
    }
);
