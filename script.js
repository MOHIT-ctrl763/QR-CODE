// let btn = document.getElementsByTagName("button")// all button tag 
// console.log(btn);
// let btns = document.querySelectorAll("button")
// console.log(btns);
// let para = document.querySelectorAll(".para")
// para[0].textContent = "this is para from js"

// diffrence between querySelector and getElement
//querySelector not change live collection but getElement change the live collection

// btns[i].className = "para"
// let arr 
// let btn = document.querySelector(".container")// event deligation
// btn.addEventListener("click",(e)=>{
//     console.log(e.target.textContent);
    
// })
// let parent = document.querySelector(".parent")
// let child1 = document.querySelector(".child-1")
// let child2 = document.querySelector(".child-2")
// parent.addEventListener("click",(e)=>{
//     console.log("parent click");
//     e.stopPropagation() 
// },true)
// child1.addEventListener("click",(e)=>{
//     console.log("child-1 click"); 
//      e.stopPropagation()   
// },true)
// child2.addEventListener("click",(e)=>{
//     console.log("child-2 click"); 
//      e.stopPropagation() 
// })
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let btn = document.querySelector("button")
let search = document.querySelector("input")
let img = document.querySelector("img")
btn.addEventListener("click",()=>{
    img.src = url+search.value
    search.value = ""
});
// let body = document.querySelector("body")
// let Dark = true
// let btn = document.querySelector("button")
// btn.addEventListener("click",()=>{
//   if(Dark){
//     body.style.backgroundColor = "black";
//     Dark = false
//     btn.innerText = "light";
//   }else{
//     body.style.backgroundColor = "white"
//     Dark = true
//     btn.innerText = "Dark"
//   }
// });





