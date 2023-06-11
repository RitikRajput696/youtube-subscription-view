const subscriptionView = document.querySelector('.subcription-view');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

listBtn.addEventListener('click', () => {
  console.log;
  subscriptionView.classList.remove('grid-layout');
  subscriptionView.classList.add('flex-layout');
});
gridBtn.addEventListener('click', () => {
  console.log;
  subscriptionView.classList.remove('flex-layout');
  subscriptionView.classList.add('grid-layout');
});
