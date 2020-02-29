'use strict';

//global arrays
var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('picture-container');
var sectionEl2 = document.getElementById('list-container');
//global arrays
var totalClicks = 25;
var allMallItems = [];
var chartData = [];
var newArr = [];


function BusMallItems(src, alt, viewed=0, clicked=0) {
  this.src = src;
  this.alt = alt;
  this.title = alt;
  this.clicked = clicked;
  this.viewed = viewed;

  chartData.push(this.title);
  allMallItems.push(this);

}

function random(max) {
  return Math.floor(Math.random() * max);
}

function imageGenerator() {
  var pic1 = random(allMallItems.length);
  var pic2 = random(allMallItems.length);
  var pic3 = random(allMallItems.length);
  while (pic1 === pic2 || pic2 === pic1 || pic3 === pic1 || pic2 === pic3) {
    pic1 = random(allMallItems.length);
    pic2 = random(allMallItems.length);
    pic3 = random(allMallItems.length);
  }


  imageOneEl.src = allMallItems[pic1].src;
  imageOneEl.alt = allMallItems[pic1].alt;
  imageOneEl.title = allMallItems[pic1].title;
  allMallItems[pic1].viewed++;

  imageTwoEl.src = allMallItems[pic2].src;
  imageTwoEl.alt = allMallItems[pic2].alt;
  imageTwoEl.title = allMallItems[pic2].title;
  allMallItems[pic2].viewed++;

  imageThreeEl.src = allMallItems[pic3].src;
  imageThreeEl.alt = allMallItems[pic3].alt;
  imageThreeEl.title = allMallItems[pic3].title;
  allMallItems[pic3].viewed++;
}

function handleClick(event) {
  var clickedImg = event.target.title;
  totalClicks--;
  for (var i = 0; i < allMallItems.length; i++) {
    if (clickedImg === allMallItems[i].title) {
      allMallItems[i].clicked++;
    }
  }

  if (totalClicks > 0) {
    imageGenerator();
  } else {
    sectionEl.removeEventListener('click', handleClick);
    sectionEl.style.display = 'none';
    toLocalStorage();
    clickList();
    addChartData();
    renderChart();


  }
}

function toLocalStorage() {
  var stringData = JSON.stringify(allMallItems);
  localStorage.setItem('swBsItems', stringData);
}

function clickList() {
  for (var i = 0; i < allMallItems.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = allMallItems[i].title + ' has ' + allMallItems[i].clicked + ' votes in ' + allMallItems[i].viewed + ' views ';
    sectionEl2.appendChild(liEl);
  }
}

function addChartData() {
  for (var i = 0; i < allMallItems.length; i++) {
    newArr.push(allMallItems[i].clicked);
  }
}



function renderChart() {
  var ctx = document.getElementById('my_data');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartData,
      datasets: [{
        label: '# of Votes',
        data: newArr,
        backgroundColor: [
          'rgba(254, 98, 131, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function populateData() {
  if (localStorage.getItem('swBsItems')) {
    console.log('No local storage');
    var allStoredItems = JSON.parse(localStorage.getItem('swBsItems'));
    console.log(allStoredItems);
    for (var i = 0; i < allStoredItems.length; i++) {
      new BusMallItems(
        allStoredItems[i].src,
        allStoredItems[i].alt,
        allStoredItems[i].viewed,
        allStoredItems[i].clicked)

    }
  } else {
    new BusMallItems('img/bag.jpg', 'item1', 'bag');
    new BusMallItems('img/banana.jpg', 'item2', 'banana');
    new BusMallItems('img/bathroom.jpg', 'item3', 'bathroom');
    new BusMallItems('img/boots.jpg', 'item4', 'boots');
    new BusMallItems('img/breakfast.jpg', 'item5', 'breakfast');
    new BusMallItems('img/bubblegum.jpg', 'item6', 'bubblegum');
    new BusMallItems('img/chair.jpg', 'item7', 'chair');
    new BusMallItems('img/cthulhu.jpg', 'item8', 'cthulhu');
    new BusMallItems('img/dog-duck.jpg', 'item9', 'dogduck');
    new BusMallItems('img/dragon.jpg', 'item10', 'dragon');
    new BusMallItems('img/pen.jpg', 'item11', 'item11');
    new BusMallItems('img/pet-sweep.jpg', 'item12', 'item12');
    new BusMallItems('img/scissors.jpg', 'item13', 'item13');
    new BusMallItems('img/shark.jpg', 'item14', 'item14');
    new BusMallItems('img/sweep.jpg', 'item15', 'item15');
    new BusMallItems('img/tauntaun.jpg', 'item16', 'item16');
    new BusMallItems('img/unicorn.jpg', 'item17', 'item17');
    new BusMallItems('img/usb.jpg', 'item18', 'item18');
    new BusMallItems('img/water-can.jpg', 'item19', 'item19');
    new BusMallItems('img/wine-glass.jpg', 'item20', 'item20');

  }
}

sectionEl.addEventListener('click', handleClick);

populateData();
imageGenerator();
