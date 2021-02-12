const buttons = Array.from(document.getElementsByClassName("knopka"));
const self = document.getElementsByClassName("self-info")[0];
const abouts = document.getElementsByClassName("about-me")[0];
buttons.forEach(i=>{
    i.addEventListener("click",()=>{onpress(i.dataset.atr)});
})
buttons[0].addEventListener("click",()=>{
    

})


function onpress(data) {

}