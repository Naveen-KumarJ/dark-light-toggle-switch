let toggleContainer = document.querySelector(".toggle-container");
let body = document.querySelector("body");
toggleContainer.addEventListener('click',function(){
    toggleContainer.classList.toggle("dark");
    if(toggleContainer.classList.contains("dark")){
        body.style.backgroundColor="#121212";
        body.style.color="#FFFFFF ";
        toggleContainer.style.background ="url(./assets/darkmode-bg.png)";
        toggleContainer.style.backgroundRepeat = "no-repeat";
        toggleContainer.style.backgroundSize = "cover";
    }
    else{
        body.style.backgroundColor="whitesmoke";
        body.style.color="#000000 ";
        toggleContainer.style.background ="url(./assets/lightmode-bg.png)";
        toggleContainer.style.backgroundRepeat = "no-repeat";
        toggleContainer.style.backgroundSize = "cover";
    }
});