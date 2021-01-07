let brandPreload = document.querySelectorAll(".preloader__brand span");


let brandInd = 0;

function brandMove(){
    if(brandInd < brandPreload.length){
        brandPreload[brandInd].classList.add("brand__active")
        brandInd++
    }

}
setInterval(brandMove,300);