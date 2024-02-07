// after content loaded, function inside will run
window.addEventListener('load', () => {
    const sound = document.querySelectorAll(".sounds");
    // get all the smalls pads within the main pad i.e. pad1, pad2, pad3
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector('.visual');
    // for when clicking on pad, color matching bubble will pop
    const colors = [
        "#a2ffcc",
        "#cc5d5d",
        "#c7870f",
        "#e0d750",
        "#218fbe",
        "#b86ab0"
    ];


    // sounds process
    pads.forEach((pad, index) => {
        // for each click, function will run
        pad.addEventListener('click', function(){
            // reset the sound when clicking again
            sound[index].currentTime = 0;
            //play the sound
            sound[index].play();

            createBouncingBubbles(index);
        });
    });

    //function for bubbles
    const createBouncingBubbles = index => {
        const bubble = document.createElement("div");
        //attach div to visual
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 2s ease';
        //doesn't continue to pop up and crash app
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };
});

