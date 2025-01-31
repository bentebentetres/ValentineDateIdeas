const dateIdeas = [
    "Go for a romantic picnic in the park.",
    "Take a sunset walk on the beach.",
    "Have a cozy movie night at home.",
    "Go to a fancy restaurant and dress up.",
    "Visit an amusement park and try every ride.",
    "Plan a surprise date for each other.",
    "Bembang",
    "Have a DIY home spa night together.",
    "Take a dance class together.",
    "Visit a museum or art gallery.",
    "Go to a karaoke bar and sing your heart out.",
    "Try a new hobby together, like pottery or painting.",
    "Have a themed dinner night at home.",
    "Go stargazing on a clear night.",
    "Take a cooking class and learn to make something new.",
    "Go to a local coffee shop and try new drinks.",
    "Have a picnic in a botanical garden.",
    "Take a bike ride together through the city.",
    "Go for a hike in the mountains.",
    "Attend a local live music event.",
    "Go bowling for a fun date night.",
    "Visit a farmer's market and try local products.",
    "Take a pottery or ceramics class together.",
    "Explore a new city or neighborhood together.",
    "Have a fondue night with cheese and chocolate.",
    "Take a yoga class together.",
    "Go ice skating or roller skating.",
    "Rent a cabin in the woods for a weekend getaway.",
    "Go on a scenic drive and stop at interesting places.",
    "Visit an aquarium and learn about marine life.",
    "Go to a zoo and watch the animals.",
    "Go horseback riding in the countryside.",
    "Try an escape room together and work as a team.",
    "Have a photography day, taking pictures of each other and nature.",
    "Go to a drive-in movie theater for a retro date.",
    "Have a cooking challenge at home.",
    "Go to a paint-and-sip class.",
    "Try a new type of cuisine for dinner.",
    "Attend a food festival and try different foods.",
    "Have a picnic at the beach.",
    "Go on a boat ride together.",
    "Try a tandem bike ride together.",
    "Go to a botanical garden for a peaceful walk.",
    "Take a scenic hot air balloon ride.",
    "Go rock climbing together.",
    "Visit a theme park and try every ride.",
    "Plan a surprise romantic scavenger hunt.",
    "Visit a historical site or landmark.",
    "Go to a rooftop bar and enjoy drinks with a view.",
    "Go to a comedy club and laugh together.",
    "Go to a food truck park and try different foods.",
    "Try an outdoor movie screening in a park.",
    "Spend a day at a beach resort.",
    "Take a pottery class and make something special for each other.",
    "Plan a candlelit dinner at home with homemade food.",
    "Visit a local thrift store and pick out outfits for each other.",
    "Try a couple’s massage at a spa.",
    "Go for a swim at a local pool or beach.",
    "Try surfing or paddleboarding together.",
    "Take a scenic train ride through the countryside.",
    "Go on a historical walking tour in your city.",
    "Visit a farmers’ market and buy fresh ingredients to cook a meal together."
];

const singleOption = [
    "Just sleep bro",
    "Cuhhh"
]


function generateIdea() {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    document.getElementById("date-idea").innerText = dateIdeas[randomIndex];
}

function generateIdeaSingle () {
    const singlearray = Math.floor(Math.random() * singleOption.length);
    document.getElementById("Single").innerText = singleOption[singlearray];
}
