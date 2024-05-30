// this code is used for the hero role in the home page
$(document).ready(function () {
  // it'a click function to fully show hero image
  $('.hero_image').on('click', function () {
      $(this).toggleClass("active");//when hero image is clicked it will toggle the active class
  });
});


// this code is used for is to filter the hero cards by their roles when a certain buttoon is clicked
document.addEventListener('DOMContentLoaded', () => {
    // getting all the classes in the given html code
    const filterButtons = document.querySelectorAll('.filter_buttons button');
    const heroCards = document.querySelectorAll('.hero_card');

    //loop functions to filter each buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-name');//getting data name in the button

            //a loop function too every hero card that is given in the heroes.html file
            heroCards.forEach(card => {
                if (role === 'all') {// using if else statement to show all all hero cards when the button show all button is clicked
                    card.style.display = 'block';
                } else {
                    card.style.display = card.getAttribute('data-role') === role ? 'block' : 'none'; // getting attribute to data role and when card matches to data role card will be displayed
                }
            });
        });
    });

    document.querySelector('button[data-name="all"]').click(); //calling the function 
});

// loading DOM 
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

let slideIndex = 1; // indicating and showing the first slide
showSlides(slideIndex);

function plusSlides(n) {// a function that a given number is shown when image and text in the slide changes
  showSlides(slideIndex += n);
}

function currentSlide(n) {// a function to show an imaage slide
  showSlides(slideIndex = n);
}

function showSlides(n) {// a function to display the image slide when the button is clicked 
  let i;
  let slides = document.getElementsByClassName("slide");//getting the slide class
  let buttons = document.getElementsByClassName("slider-button");// getting the slider button class
  if (n > slides.length) { //an if statement when n is greater than the number of sliides that is given it will go back to the first slide
    slideIndex = 1
   }
  if (n < 1) { // if statement to set the last slide when the n is less than the 1 
    slideIndex = slides.length 
  }
  
  for (i = 0; i < slides.length; i++) { // a for loop to hide al the slide
    slides[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {// using for loop to remove active class
    buttons[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";// showing the slides
  buttons[slideIndex - 1].classList.add("active");// adding active class in the buttons
}