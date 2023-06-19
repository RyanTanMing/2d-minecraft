canvas=new fabric.Canvas("myCanvas")
blockimgwidth=30
blockimgheight=30
player_x=10
player_y=10
player_object=""
block_object=""
function player_update() {
    fabric.Image.fromURL("player.png",function(img){
        player_object=img
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y,left:player_x})
        canvas.add(player_object)
    })
}
function new_img(get_img) {
    fabric.Image.fromURL(get_img,function(img){
        block_object=img;
        block_object.scaleToWidth(blockimgwidth)
        block_object.scaleToHeight(blockimgheight)
        block_object.set({top:player_y,left:player_x})
        canvas.add(block_object)
    })
}
player_update()
window.addEventListener("keydown",my_keydown)
function my_keydown(e) {
    keypress=e.keyCode
    console.log(keypress)
    if (e.shiftKey==true&& keypress=="80") {
        blockimgwidth=blockimgwidth+10
        blockimgheight=blockimgheight+10
        document.getElementById("current_width").innerHTML=blockimgwidth
        document.getElementById("current_height").innerHTML=blockimgheight
    }
    if (e.shiftKey==true&& keypress=="77") {
        blockimgwidth=blockimgwidth-10
        blockimgheight=blockimgheight-10
        document.getElementById("current_width").innerHTML=blockimgwidth
        document.getElementById("current_height").innerHTML=blockimgheight
    }
    if (keypress=="38") {
        up()
    }
    if (keypress=="40") {
        down()
    }
    if (keypress=="39") {
        right()
    }
    if (keypress=="37") {
        left()
    }
    if (keypress=="87") {
        new_img("wall.jpg")
    }
    if (keypress=="71") {
        new_img("ground.png")
    }
    if (keypress=="68") {
        new_img("dark_green.png")
    }
    if (keypress=="76") {
        new_img("light_green.png")
    }
    if (keypress=="84") {
        new_img("trunk.jpg")
    }
    if (keypress=="82") {
        new_img("roof.jpg")
    }
    if (keypress=="89") {
        new_img("yellow_wall.png")
    }
    if (keypress=="85") {
        new_img("unique.png")
    }
    if (keypress=="67") {
        new_img("cloud.jpg")
    }

    
    
    

}
function up() {
    if (player_y >= 0) {
        player_y=player_y-blockimgheight
        canvas.remove(player_object)
        player_update()
    }
}
function down() {
    if (player_y <= 600) {
        player_y=player_y+blockimgheight
        canvas.remove(player_object)
        player_update()
    }
}
function left() {
    if (player_x >= 0) {
        player_x=player_x-blockimgheight
        canvas.remove(player_object)
        player_update()
    }
}
function right() {
    if (player_x <= 850) {
        player_x=player_x+blockimgheight
        canvas.remove(player_object)
        player_update()
    }
}
