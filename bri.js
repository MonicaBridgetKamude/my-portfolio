var images = document.querySelectorAll('.slideshow img');
var currentImage = 0;
var imageInterval = setInterval(nextImage, 2000); // Change image every 2 seconds

function nextImage() {
  images[currentImage].style.opacity = '0';
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = '1';
}
