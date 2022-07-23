//querySelectors
let buttonDoSomething = document.querySelector("button");
let catEatBurgImg = document.querySelector("img");
let desc = document.querySelector("p");
let catEatBurgImgClass = catEatBurgImg.className;
let hearbeat = document.getElementById('heartbeat');
let audios = document.querySelectorAll("audio");

//eventListeners
buttonDoSomething.addEventListener('click', doSomethingFunc);

//below contains audio function
buttonDoSomething.addEventListener('click', function() {
    [].forEach.call(audios, function(audio) {
      audio.play();
    });
    }, false);

buttonDoSomething.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
    // do whatever
    audio.play();
    });
    }, false);

buttonDoSomething.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

//shrinks cat/grows cat
function doSomethingFunc() {

    if (catEatBurgImg.classList.contains('buttonPressedCss')) {
        catEatBurgImg.classList.remove("buttonPressedCss");
        changePElement();
    } else {
        catEatBurgImg.classList.add("buttonPressedCss");
        changePElement();
    }
}

//changes current description
function changePElement(){
    let content = desc.innerText;
    if(content === "Such little small now...") {
        desc.innerText = "Dang she doo sure like'm booger"
    } else {
        desc.innerText = "Such little small now..."
    }
}

