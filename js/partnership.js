function handleDetailsModalVisibility(group) {
  document.querySelector('body').classList.toggle('body-with-opened-modal');
  document.querySelector(`.${group}-group-details-modal-overlay`).classList.toggle(`${group}-group-details-modal-overlay-visible`);
}