let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
 Array.from(carouselItems).forEach((item,index) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  });

  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0;
  }
}, 2000)