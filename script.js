window.addEventListener("keydown", (event) => {

    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key="${code}"]`);

    if (!keyElement) return;



    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime = 0;
    audio.play();

    switch (keyCode) {

        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
            animateHiHatClosed();
            break;


    }
});

const removeCrashRideTransition = e => {

    if (e.propertyName !== 'transofrm') return;

}