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
function openhead(cityName, elmnt, color) {
 
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


