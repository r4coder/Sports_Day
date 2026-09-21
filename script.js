// Opening Ceremony
function OpeningCeremony(callback) {

    console.log("Sports Day Opening Ceremony Started!");

    let count = 1;

    let interval = setInterval(() => {

        console.log("Opening Ceremony - " + count);

        count++;

        if (count > 5) {
            clearInterval(interval);

            // Initialize scores
            let scores = {
                red: 0,
                blue: 0,
                green: 0,
                yellow: 0
            };

            console.log("Initial Scores:", scores);

            // Start the next event
            callback(scores);
        }

    }, 1000);
}


// 100 Meter Race
function Race100M(scores, callback) {

    console.log("\n100M Race starting...");

    setTimeout(() => {

        // Generate random race times
        let redTime = Math.floor(Math.random() * 5) + 10;
        let blueTime = Math.floor(Math.random() * 5) + 10;
        let greenTime = Math.floor(Math.random() * 5) + 10;
        let yellowTime = Math.floor(Math.random() * 5) + 10;

        let times = {
            red: redTime,
            blue: blueTime,
            green: greenTime,
            yellow: yellowTime
        };

        console.log("Race Times:", times);

        // Sort colors based on race time
        let colors = Object.keys(times);

        colors.sort((a, b) => times[a] - times[b]);

        // Award points
        scores[colors[0]] += 50;
        scores[colors[1]] += 30;
        scores[colors[2]] += 20;
        scores[colors[3]] += 10;

        console.log("Scores after 100M Race:", scores);

        // Move to Long Jump
        callback(scores);

    }, 3000);
}


// Long Jump
function LongJump(scores, callback) {

    console.log("\nLong Jump starting...");

    setTimeout(() => {

        // Randomly select a color
        let colors = ["red", "blue", "green", "yellow"];

        let randomIndex = Math.floor(Math.random() * colors.length);

        let selectedColor = colors[randomIndex];

        console.log("Long Jump winner:", selectedColor);

        // Award 150 points
        scores[selectedColor] += 150;

        console.log("Scores after Long Jump:", scores);

        // Move to High Jump
        callback(scores);

    }, 2000);
}


// High Jump
function HighJump(scores, callback) {

    console.log("\nHigh Jump starting...");

    let color = prompt(
        "Enter the color that achieved the highest jump:\nred, blue, green, yellow"
    );

    // Check whether input is empty
    if (color === null || color.trim() === "") {

        console.log("No color entered.");
        console.log("Scores remain unchanged:", scores);

        callback(scores);
        return;
    }

    color = color.trim().toLowerCase();

    // Check whether the color is valid
    if (scores[color] !== undefined) {

        scores[color] += 100;

        console.log("High Jump winner:", color);
        console.log("Scores after High Jump:", scores);

    } else {

        console.log("Invalid color entered.");
        console.log("Scores remain unchanged:", scores);
    }

    // Move to Award Ceremony
    callback(scores);
}


// Award Ceremony
function AwardCeremony(scores) {

    console.log("\n==============================");
    console.log("       AWARD CEREMONY");
    console.log("==============================");

    console.log("Final Scores:", scores);

    // Convert scores object into an array
    let results = Object.entries(scores);

    // Sort from highest score to lowest score
    results.sort((a, b) => b[1] - a[1]);

    console.log("\nWinners:");

    console.log("1st Place:", results[0][0], "-", results[0][1], "points");
    console.log("2nd Place:", results[1][0], "-", results[1][1], "points");
    console.log("3rd Place:", results[2][0], "-", results[2][1], "points");
    console.log("4th Place:", results[3][0], "-", results[3][1], "points");

    console.log("\nSports Day Completed!");
}


// Start the entire callback chain
OpeningCeremony((scores) => {

    Race100M(scores, (scores) => {

        LongJump(scores, (scores) => {

            HighJump(scores, (scores) => {

                AwardCeremony(scores);

            });

        });

    });

});
