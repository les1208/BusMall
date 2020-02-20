'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl =  document.getElementById('picture-container');

//total clicks var
var totalClicks = 0;


var allMallItems = [];

function BusMallItems(src, alt, title){
  this.src = src;
  this.alit = alt;
  this.title = title;
  this.clicked = 0;
  this.viewed = 0;

  allMallItems.push(this);
}

function random(max){
  return Math.floor(Math.random() * max);
}

function imageGenerator(){
  var pic1 = random(allMallItems.length);
  var pic2= random(allMallItems.length);
  var pic3= random(allMallItems.length);
  while(pic1 === pic3 || pic2 === pic3 || pic1 === pic2 || pic1 === pic2 === pic3){
    pic2 = random(allMallItems.length);
    pic3= random(allMallItems.length);
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
  totalClicks++;
  var clickedItem = event.target.title;
  for(var i =0; i < allMallItems.length; i++){
    if(clickedItem === allMallItems[i].title){
      allMallItems[i].clickedItem++;
    }
  }
  imageGenerator();
}


new BusMallItems('img/bag.jpg', 'item1', 'item1');
new BusMallItems('img/banana.jpg', 'item2', 'item2');
new BusMallItems('img/bathroom.jpg', 'item3', 'item3');
new BusMallItems('img/boots.jpg', 'item4', 'item4');
new BusMallItems('img/breakfast.jpg', 'item5', 'item5');
new BusMallItems('img/bubblegum.jpg', 'item6', 'item6');
new BusMallItems('img/chair.jpg', 'item7', 'item7');
new BusMallItems('img/cthulhu.jpg', 'item8', 'item8');
new BusMallItems('img/dog-duck.jpg', 'item9', 'item9');
new BusMallItems('img/dragon.jpg', 'item10', 'item10');
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

imageGenerator();
