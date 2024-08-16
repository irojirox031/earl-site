
let imgshow = document.getElementById("img_show");
window.onclick = e => {
    console.log(e.target.innerText);
    console.log(e.target.tagName);
    if(e.target.tagName == "A" && (e.target.innerText).includes("/") == true ) {
        imgshow.src = e.target.innerText;
    }
  else {
    // console.log("not printing as incorrect path")
  }
} 