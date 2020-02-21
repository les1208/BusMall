'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('picture-container');

//total clicks var
var totalClicks = 10;

//global arrays
var allMallItems = [];
// var newArray = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10', 'Item11', 'Item12', 'Item13', 'Item14', 'Item15', 'Item16', 'Item17', 'Item18', 'Item19', 'Item20'];



function BusMallItems(src, alt, title) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.clicked = 0;
  this.viewed = 0;

  allMallItems.push(this);
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function imageGenerator() {
  var pic1 = random(allMallItems.length);
  var pic2 = random(allMallItems.length);
  var pic3 = random(allMallItems.length);
  while (pic1 === pic3 || pic2 === pic3 || pic1 === pic2 || pic1 === pic2 === pic3) {
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
  var clickedItem = event.target.title;
  for (var i = 0; i < allMallItems.length; i++) {
    if (clickedItem === allMallItems[i].title) {
      allMallItems[i].clickedItem++;
    }
  }
  totalClicks++;
  if(totalClicks ===25){
    sectionEl.removeEventListener('click', handleClick);
    newClicksArray();
  }
  imageGenerator();
}


function newClicksArray(){
  var name = [];
  var votes = [];
  var viewed = [];
  var colors = [];

  // logic to loop through
  for(var i = 0; i < allMallItems.length; i++){
    name.push(allMallItems[i].alt);
    votes.push(allMallItems[i].clicked);
    viewed.push(allMallItems[i].viewed);
  }
  // add your current index of clicked newClicksArray

  var getDataElement = document.getElementById('itemsData');
  var ctx = getDataElement.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
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

// var stringData = JSON.stringify(allMallItems);
// localStorage.setItem('bsMall', stringData);
// localStorage.getItem('bsMall');
// parseData 





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




sectionEl.addEventListener('click', handleClick);

newClicksArray();
imageGenerator();
