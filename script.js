window.onload = function () {
    'use strict';

    document.getElementById('toggle').onclick = function () {
        var overlay = document.getElementById("overlay");
        if (overlay.className === "overlay") {
            overlay.classList.add("overlay-active");
        } else {
            overlay.classList.remove("overlay-active");
        }
    };
};

