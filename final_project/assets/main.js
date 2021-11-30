// function that changes background colors of buttons back to transparent
function revertColor(){
    const options = document.getElementsByClassName("category");
    for (var i = 0; i < options.length; i++){
        options[i].style.background = "transparent";
        options[i].style.fontWeight = "normal";
    }
}

// function that displays all options
function displayAll(){
    // retrieve the non-veg seafood options
    const options = document.getElementsByClassName("f-item");
    for (var i = 0; i < options.length; i++){
        options[i].style.display = "inline-block";
    }
    // revert colors
    revertColor();
    // change color
    const button = document.getElementById("all-but");
    button.style.background = "#f7e2ba";
    button.style.fontWeight = "bold";
}

// function that hides seafood options
function displayVeg(){
    // ensure all options are displayed
    displayAll();
    // retrieve the seafood options
    const options = document.getElementsByClassName("seafood");
    for (var i = 0; i < options.length; i++){
        options[i].style.display = "none";
    }
    // revert colors
    revertColor();
    // change color
    const button = document.getElementById("veg-but");
    button.style.background = "#f7e2ba";
    button.style.fontWeight = "bold";
}

// function that hides veg options
function displaySeafood(){
    // ensure all options are displayed
    displayAll();
    // retrieve the veg options
    const options = document.getElementsByClassName("vegetarian");
    for (var i = 0; i < options.length; i++){
        options[i].style.display = "none";
    }
    // revert colors
    revertColor();
    // change color
    const button = document.getElementById("sfd-but");
    button.style.background = "#f7e2ba";
    button.style.fontWeight = "bold";
}