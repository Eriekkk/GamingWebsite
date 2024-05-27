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

    // Initially show all hero cards
    document.querySelector('button[data-name="all"]').click();
});