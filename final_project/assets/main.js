// function that displays all options
function displayAll(){
    // retrieve the non-veg seafood options
    const options = document.getElementsByClassName("f-item");
    for (var i = 0; i < options.length; i++){
        options[i].style.display = "inline-block";
    }
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
}