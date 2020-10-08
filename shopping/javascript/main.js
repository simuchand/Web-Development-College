//for banner slider
let counter = 1;
setInterval(function () {
    document.getElementById('banner-radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

//for today's deals counter
let launchDate = new Date("Oct 9, 2020 12:00:00").getTime();
let timer = setInterval(tick, 1000);

function tick () {
    let now = new Date().getTime();
    let t = launchDate - now;
    if (t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0"  + hours; }

        let min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (min < 10) { min = "0" + min; }

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        document.querySelector('#count-1').innerText = `Ends in  ${hours} : ${min} : ${secs}`;
        document.querySelector('#count-2').innerText = `Ends in  ${hours} : ${min} : ${secs}`;
        document.querySelector('#count-3').innerText = `Ends in  ${hours} : ${min} : ${secs}`;
        //console.log(`${days} : ${hours} : ${min} : ${secs}`)
        return `Ends in ${hours} : ${min} : ${secs}`
    }
}

//heart
const heart = document.querySelector('.fa-heart');
heart.addEventListener("click", function () {
    heart.style.color = "#db3236";
})
// for like and dislike button
/*const like = document.querySelector(".fa-heart");
const dislike = document.querySelector(".fa-thumbs-down");
like.addEventListener("click", function () {
    like.style.color = "#3cba54";
    dislike.style.color = "#000";
})
dislike.addEventListener("click", function () {
    dislike.style.color = "#db3236";
    like.style.color = "#000"
})*/