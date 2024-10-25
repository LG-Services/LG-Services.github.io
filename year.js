window.onload = function() {
    let date = new Date();
    let year = date.getFullYear() + 1;
    
    document.querySelector(".year").innerHTML = year;
}