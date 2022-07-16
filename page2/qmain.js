let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// delete buttons 
let deleteBtn1=document.querySelector('#deleteBtn1')
deleteBtn1.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.previousElementSibling.style.display='none'
    e.currentTarget.parentElement.style.display='none'
    
})
let deleteBtn2=document.querySelector('#deleteBtn2')
deleteBtn2.addEventListener('click',(e)=>{
  e.currentTarget.parentElement.previousElementSibling.style.display='none'
  e.currentTarget.parentElement.style.display='none'
})
let deleteBtn3=document.querySelector('#deleteBtn3')
deleteBtn3.addEventListener('click',(e)=>{
  e.currentTarget.parentElement.previousElementSibling.style.display='none'
  e.currentTarget.parentElement.style.display='none'
})

//////////color change 
function myFunction() { 
  var e = document.getElementById("mainheader");
  var c = window.getComputedStyle(e).backgroundColor;
  if (c === "rgb(0, 0, 0)") {
  document.getElementById("mainheader").style.background = "#3ddb68";
} else{
  document.getElementById("mainheader").style.background = "#139dd4";
}
}
/////// pg2
function changeBodyBg(color){
  document.body.style.background = color;
}

