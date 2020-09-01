var div_sizes = [];
var divs = [];
var array_size = 60;
var c_delay = 0;
var animate_speed = 10;

function generateArray() {
  let arr = [];
  for (let i = 0; i < array_size; i++) {
    let randNum = getRndInteger(10, 500);

    div_sizes[i] = randNum;

    divs[i] = document.createElement("div");
    divs[i].classList.add("array_bar");
    divs[i].style.height = randNum + "px";
    document.getElementById("array_bars").appendChild(divs[i]);
    arr.push(randNum);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetArray() {
  document.getElementById("array_bars").innerHTML = "";
  generateArray();
  document.getElementById("controls").style.display = "block";
}

function div_update(cont, height, color) {
  window.setTimeout(function () {
    cont.style = "height:" + height + "px; background-color:" + color + ";";
  }, (c_delay += animate_speed));
}

function disableControls() {
  let c = document.getElementById("controls").childNodes;
  for (let i = 0; i < c.length; i++) {
    if (c[i].nodeName.toLowerCase() == "button") {
      c[i].setAttribute("disabled", "true");
    }
  }
}

function enableControls() {
  let c = document.getElementById("controls").childNodes;
  setTimeout(() => {
    for (let i = 0; i < c.length; i++) {
      if (c[i].nodeName.toLowerCase() == "button") {
        c[i].disabled = false;
      }
    }
  }, (c_delay += animate_speed));
}
