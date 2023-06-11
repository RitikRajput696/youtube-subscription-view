const subscriptionView = document.querySelector('.subcription-view');
const videos = document.querySelectorAll('.subcription-view .vid');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

const bgColors = [
  "ff3432",
  "4da6ff",
  "9966ff",
  "cc00ff",
]

console.log(videos);

videos.forEach(video => {
  const colorItem = bgColors[Math.floor(Math.random() * bgColors.length)];
  video.style.backgroundColor = "#" + colorItem;
});

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
