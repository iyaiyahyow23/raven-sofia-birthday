const openingScreen = document.getElementById("openingScreen");
const openButton = document.getElementById("openButton");

const passwordScreen = document.getElementById("passwordScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const lettersScreen = document.getElementById("lettersScreen");
const memoriesScreen = document.getElementById("memoriesScreen");
const reasonsScreen = document.getElementById("reasonsScreen");
const musicScreen = document.getElementById("musicScreen");
const poemScreen = document.getElementById("poemScreen");

const screens = [
    passwordScreen,
    birthdayScreen,
    lettersScreen,
    memoriesScreen,
    reasonsScreen,
    musicScreen,
    poemScreen

];

function hideAllScreens() {

    screens.forEach(function (screen) {

        if (screen) {

            screen.classList.remove("show");
            screen.style.display = "none";
            screen.style.pointerEvents = "none";
        }

    });

}

function showScreen(screen) {

    hideAllScreens();

    if (screen) {

        screen.style.display = "flex";
        screen.style.pointerEvents = "auto";
        screen.classList.add("show");
    }

}

hideAllScreens();

if (openingScreen) {

    openingScreen.style.display = "flex";
    openingScreen.style.opacity = "1";
    openingScreen.style.pointerEvents = "auto";
}

if (openButton && openingScreen && passwordScreen) {
    openButton.addEventListener("click", function () {
        openingScreen.classList.add("fade-out");
        setTimeout(function () {
            openingScreen.style.display = "none";
            openingScreen.style.pointerEvents = "none";
            showScreen(passwordScreen);

        }, 800);

    });

}

const lettersButton = document.getElementById("lettersButton");
const backButton = document.getElementById("backButton");

if (lettersButton) {
    lettersButton.addEventListener("click", function () {
        showScreen(lettersScreen);

    });

}


if (backButton) {
    backButton.addEventListener("click", function () {
        showScreen(birthdayScreen);

    });

}

const memoriesButton = document.getElementById("memoriesButton");
const memoriesBackButton =
    document.getElementById("memoriesBackButton");

if (memoriesButton) {
    memoriesButton.addEventListener("click", function () {
        showScreen(memoriesScreen);

    });

}

if (memoriesBackButton) {
    memoriesBackButton.addEventListener("click", function () {
        showScreen(birthdayScreen);

    });

}

const photos =
    document.querySelectorAll(".photo-placeholder img");
const photoViewer =
    document.getElementById("photoViewer");
const viewerImage =
    document.getElementById("viewerImage");
const closePhotoButton =
    document.getElementById("closePhotoButton");

if (photos.length > 0 && photoViewer && viewerImage) {

    photos.forEach(function (photo) {
        photo.addEventListener("click", function () {
            viewerImage.src = photo.src;
            photoViewer.classList.add("show");

        });

    });

}

if (closePhotoButton && photoViewer) {
    closePhotoButton.addEventListener("click", function () {
        photoViewer.classList.remove("show");

    });

}


if (photoViewer) {
    photoViewer.addEventListener("click", function (event) {
        if (event.target === photoViewer) {
            photoViewer.classList.remove("show");

        }

    });

}

const reasonsButton =
    document.getElementById("reasonsButton");
const reasonsBackButton =
    document.getElementById("reasonsBackButton");


if (reasonsButton) {
    reasonsButton.addEventListener("click", function () {
        showScreen(reasonsScreen);

    });

}

if (reasonsBackButton) {
    reasonsBackButton.addEventListener("click", function () {
        showScreen(birthdayScreen);

    });

}

const sealButton =
    document.getElementById("sealButton");
const envelope =
    document.querySelector(".envelope");

if (sealButton && envelope) {
    sealButton.addEventListener("click", function () {
        envelope.classList.add("open");

    });

}

const passwordError =
    document.getElementById("passwordError");
const pinButtons =
    document.querySelectorAll(".pin-button[data-number]");
const pinDots =
    document.querySelectorAll(".pin-dot");
const deletePin =
    document.getElementById("deletePin");

let enteredPin = "";
const correctPassword = "091509";

function updatePinDots() {
    pinDots.forEach(function (dot, index) {
        if (index < enteredPin.length) {
            dot.classList.add("filled");
        } else {
            dot.classList.remove("filled");

        }

    });

}

pinButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (enteredPin.length >= 6) {
            return;
        }
        enteredPin += button.dataset.number;
        updatePinDots();
        if (passwordError) {
            passwordError.textContent = "";

        }

        if (enteredPin.length === 6) {
            setTimeout(function () {
                checkPassword();

            }, 200);

        }

    });

});

if (deletePin) {
    deletePin.addEventListener("click", function () {
        if (enteredPin.length > 0) {

            enteredPin =
                enteredPin.slice(0, -1);

            updatePinDots();

        }

    });

}

function checkPassword() {

    if (enteredPin === correctPassword) {

        enteredPin = "";

        updatePinDots();

        if (passwordError) {

            passwordError.textContent = "";

        }

        showScreen(birthdayScreen);

    } else {

        if (passwordError) {

            passwordError.textContent =
                "eengkk engot";

        }

        enteredPin = "";

        updatePinDots();

    }

}

const musicButton =
    document.getElementById("musicButton");

const musicBackButton =
    document.getElementById("musicBackButton");


if (musicButton) {

    musicButton.addEventListener("click", function () {

        showScreen(musicScreen);

    });

}


if (musicBackButton) {

    musicBackButton.addEventListener("click", function () {

        showScreen(birthdayScreen);

    });

}

const poemButton =
    document.getElementById("poemButton");

const poemBackButton =
    document.getElementById("poemBackButton");


if (poemButton) {

    poemButton.addEventListener("click", function () {

        showScreen(poemScreen);

    });

}


if (poemBackButton) {

    poemBackButton.addEventListener("click", function () {

        showScreen(birthdayScreen);

    });

}