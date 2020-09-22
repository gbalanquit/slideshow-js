const images = document.querySelectorAll("img");
console.log(images);

// slideshow animation
var i = 0;
function Slideshow() {
  setInterval(() => {
    if (images[i].className == "img display") {
      if (i == 10 && images[i].className == "img display") {
        i = 0;
        images[10].classList.remove("display");
      }
      images[i].classList.remove("display");
      images[i + 1].classList.add("display");
      i++;
    }
  }, 2000);
}

Slideshow();
