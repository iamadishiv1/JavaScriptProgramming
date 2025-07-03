let testText = "The quick brown fox jumps over the lazy dog.";

let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById('inputText').value = testText;

    // Reset results and timer
    document.getElementById('output').innerHTML = '';
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById('btn');
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    //caculate time taken
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById('userInput').value;

    // Split using regex to handle spaces
    var typedWords = userTypedText.split(/\s+/).filter(function(word) {
        return word !== "";
    }).length;

    var wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60); //words per minute
    }

    //Display results
    document.getElementById('output').innerHTML =
        `<h2>Typing Test Results: </h2>
        <p>Time taken: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words typed: ${typedWords}</p>
        <p>Speed: ${wpm} WPM</p>`;

    //Reset the button now
    var button = document.getElementById('btn');
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}