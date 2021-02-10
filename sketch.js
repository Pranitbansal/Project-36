var dog,sadDog,happyDog, food;
var feed, addFood, foodObj, foodStock;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  food=new Food();
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(updateFoodStock);

  addFood=createButton("Add Food");
  addFood.position(800, 95);
  addFood.mosePressed(addFoodStock);

}

function draw() {
  background(46,139,87);
  
  food.display();

  drawSprites();
}

//function to read food Stock
function getFoodStock() {

}


//function to update food stock and last fed time
function feedFood() {
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0) {
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else {
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

//function to add food in stock
function addFoodStock() {
  foodS++;
  database.ref('/').update({
    food: foodS
  })
}