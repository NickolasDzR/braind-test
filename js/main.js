const detailsLink = document.querySelector('.details-link');
const reviewsParagraph = document.querySelector('.reviews__main-text');

detailsLink.addEventListener('click', e => {
    e.preventDefault();
    reviewsParagraph.classList.toggle('reviews__main-text_active');
})