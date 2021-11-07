// global cart variable
var cart = JSON.parse(sessionStorage.getItem("savedCart"))
var totalPrice = 0;
const prce = document.getElementById("total-price");

// when item is removed from the cart
function deleteListItem(item) {
    const listItem = item.parentNode;
    const idx = listItem.children[4].innerHTML;
    const price = listItem.children[2].children[0].innerHTML;
    const parent = listItem.parentNode;

    // remove from the json cart as well
    cart.splice(idx, 1)
    sessionStorage.setItem("savedCart", JSON.stringify(cart));

    // changing indexes
    const indexes = document.getElementsByClassName("hidden-index");
    for (var i = 0; i < indexes.length; i++){
        if (i > idx){
            var val = indexes[i].innerHTML - 1
            indexes[i].innerHTML = val;
        }
    }

    parent.removeChild(listItem);

    // update information
    if (cart.length == 0){
        const desc = document.getElementById("checking");
        desc.innerHTML = "No items in cart yet! Make sure to visit the products page to add yummy treats here!";
        document.getElementById("ttl-price").style.display = "none";
        document.getElementById("sbmtbut").style.display = "none";
    }
    totalPrice = totalPrice - price.substring(1);
    prce.innerHTML = totalPrice.toFixed(2);
  }

// when the function loads!
function onLoad() {
    if (cart == null || cart.length == 0){
        const desc = document.getElementById("checking");
        desc.innerHTML = "No items in cart yet! Make sure to visit the products page to add yummy treats here!";
        document.getElementById("ttl-price").style.display = "none";
        document.getElementById("sbmtbut").style.display = "none";
    }
    else{
        // change first sentence above
        const desc = document.getElementById("checking");
        desc.innerHTML = "Ready to check out? We’re here to help you out!";
        // element for cart list
        const lst = document.getElementById("lst");
        // loop through the cart and create new div element for each
        for (var i = 0; i < cart.length; i++){
            // get the glaze and the quantity from object
            let itm = cart[i];
            // create new item wrapper
            let newWrapper = document.createElement('div');
            newWrapper.setAttribute("class", "itm-wrapper");
            // create new item image div
            let newImg = document.createElement('div');
            // create new content div
            let newCnt = document.createElement('div');
            // create new price div
            let newPrice = document.createElement('div');
            // create new image
            const newImage = document.createElement('img');
            newImage.setAttribute("src", "img/roll1.jpg");
            newImage.setAttribute("alt", "original cinnamon roll");
            newImage.setAttribute("class", "itm-rll");
            // add new content <3
            let newName = document.createElement("p");
            newName.textContent = itm.type;
            newName.setAttribute("class", "itm-name");
            let newGlaze = document.createElement("p");
            newGlaze.textContent = "Glaze: " + itm.glaze;
            newGlaze.setAttribute("class", "itm-glaze");
            let newQuant = document.createElement("p");
            if (itm.quant == "1"){
                newQuant.textContent = "Quantity: " + itm.quant + " roll";
            }
            else{
                newQuant.textContent = "Quantity: " + itm.quant + " rolls";
            }
            newQuant.setAttribute("class", "itm-quantity");
            // add new price <3
            let newPrc = document.createElement("p");
            newPrc.textContent = "$" + + itm.quant * 3.99;
            newPrc.setAttribute("class", "itm-price");
            // keeps track of item in relation to cart
            let newIdx = document.createElement("p");
            newIdx.textContent = i;
            newIdx.setAttribute("class", "hidden-index");
            // add a button!
            let newCancel = document.createElement("button");
            newCancel.textContent = "x";
            newCancel.setAttribute("class", "btn-remove-item");
            newCancel.setAttribute("onclick", "deleteListItem(this)");
            // appending children
            newImg.appendChild(newImage);
            newCnt.appendChild(newName);
            newCnt.appendChild(newGlaze);
            newCnt.appendChild(newQuant);
            newPrice.appendChild(newPrc);
            newWrapper.appendChild(newImg);
            newWrapper.appendChild(newCnt);
            newWrapper.appendChild(newPrice);
            newWrapper.appendChild(newCancel);
            newWrapper.appendChild(newIdx);
            lst.appendChild(newWrapper);

            // updating final price
            let pr = itm.quant * 3.99;
            totalPrice = totalPrice + pr;
        }

        // update total price
        prce.innerHTML = totalPrice.toFixed(2);
    }
}