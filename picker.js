const SPACE = "";

const pipeButton = document.querySelector(".pipe");
const pickedColor = document.querySelector(".picked-color");
const hex = document.getElementById("hex");
const hexCopyButton = document.querySelector("#hex + span");
const rgbCopyButton = document.querySelector("#rgb + span");
const rgb = document.getElementById("rgb");

colorpicker.style.display = "none";

function openOnglet(event, id) {
     let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
     tabcontents.forEach((content) => {
          content.style.display = "none";
     });

     document.getElementById(id).style.display = "flex";
}

const pickColor = async () => {
     let eyeDropper = new EyeDropper();

     let { sRGBHex } = await eyeDropper.open();

     console.log(sRGBHex);
     pickedColor.style.backgroundColor = sRGBHex;
     hexToRgb(sRGBHex);
};

pipeButton.addEventListener("click", pickColor);
hexCopyButton.addEventListener("click", copyHexValue);
rgbCopyButton.addEventListener("click", copyRgbValue);

function hexToRgb(sRGBHex) {
     hex.innerHTML = `HEX: ${sRGBHex}`;

     // Remove the hash (#) if it exists
     sRGBHex = sRGBHex.replace(/^#/, "");

     // Parse the hex value into three separate R, G, B values
     var bigint = parseInt(sRGBHex, 16);
     var r = (bigint >> 16) & 255;
     var g = (bigint >> 8) & 255;
     var b = bigint & 255;

     // Return the RGB values as an object
     rgb.innerHTML = `RGB: rgb(${r}, ${g}, ${b})`;
}

function copyHexValue() {
     navigator.clipboard.writeText(hex.innerHTML.split("HEX: ")[1]);
}

function copyRgbValue() {
     navigator.clipboard.writeText(rgb.innerHTML.split("RGB: ")[1]);
}
