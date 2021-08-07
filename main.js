canvas = document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

car_width=100;
car_height=95;
car_x=10;
car_y=300;

car_img="car2.png";
background_img ="parkingLot.jpg";

function add(){
background_imgTag =new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_img;
car_imgTag =new Image();
car_imgTag.onload=uploadCar;
car_imgTag.src= car_img;
}
 
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar(){
ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keyPressed = e. keyCode;
if(keyPressed=="38"){

up();   
}
if(keyPressed=="37"){

left();   
    }
if(keyPressed=="39"){

 right();   
    }
 if(keyPressed=="40"){ 

down();   
           }
}



function up(){
if(car_y>=0){
car_y =car_y - 10;
uploadBackground();
uploadCar();
}
}
function down(){
 if(car_y<=300){
car_y = car_y + 10;
 uploadBackground();
 uploadCar();
}
}
    function left(){
 if(car_x>=0){
 car_x = car_x - 10;
 uploadBackground();
 uploadCar();
}
 }
function right(){
 if(car_x<=900){
 car_x = car_x + 10;
 uploadBackground();
 uploadCar();
 }
}