
function myFunction(){
    var x = document.querySelector("body")
    x.style.removeProperty("background-image");
}

function disableImage(){
    var img = document.getElementById("fourohfour");
    if (img.style.display == 'block') {
        img.style.display = 'none'
    }
    else {
        img.style.display = 'block'
    }
}