var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }
    else{
        icon.src = "moon.png";
    }
}
const categorySelect = document.getElementById("categorySelect");

const quoteText = document.getElementById("quoteText");
const generateButton = document.getElementById("generateButton");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

categorySelect.addEventListener("change", function() {
    const selectedValue = categorySelect.value;

    if (selectedValue === "none"){
        quoteText.textContent = "Select a category to generate a quote";
        generateButton.disabled = true;
        previousButton.disabled = true;
        nextButton.disabled = true;
    }
    else{
        generateButton.disabled = false;
        previousButton.disabled = false;
        nextButton.disabled = false;
    }
    if (selectedValue === "science") {
        const quotesScience = [
            "“Everything is theoretically impossible until it is done.” – Robert A. Heinlein",
            "“Innovation distinguishes between a leader and a follower.” - Steve Jobs",
            "“The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.” – Isaac Asimov ",
            "“If we knew what it was we were doing, it would not be called research, would it?” – Albert Einstein ",
            "“Science is magic that works.” – Kurt Vonnegut",
            "“The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.” – Nikola Tesla",
            "“The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists.” – Erwin Schrödinger"
        ];

        generateButton.addEventListener("click", generateRandomQuote);

        function generateRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotesScience.length);
            const randomQuote = quotesScience[randomIndex];
            quoteText.textContent = randomQuote;
        }

        let currentQuoteIndex = 0;

        previousButton.addEventListener("click", showPreviousQuote);
        nextButton.addEventListener("click", showNextQuote);

        function showPreviousQuote() {
            if (currentQuoteIndex <= 0) currentQuoteIndex=quotesScience.length;
            currentQuoteIndex--;
            return displayQuote(currentQuoteIndex);
        }

        function showNextQuote() {
            if (currentQuoteIndex >= quotesScience.length-1) currentQuoteIndex = -1;
            currentQuoteIndex++;
            return displayQuote(currentQuoteIndex);
        }

        function displayQuote(index) {
            quoteText.textContent = quotesScience[index];
        }

    }

    else if (selectedValue === "inspiration") {
        const quotesInsp = [
            "“The only way to do great work is to love what you do.” - Steve Jobs",
            "“Learn as if you will live forever, live like you will die tomorrow.” - Mahatma Gandhi",
            "“Your time is limited, don't waste it living someone else's life.” - Steve Jobs",
            "“When you change your thoughts, remember to also change your world.” - Norman Vincent Peale",
            "“The future belongs to those who believe in the beauty of their dreams.” - Eleanor Roosevelt",
            "“Strive not to be a success, but rather to be of value.” - Albert Einstein",
            "“Success is not final, failure is not fatal: It is the courage to continue that counts.” - Winston Churchill"
        ];

        generateButton.addEventListener("click", generateRandomQuote);

        function generateRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotesInsp.length);
            const randomQuote = quotesInsp[randomIndex];
            quoteText.textContent = randomQuote;
        }

        let currentQuoteIndex = 0;

        previousButton.addEventListener("click", showPreviousQuote);
        nextButton.addEventListener("click", showNextQuote);

        function showPreviousQuote() {
            if (currentQuoteIndex <= 0) currentQuoteIndex=quotesInsp.length;
            currentQuoteIndex--;
            return displayQuote(currentQuoteIndex);
        }

        function showNextQuote() {
            if (currentQuoteIndex >= quotesInsp.length-1) currentQuoteIndex = -1;
            currentQuoteIndex++;
            return displayQuote(currentQuoteIndex);
        }

        function displayQuote(index) {
            quoteText.textContent = quotesInsp[index];
        }
    }
    
});

var text = document.getElementById("quoteText");
var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var textSize = 20;

inc.addEventListener("click", () => {
    textSize += 2; 
    text.style.fontSize = textSize + "px";
})
dec.addEventListener("click", () => {
    textSize -= 2; 
    text.style.fontSize = textSize + "px";
})
