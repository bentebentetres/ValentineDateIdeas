const dateIdeas = [
    "haha.",
    "Roadtrip.",
    "Magpalunod.",
    "Sabay na tumalon sa tulay.",
    "Give flowers and chocolates.",
    "Bembang Ultimate Pro Max",
    "Bembang"
];

const singleOptions = [
    "Tulog na erp",
    "Naudlot ba?",
];

// Array of MP3 file names (Make sure they exist in the 'songs' folder)
const songFiles = [
    { title: "Sana - I Belong to the Zoo", file: "Sana.mp3" },
    { title: "Huling Sandali - December Avenue", file: "HulingSandali.mp3" },
    { title: "Glimpse of Us - Joji", file: "Joji -  Glimpse of Us.mp3" },
    { title: "Ulan - Cueshe", file: "Ulan.mp3" },
    { title: "Balang Araw - I Belong to the Zoo", file: "balang araw -Reginald dela cruz.mp3" },

];

let currentAudio = null; // Variable to store the current audio player

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    document.getElementById("date-idea").innerText = dateIdeas[randomIndex];
}

function generateIdeaSingle() {
    const randomIndex = Math.floor(Math.random() * singleOptions.length);
    const randomSong = Math.floor(Math.random() * songFiles.length);

    // Get the selected song details
    const songTitle = songFiles[randomSong].title;
    const songPath = `songs/${songFiles[randomSong].file}`; // Path to your MP3 file

    // Stop previous audio if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset the song to the beginning
    }

    // Create a new audio element
    currentAudio = new Audio(songPath);
    currentAudio.autoplay = true; // Enable autoplay
    currentAudio.controls = true; // Add controls for pause/play

    // Update the text and embed the song player
    document.getElementById("Single").innerHTML = `
        <p>${singleOptions[randomIndex]}</p>
        <p>Playing: ${songTitle}</p>
    `;

    // Append the audio player below the text
    document.getElementById("Single").appendChild(currentAudio);
}
