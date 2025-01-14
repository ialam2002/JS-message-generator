// Arrays holding the different parts of the message
const subjects = ["You", "Your team", "The world", "Your future", "Your dreams"];
const verbs = ["will achieve", "is destined to", "can overcome", "is about to"];
const objects = ["greatness", "success", "happiness", "the impossible", "unimaginable possibilities"];
const endings = ["with perseverance.", "if you believe in yourself.", "just stay focused.", "don't give up."];

// Function to generate a random message
function generateMessage() {
    // Randomly select one item from each array
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    // Combine the selected items into a message
    const message = `${subject} ${verb} ${object} ${ending}`;

    return message;
}

// Display the message
console.log(generateMessage());
