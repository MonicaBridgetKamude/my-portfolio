var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}


function searchSections() {
  var searchTerm = document.getElementById('searchTerm').value.toLowerCase(); // Get the search term from an input field and convert to lowercase
  var sections = document.getElementsByTagName('section'); // Get all section elements

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var content = section.textContent || section.innerText; // Get the section's content

    if (content.toLowerCase().includes(searchTerm)) {
      section.style.display = 'block'; // Show the section if it matches the search term
    } else {
      section.style.display = 'none'; // Hide the section if it doesn't match
    }
  }
}