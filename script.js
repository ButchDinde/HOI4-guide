
function myFunction(){
    var x = document.querySelector("body")
    x.style.removeProperty("background-image");
}

function disableImage(id){
    var img = document.getElementById(id);
    if (img.style.display == 'block') {
        img.style.display = 'none'
    }
    if (img.style.display == 'none') {
        img.style.display = 'block'
    }
}