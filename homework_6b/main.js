// item global variables
const totalItems = document.getElementById("item-num");
const totalPrice = document.getElementById("total-price");
const quant = document.getElementById("sel-quant");
const glaze = document.getElementById("sel-glaze");
const items = [];
let cart = [];

// Original Roll Item
function Original(glaze, quant) {
    this.glaze = glaze;
    this.quant = quant;
    this.type = "Original";
  }

function addToCart(){
    const storedValue = JSON.parse(sessionStorage.getItem("savedCart"));
    totalItems.innerHTML = storedValue.length;
}
  
// what happens when the user presses add2cart!
function addItem() {
        var prod = new Original(glaze.textContent, quant.textContent)
        cart.push(prod)
        sessionStorage.setItem("savedCart", JSON.stringify(cart));
        addToCart();
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

function itemCount(){
    const storedValue = JSON.parse(sessionStorage.getItem("savedCart"));
    if (storedValue == null){
        totalItems.innerHTML = 0;
    }
    else{
        totalItems.innerHTML = storedValue.length;
        cart = storedValue;
    }
}