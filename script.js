const pop = (id) => {
    document.getElementById(id).style.visibility = "hidden";
}

const popSound = () => {
    var a = new Audio("./media/balloon-sound.wav");
    a.play();
}

const fireworksSound = () => {
    var a = new Audio("./media/fireworks.wav");
    a.play();
    setTimeout(() => {a.pause()}, 5000);
}

const fireworksDisplay = () => {
    document.getElementById("fireworks").style.visibility = "visible";
    
}