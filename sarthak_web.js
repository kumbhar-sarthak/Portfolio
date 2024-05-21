let first = document.querySelector(".image_me");
let n = document.querySelector(".work_box_container");
let b = document.querySelector(".animated_background");
let w = document.querySelector("#headline");

let tool = document.querySelectorAll(".t1");

let cursor = document.querySelector("#custom_cursor");

let j = document.querySelector(".title_about");

function scrollanimation() {

  if (window.scrollY >= 1100.0) {
    b.classList.add("expand");
  }
  console.log(window.scrollY);
}

scrollanimation();

let web_page = document.querySelector("#web_me");

let v = document.querySelector(".verticalbox_align_contianer");

function scrollvr() {
  v.scrollTop += 212;
}

setInterval(scrollvr, 10000);

let r = document.querySelector(".hand-container");
r.style.display = "flex";
web_page.style.display = "none";

const firstdisplay = () => {
  r.style.display = "none";
  web_page.style.display = "block";
};

setTimeout(() => {
  firstdisplay();
}, 3000);


let body = document.body;

const cursorAction = (e) => {
  cursor.classList.add("add_custom_cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
};

let buildCursor = () => {
  if (window.scrollY >= 2460.00) {
    body.classList.add("custom_default_cursor");
    document.addEventListener("mousemove", cursorAction);
  } else {
    body.classList.remove("custom_default_cursor");
    cursor.classList.remove("add_custom_cursor");
    document.removeEventListener('mousemove',cursorAction);
  }
};

tool.forEach((i) => {
  i.addEventListener("mousemove", (e) => {
    const position = i.getBoundingClientRect();

    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;

    i.style.transform = `translate(${x * 0.7}px , ${y * 0.7}px)`;
   
  });

  i.addEventListener('mouseleave',() =>{
    i.style.transform = `translate(0,0)`;
  })
});

const TextAnimate = () => {
  document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const animatedText = document.querySelector('.about_info_align');

    if (scrollPosition >= 250) {
        animatedText.classList.add('visible');
    } else {
        animatedText.classList.remove('visible');
    }
});
}

window.addEventListener('scroll',TextAnimate);
window.addEventListener("scroll", scrollanimation);
window.addEventListener("scroll", buildCursor);


if(body.style.minWidth < 350){

}
