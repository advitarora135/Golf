canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa_image_1.crdownload", "nasa_image_3.crdownload"];
random_number = Math.floor(Math.random() * 2);
console.log(random_number);
rover_width = 50;
rover_height = 50;
background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";
putt_image = "golf-h.png";
rover_x = 10;
rover_y = 10;
putt_x = 500;
putt_y = 500;

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rover_image;
    putt_image_tag = new Image();
    putt_image_tag.onload = uploadPutt;
    putt_image_tag.src = putt_image;
}

function uploadBackground() {
    //ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(background_image_tag, 0, 0, 800, 800);
}

function uploadRover() {
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}
function uploadPutt() {
    ctx.drawImage(putt_image_tag, putt_x, putt_y, 70, 70);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;

    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
        x_check()
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
        x_check()
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
        x_check()
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
        x_check()
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10
        console.log("When up arrow is pressed, x=" + rover_x + "| y= " + rover_y);
        uploadBackground();
        uploadRover();
        uploadPutt();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10
        console.log("When down arrow is pressed, x=" + rover_x + "| y= " + rover_y);
        uploadBackground();
        uploadRover();
        uploadPutt();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10
        console.log("When right arrow is pressed, y=" + rover_x + "| x= " + rover_x);
        uploadBackground();
        uploadRover();
        uploadPutt();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10
        console.log("When left arrow is pressed, y=" + rover_x + "| x= " + rover_x);
        uploadBackground();
        uploadRover();
        uploadPutt();
    }
}
function x_check(){
    if (510 == rover_x){
    y_check();
    }
}

function y_check(){
    if (510 == rover_y) {
    rover_width = 0;
    rover_height = 0;
    document.getElementById('win').innerHTML = "YOU WIN!";
    }
}