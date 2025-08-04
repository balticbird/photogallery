let myImages = [
  "ara.jpeg",
  "baumkanguru.jpeg",
  "blauschnabel.jpeg",
  "blueeisvogel.jpeg",
  "delphin.jpeg",
  "eisvogel.jpeg",
  "eule.jpeg",
  "felsenkanguru.jpeg",
  "ibis.jpeg",
  "kakadu.jpeg",
  "kanguru.jpeg",
  "kassowar.jpeg",
  "koala.jpeg",
  "krokodil.jpeg",
  "papagei.jpeg",
  "pelikan.jpeg",
  "turkey.jpeg",
];

function render() {
  const gallery = document.getElementById("imgcontainer");
  gallery.innerHTML = "";
  for (let index = 0; index < myImages.length; index++) {
    let element = "/sources/img/" + myImages[index];
    gallery.innerHTML += `<img onclick="getOverlay(${index})" id="newImg" src=${element} alt="">`;
  }
}

function getOverlay(i) {
  const overlayRef = document.getElementById("myoverlay");
  overlayRef.classList.remove("d_none");
  overlayRef.innerHTML = getTemplate(i);
  window.onclick = function (event) {
    if (event.target == overlayRef) {
      overlayRef.classList.add("d_none");
    }
  };
}
function removeOverlay() {
  const overlayRef = document.getElementById("myoverlay");
  overlayRef.classList.add("d_none");
}

function getTemplate(i) {
  let element = "/sources/img/" + myImages[i];
  return `<div id="singleView">
    <button onclick="removeOverlay()" class="button">X</button>
    <img onclick0"" id="" src=${element} alt="">
    <button onclick="back(${i})">left</button>
    <label id="label">${i + 1} von ${myImages.length}</label>
    <button onclick="forward(${i})">right</button>`;
}

function back(i) {
  i = i - 1;
  if (i == -1) {
    i = myImages.length - 1;
  }
  getOverlay(i);
}

function forward(i) {
  i = i + 1;
  if (i == myImages.length) {
    i = 0;
  }
  getOverlay(i);
}
