$(document).ready(function() { // begin document.ready block

    /* var classmates = [{"firstname":"Ariba ","lastname":"Alvi","zodiac":"Capricorn","favcolor":"Burgundy","city":"New York","hometown":"Edison","food":"PIZZA","drink":"Latte","animal":"Kangaroo"},
    {"firstname":"Desiree","lastname":"Desario","zodiac":"Taurus ","favcolor":"Yellow","city":"Tokyo ","hometown":"San Dimas ","food":"Buffalo Wings","drink":"Marlon Brando","animal":"Ferret"},
    {"firstname":"Joy","lastname":"Hahn","zodiac":"Scorpio","favcolor":"White","city":"DC","hometown":"Columbia","food":"fettucine alfredo","drink":"Green tea","animal":"Chow dog"},
    {"firstname":"Rasha","lastname":"Fierce","zodiac":"Sagittarius","favcolor":"Red","city":"Chicago","hometown":"Khartoum","food":"Wings","drink":"whiskey ginger ale","animal":"Goldie"},
    {"firstname":"Stephanie ","lastname":"Wu","zodiac":"Pisces","favcolor":"White","city":"Taiwan","hometown":"Neverland","food":"Trader Joes Pretzels","drink":"straight whiskey ","animal":"Lemur"},
    {"firstname":"Jen","lastname":"Ramos","zodiac":"Libra","favcolor":"Dark Cyan","city":"Oakland","hometown":"Merced","food":"Chicken adobo","drink":"whiskey sour","animal":"An asshole horse named Lily"},
    {"firstname":"Brian","lastname":"Bencomo","zodiac":"Leo","favcolor":"Blue","city":"DC","hometown":"Monterey Park","food":"Anything good","drink":"coffee","animal":"tiger"},
    {"firstname":"jonathan","lastname":"shifflett","zodiac":"capricorn","favcolor":"teal","city":"louisville","hometown":"st. helena","food":"tacos","drink":"ginger tea","animal":"turtle"},
    {"firstname":"corinne","lastname":"dewitt","zodiac":"taurus","favcolor":"green","city":"paris","hometown":"portland","food":"cheese","drink":"wine","animal":"owl"},
    {"firstname":"Ruoran","lastname":"Wang","zodiac":"Taurus","favcolor":"White","city":"SF","hometown":"Shi Jiazhuang","food":"Noodle","drink":"black tea","animal":"Owl"},
    {"firstname":"Kevin","lastname":"Walker","zodiac":"Gemini","favcolor":"Blue","city":"Laughlin","hometown":"North Hollywood","food":"Milk Steak","drink":"Steel Reserve","animal":"Land Shark"},
    {"firstname":"Rachel ","lastname":"Cohrs","zodiac":"Scorpio","favcolor":"Purple","city":"Seattle","hometown":"Rochester","food":"Sushi","drink":"English Breakfast Tea Latte","animal":"Wallaby"},
    {"firstname":"Annelise","lastname":"Bamberg","zodiac":"Leo","favcolor":"Red","city":"LA","hometown":"Jakarta","food":"fish balls","drink":"Americano","animal":"Turtle"},
    {"firstname":"Lara","lastname":"Altunian","zodiac":"Virgo","favcolor":"Purple","city":"LA","hometown":"Buenos Aires","food":"Italian: Pasta","drink":"Gin Tonic","animal":"Giraffe"},
    {"firstname":"Ryan","lastname":"Hughley","zodiac":"Aquarius ","favcolor":"Peach Puff","city":"New Orleans","hometown":"Strangeways","food":"YumYum Papa Bramburg","drink":"Old Fashioned Men","animal":"Annelise"}]

    var len = classmates.length;

    console.log(len);

    //the for loop

    for ( var i = 0; i < len; i++){
        $("#fishballs").append("<div class='fishmonger'>" + classmates[i].firstname + " " + "<br><p>My favorite food is " + classmates[i].food + "</p></div>");
    } 
    */

    var professionals = [{
        "id": 2,
        "gamerAccount": "UNiVeRsE",
        "name": "Saahil Arora",
        "country": "United States",
        "totalEarned": "$2,053,337.64",
        "gameByHighestPaid": "Dota 2",
        "totalGame": "$2,053,337.64",
        "percentOfTotal": "100.00%",
        "typeOf Game": 11
    }, {
        "id": 76,
        "gamerAccount": "BaRRaCCuDDa",
        "name": "John Salter",
        "country": "United States",
        "totalEarned": "$305,839.98",
        "gameByHighestPaid": "Smite",
        "totalGame": "$305,839.98",
        "percentOfTotal": "100.00%",
        "typeOf Game": 31
    }, {
        "id": 77,
        "gamerAccount": "MLCst3alth",
        "name": "Brett Felley",
        "country": "United States",
        "totalEarned": "$305,839.98",
        "gameByHighestPaid": "Smite",
        "totalGame": "$305,839.98",
        "percentOfTotal": "100.00%",
        "typeOf Game": 31
    }, {
        "id": 89,
        "gamerAccount": "PawN",
        "name": "Heo, Won Seok",
        "country": "United States",
        "totalEarned": "$289,113.55",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$289,113.55",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 117,
        "gamerAccount": "flusha",
        "name": "Robin RÌ¦nnquist",
        "country": "United States",
        "totalEarned": "$242,430.08",
        "gameByHighestPaid": "Counter-Strike: Global Offensive",
        "totalGame": "$242,430.08",
        "percentOfTotal": "100.00%",
        "typeOf Game": 7
    }, {
        "id": 139,
        "gamerAccount": "Lilballz",
        "name": "Kuan Po Sung",
        "country": "United States",
        "totalEarned": "$217,429.72",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$217,429.72",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 141,
        "gamerAccount": "MiSTakE",
        "name": "Chen, Hui Chung",
        "country": "United States",
        "totalEarned": "$216,539.83",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$216,539.83",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 178,
        "gamerAccount": "Koro1",
        "name": "Tong, Yang",
        "country": "United States",
        "totalEarned": "$169,330.22",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$169,330.22",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 184,
        "gamerAccount": "xPeke",
        "name": "Enrique CedeÌ±o Martinez",
        "country": "United States",
        "totalEarned": "$162,900.73",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$162,900.73",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 192,
        "gamerAccount": "herO",
        "name": "Kim, Joon Ho",
        "country": "United States",
        "totalEarned": "$159,274.94",
        "gameByHighestPaid": "StarCraft II",
        "totalGame": "$159,274.94",
        "percentOfTotal": "100.00%",
        "typeOf Game": 33
    }, {
        "id": 210,
        "gamerAccount": "snax",
        "name": "Janusz Pogorzelski",
        "country": "United States",
        "totalEarned": "$147,934.41",
        "gameByHighestPaid": "Counter-Strike: Global Offensive",
        "totalGame": "$147,934.41",
        "percentOfTotal": "100.00%",
        "typeOf Game": 7
    }, {
        "id": 220,
        "gamerAccount": "Uzi",
        "name": "Jian, Zihao",
        "country": "United States",
        "totalEarned": "$144,197.74",
        "gameByHighestPaid": "League of Legends",
        "totalGame": "$144,197.74",
        "percentOfTotal": "100.00%",
        "typeOf Game": 22
    }, {
        "id": 243,
        "gamerAccount": "alohadance",
        "name": "Ilya Korobkin",
        "country": "United States",
        "totalEarned": "$125,533.88",
        "gameByHighestPaid": "Dota 2",
        "totalGame": "$125,533.88",
        "percentOfTotal": "100.00%",
        "typeOf Game": 11
    }, {
        "id": 254,
        "gamerAccount": "Ataraxia",
        "name": "Nate Mark",
        "country": "United States",
        "totalEarned": "$119,490.40",
        "gameByHighestPaid": "Smite",
        "totalGame": "$119,490.40",
        "percentOfTotal": "100.00%",
        "typeOf Game": 31
    }, ];

    //ALWAYS GET THE LEGNTH FIRST BEFORE PLAYING WITH THE DATA
    var len2 = professionals.length;
    console.log(len2);

    //THIS WILL LOOP ALL OF YOUR DATA SO THAT ALL VALUES WILL BE GRABBED. 
    for (var i = 0; i < len2; i++) {
        $("#professionals").append("<div class='datatpro'>" + professionals[i].gamerAccount + " " + "<br><p>earns a total of " + professionals[i].totalGame + "when playing " + professionals[i].gameByHighestPaid + "</p></div>");

    }


});