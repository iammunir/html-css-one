const exploreButtons = document.getElementsByClassName('btn-explore');
const modal = document.getElementById('modal-layer');
const btnClose = document.getElementById('btn-close');

// display the modal
for (let exploreButton of exploreButtons) {
    exploreButton.addEventListener('click', () => {

        // traversing element to get the title, and set to modal
        const titleCard = exploreButton.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.textContent.trim();
        const titleModal = modal.firstElementChild.firstElementChild.nextElementSibling;
        titleModal.textContent = titleCard;

        // traversing element to get the description text, and set to modal
        const descriptionCard = exploreButton.parentElement.parentElement.previousElementSibling.firstElementChild.textContent.trim();
        const descriptionTextModal = modal.firstElementChild.lastElementChild;
        descriptionTextModal.textContent = descriptionCard;

        modal.style.display = 'block';
    });
}

// close the modal
btnClose.addEventListener('click', () => modal.style.display = 'none');

// when the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
    if (event.target == modal) modal.style.display = 'none';
});
