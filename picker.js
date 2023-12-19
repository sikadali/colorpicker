const pipeButton = document.querySelector(".pipe");
const pickedColor = document.querySelector(".picked-color");

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

function hexToRgb(sRGBHex) {
     let hex = document.getElementById("hex");
     hex.innerHTML = `HEX: ${sRGBHex}`;

     let rgb = document.getElementById("rgb");
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
