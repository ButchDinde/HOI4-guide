
function myFunction(){
    var x = document.querySelector("body")
    x.style.removeProperty("background-image");
}

function disableImage(){
    var img = document.getElementById("fourohfour");
    var btn = document.getElementById("toggle");
    if (img.style.display == 'block') {
        img.style.display = 'none';
        btn.textContent = 'Show image';
    }
    else {
        img.style.display = 'block';
        btn.textContent = 'Hide image';
    }
}