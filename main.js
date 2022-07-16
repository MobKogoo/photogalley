


//////////// burger_menu

 document.getElementById("right").addEventListener("click",function(){
    document.getElementById("right").classList.toggle("change")
    document.getElementById("burger_menu").classList.toggle("move_burger_menu_nav")
 })


//// social_icons

 document.getElementById("social").addEventListener("click",function(){
     document.getElementById("social_icons").classList.toggle("move_social_icons")
})

var p = document.querySelector('mainheader');

mainheader.addEventListener('click', function init() {
    mainheader.removeEventListener('click', init, false);
    mainheader.className = mainheader.className + ' header';
    var resizer = document.createElement('div');
    header.className = 'resizer';
    mainheader.appendChild(header);
    header.addEventListener('mousedown', initDrag, false);
}, false);

var startX, startY, startWidth, startHeight;




 window.onscroll=function(){myfunction5()};
function myfunction5(){
     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
         document.getElementById("mainheader").classList.add("header_change")
         document.getElementById("h1").classList.add("h1_change")
     }
     else{
         document.getElementById("mainheader").classList.remove("header_change")
         document.getElementById("h1").classList.remove("h1_change")
     } 
 }
         window.onscroll = function() {myFunction()};
         var header = document.getElementById("mainHeader");
         var sticky = header.offsetTop;
         function myFunction() {
            if (window.pageYOffset > sticky) {
              header.classList.add("sticky");
            } else {
              header.classList.remove("sticky");
            }
          }

//// reg_form

let firstName=document.querySelector('#firstName')
let lastName=document.querySelector('#lastName')
let Email=document.querySelector('#Email')
let user_Password=document.querySelector('#user_Password')
let aboutUs=document.querySelector('#aboutUs')
let counter=1
let arr=[]
submitInfo.addEventListener('click',(e)=>{
    let objUser={
        id:counter++,
        name:firstName.value,
        lastName:lastName.value,
        email:Email.value,
        aboutus:aboutUs.value
    }
    arr.push(objUser)
    localStorage.setItem('users',JSON.stringify(objUser))
    location.reload()
})
console.log (localStorage)

// create inputs road from input.value to local.storage and info box.
let newDoc=JSON.parse(localStorage.getItem('users'))
let h3Name=document.querySelector('#h3Name')
let h3lastname=document.querySelector('#h3lastname')
let h3email=document.querySelector('#h3email')
let h3aboutUs=document.querySelector('#h3aboutUs')
let pName=document.createElement('p')
let plastName=document.createElement('p')
let pEmail=document.createElement('p')
let pAboutUs=document.createElement('p')
h3Name.appendChild(pName)
h3lastname.appendChild(plastName)
h3email.appendChild(pEmail)
h3aboutUs.appendChild(pAboutUs)
pName.innerText=newDoc.name
plastName.innerText=newDoc.lastName
pEmail.innerText=newDoc.email
pAboutUs.innerText=newDoc.aboutus
// clears info box local.storage 
let clearAll=document.querySelector('#clearAll')
clearAll.addEventListener('click', (e)=>{
    localStorage.clear()
    location.reload()
})