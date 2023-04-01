console.log("Random Joke Generator");

const jokeBox = document.querySelector(".actualJoke");
const btn = document.querySelector(".btn");
const jokeUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,sexist,explicit&type=single";

function crackJoke() {
    jokeBox.classList.remove("effect");
    fetch(jokeUrl)
        .then(data => data.json())
        .then(item => {
            jokeBox.innerText = `${item.joke}`;
            jokeBox.classList.add("effect");
        })
}

btn.addEventListener("click", function () {
    crackJoke();
});