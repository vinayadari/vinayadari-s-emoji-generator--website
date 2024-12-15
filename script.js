const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const emojiResult = document.getElementById("emojiResult");
const relatedEmojis = document.getElementById("relatedEmojis");

const randomBtn = document.getElementById("randomBtn");
const emojiDisplay = document.getElementById("emojiDisplay");


const emojis = [
    "😀", "😂", "😍", "🤔", "👍", "🎉", "🔥", "🌟", "💖", "😎",
    "🤯", "🎂", "💡", "🐶", "🐱", "🌈", "🍎", "🏀", "🎵", "📚",
    "🚗", "✈️", "💪", "🌍", "💎", "📱", "🎮", "🛏️", "⚽", "🎸",
    "🥳", "🎁", "🏆", "🌻", "🎨", "🎺", "🚀", "🍕", "🍩", "🍔",
    "☕", "🎓", "🌙", "🎠", "🖼️", "📖", "🖊️", "🖥️", "🖱️", "🔒",
    "📢", "🛒", "🏖️", "🏔️", "🗺️", "📷", "📹", "🧸", "💌", "💤",
    "🎧", "🔌", "🔨", "🚪", "🏠", "📐", "📏", "📎", "📂", "📒",
    "🔑", "🧪", "🔬", "⚛️", "🛰️", "🌌", "🌠", "⚡", "🌊", "🎯",
    "🎱", "🏹", "🛹", "🚴", "🏋️", "🤹", "🥇", "🎽", "🎿", "🚤",
];

const emojiData = {
    smile: "😀",
    laugh: "😂",
    heart: "❤️",
    fire: "🔥",
    star: "⭐",
    sad: "😢",
    angry: "😠",
    thumbs_up: "👍",
    party: "🎉",
};

const relatedEmojiData = {
    smile: ["😁", "😊", "😄"],
    laugh: ["🤣", "😅", "😊"],
    heart: ["💖", "💕", "💞"],
    fire: ["🔥", "🌋", "🔥"],
    star: ["🌟", "✨", "⭐"],
    sad: ["😞", "😔", "😭"],
    angry: ["😡", "😤", "👿"],
    thumbs_up: ["👌", "👍", "✌️"],
    party: ["🎊", "🎈", "🎶"],
};

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        displaySearchResult(query);
    });
}

function displaySearchResult(query) {
    emojiResult.innerHTML = "";
    relatedEmojis.innerHTML = "";

    const matchedEmoji = Object.keys(emojiData).find((key) => key.includes(query));
    if (matchedEmoji) {
        emojiResult.innerHTML = `<div>${emojiData[matchedEmoji]}</div>`;
        relatedEmojis.innerHTML = relatedEmojiData[matchedEmoji]
            .map((emoji) => `<div>${emoji}</div>`)
            .join("");
    } else {
        emojiResult.textContent = "No emoji found!";
    }
}

if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        displayRandomEmoji(randomEmoji);
    });
}

function displayRandomEmoji(emoji) {
    emojiDisplay.innerHTML = `<div>${emoji}</div>`;
}
