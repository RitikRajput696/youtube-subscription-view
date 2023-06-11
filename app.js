const subscriptionView = document.querySelector('.subcription-view');
const videos = document.querySelectorAll('.subcription-view .vid');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

const bgColors = [
  "ff3432",
  "03fce8",
  "fc03fc",
  "fcf803",
]


listBtn.addEventListener('click', () => {
  subscriptionView.classList.remove('grid-layout');
  subscriptionView.classList.add('flex-layout');
});
gridBtn.addEventListener('click', () => {
  subscriptionView.classList.remove('flex-layout');
  subscriptionView.classList.add('grid-layout');
});



const vidArr = Array.from(videos);

let counter = 0;
for (let i = 0; i < vidArr.length; i++) {

  const colorItem = bgColors[counter];
  vidArr[i].style.backgroundColor = "#" + colorItem;
  counter++;
  if (counter == bgColors.length) {
    counter = 0;
  }


}
