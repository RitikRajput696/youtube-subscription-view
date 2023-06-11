const subscriptionView = document.querySelector('.subcription-view');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

listBtn.addEventListener('click', () => {
  console.log;
  subscriptionView.classList.remove('grid-layout');
  subscriptionView.classList.add('list-layout');
});
gridBtn.addEventListener('click', () => {
  console.log;
  subscriptionView.classList.remove('list-layout');
  subscriptionView.classList.add('grid-layout');
});
