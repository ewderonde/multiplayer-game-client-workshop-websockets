var socket = io("http://protected-dusk-21073.herokuapp.com");
Player.list = {};
Bullet.list = {};
    
// sign in
var signDiv = document.getElementById('signDiv');
var signDivUsername = document.getElementById('signDiv-username');
// chat
var chatText = document.getElementById('chat-text');
var chatInput = document.getElementById('chat-input');

enterGame = (e) => {
    if (e.keyCode === 13) {
        socket.emit('signIn',{username:signDivUsername.value});
    }
};

sendMessage = (event) => {
    if (event.keyCode === 13) {
        if(chatInput.value !== '')
        socket.emit('sendMsgToServer',chatInput.value);
        chatInput.value = '';		
    } 
};

socket.on('signInResponse',function(data){
    if(data.success){
        signDiv.style.display = 'none';
        gameDiv.style.display = 'inline-block';
    } else
        alert("Please enter a name.");
});

socket.on('addToChat',function(data){
    chatText.innerHTML += String('<div>' + data + '</div>');
    chatText.scrollTop = chatText.scrollHeight;
});

socket.on('init',function(data){	
    if(data.selfId)
        selfId = data.selfId;
    
    if(data.playerName)
        playerName = data.playerName;
    //{ player : [{id:123,number:'1',x:0,y:0},{id:1,number:'2',x:0,y:0}], bullet: []}
    for(var i = 0 ; i < data.player.length; i++){
        new Player(data.player[i]);
    }
    for(var i = 0 ; i < data.bullet.length; i++){
        new Bullet(data.bullet[i]);
    }
});

socket.on('update',function(data){
    var playerScores = [];

    for(var i = 0 ; i < data.player.length; i++){
        var pack = data.player[i];
        var p = Player.list[pack.id];
        if(p){
            if(pack.x !== undefined)
                p.x = pack.x;
            if(pack.y !== undefined)
                p.y = pack.y;
            if(pack.hp !== undefined)
                p.hp = pack.hp;
            if(pack.score !== undefined)
                p.score = pack.score;

            playerScores.push({
                player: p.name,
                score: p.score,
            })
        }
    }
    for(var i = 0 ; i < data.bullet.length; i++){
        var pack = data.bullet[i];
        var b = Bullet.list[data.bullet[i].id];
        if(b){
            if(pack.x !== undefined)
                b.x = pack.x;
            if(pack.y !== undefined)
                b.y = pack.y;
        }
    }

    refreshScoreBoard(playerScores);
});

socket.on('remove',function(data){
    //{player:[12323],bullet:[12323,123123]}
    for(var i = 0 ; i < data.player.length; i++){
        delete Player.list[data.player[i]];
    }
    for(var i = 0 ; i < data.bullet.length; i++){
        delete Bullet.list[data.bullet[i]];
    }
});

var sortPlayersByScore = (data) => {
    var sortedScore = data.sort(function(a, b) {
        return a.score < b.score;
    });

    return sortedScore;
};

document.onmousemove = function(event){
    if (!selfId)
        return;
    var playerX = Player.list[selfId].x;
    var playerY = Player.list[selfId].y;
    var x = -playerX + event.clientX- 30;
    var y = -playerY + event.clientY- 30;
    var angle = Math.atan2(y,x) / Math.PI * 180;
    socket.emit('keyPress',{input:'mouseAngle',state:angle});
}