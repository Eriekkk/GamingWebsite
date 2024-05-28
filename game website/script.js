
$(document).ready(function () {
    $('.hero_image').on('click', function () {
        $('.hero_image').not(this).removeClass("active");
        $(this).toggleClass("active");
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter_buttons button');
    const heroCards = document.querySelectorAll('.hero_card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const role = button.getAttribute('data-name');

            heroCards.forEach(card => {
                if (role === 'all') {
                    card.style.display = 'block';
                } else {
                    card.style.display = card.getAttribute('data-role') === role ? 'block' : 'none';
                }
            });
        });
    });

    document.querySelector('button[data-name="all"]').click();
});

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let buttons = document.getElementsByClassName("slider-button");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  buttons[slideIndex - 1].classList.add("active");
}