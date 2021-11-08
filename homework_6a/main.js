// item global variables
const totalItems = document.getElementById("item-num");
const totalPrice = document.getElementById("total-price");
const quant = document.getElementById("sel-quant");
const glaze = document.getElementById("sel-glaze");
const items = [];

// add to cart function
function addToCart(itemNumber){
    items.push(itemNumber);
    let total = 0;
    for (item of items) {
        total += item;
    }
    totalItems.innerHTML = total;
}

// what happens when the user presses add2cart!
const sbmtOrig = document.getElementById("sbmt-orig");
sbmtOrig.onclick = function () {
    addToCart(1);
}

// changing the confirmation phrase
function quantDet(qt){
    totalPrice.innerHTML = "$" + qt * 3.99;
    quant.innerHTML = qt;
}

function changeGlaze(glz) {
    const indicator = document.getElementById("indicator");
    const ind = document.getElementById("flvr");
    ind.parentNode.removeChild(ind);

    // create new image element
    const newItem = document.createElement('img');
    let source = "img/" + glz + ".png";
    newItem.setAttribute("src", source);
    newItem.setAttribute("alt", "indicator for the " + glz + " glaze");
    newItem.setAttribute("id", "flvr");
    indicator.appendChild(newItem);
  }

function glazeConf(glz){
    glaze.innerHTML = glz;
    changeGlaze(glz);
}