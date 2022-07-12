var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

//TIMER FOR SLIDESHOW
// slidePosition = 0;
// SlideShow();

// function SlideShow() {
//   var i;
//   var slides = document.getElementsByClassName("Containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {
//     slidePosition = 1;
//   }
//   slides[slidePosition - 1].style.display = "block";
//   setTimeout(SlideShow, 2000); // Change image every 2 seconds
// }

// $(document).ready(function () {
//   var videos = ["https://www.youtube.com/watch?v=1Ccb4HXJ5OY", "https://youtu.be/Yfy_VjCItEM", "https://youtu.be/5_26jRJuT-Q"];

//   var index = Math.floor(Math.random() * videos.length);
//   var html =
//     '<div id="video"><h3>Random Video</h3><iframe width="720" height="480"   src="<iframe width="560" height="315" src="https://www.youtube.com/embed/5_26jRJuT-Q?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
//     videos[index] +
//     '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';
//   document.write(html);
// });
