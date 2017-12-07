var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = '30px Arial';

var refreshScoreBoard = (scores) => {
    var scorelist = document.getElementById('score-list');
    // empty scorelist
    scorelist.innerHTML = '';

    for (var i in scores) {
        var row = "<div><strong>" + scores[i].player + "</strong>: " + scores[i].score + " kills </div>";
        scorelist.innerHTML += row; 
    }
}
setInterval(function(){
    if(!selfId)
        return;
    ctx.clearRect(0,0,500,500);
    blackBackground();
    drawMap();
    drawScore();
    for(var i in Player.list)
        Player.list[i].draw();
    for(var i in Bullet.list)
        Bullet.list[i].draw();
},40);

var drawMap = function(){
    var width = Img.map.width*.8;
    var height = Img.map.height*.8;  
    ctx.drawImage(Img.map, 0, 0, width, height);   
}

var blackBackground = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
var drawScore = function(){
    ctx.fillStyle = 'white';
    ctx.fillText("Kills: " + Player.list[selfId].score,5,40);
}
