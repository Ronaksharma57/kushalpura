let sideButton = document.getElementById("sidemenu");
var menuOpened = false;
sideButton.addEventListener("click",()=>{
    if(menuOpened==false){
        let dropdown = document.getElementById("navbar-dropdown");
        dropdown.classList.remove("hidden");
        menuOpened= true;
    }
    else if(menuOpened==true){
        let dropdown = document.getElementById("navbar-dropdown");
        dropdown.classList.add("hidden");
        menuOpened= false;
    }

})