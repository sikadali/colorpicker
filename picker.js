colorpicker.style.display = "none";

function openOnglet(event, id) {
     let tabcontents = Array.from(document.getElementsByClassName("tabcontent"));
     tabcontents.forEach((content) => {
          content.style.display = "none";
     });

     document.getElementById(id).style.display = "flex";
}
