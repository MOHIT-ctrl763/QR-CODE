
let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let btn = document.querySelector("button");
let search = document.querySelector("input");
let img = document.querySelector("img");
let err = document.querySelector(".err");
let download = document.querySelector(".dow");

btn.addEventListener("click", () => {
    if (search.value.length == 0) {
        err.classList.remove("err"); // show error
    } else {
        img.src = url + search.value;
        search.value = "";
        download.classList.remove("dow"); // show download button
        download.href = img.src;
        download.setAttribute("download", "qr-code.png"); // 🧠 important line
    }
});
search.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
})








