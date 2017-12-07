var Player = function(initPack){
    var self = {};
    self.id = initPack.id;
    self.number = initPack.number;
    self.x = initPack.x;
    self.y = initPack.y;
    self.hp = initPack.hp;
    self.hpMax = initPack.hpMax;
    self.score = initPack.score;
    self.name = initPack.name;
    
    self.draw = function(){	
        // Draw hp bar.
        var hpWidth = 40 * self.hp / self.hpMax;
        ctx.fillStyle = 'red';
        ctx.fillRect(self.x + 7 ,self.y - 10, hpWidth, 7);
        
        // Draw arrow.
        if(selfId === self.id) {
            var width = Img.arrow.width * 0.05;
            var height = Img.arrow.height * 0.05;

            ctx.drawImage(Img.arrow,
            0,0, Img.arrow.width, Img.arrow.height,
            self.x , self.y - (Img.player.height + 30), width, height);
        }

        // Draw player.
        var width = Img.player.width*2;
        var height = Img.player.height*2;
        ctx.drawImage(Img.player,
            0,0,Img.player.width, Img.player.height,
            self.x, self.y, width, height);
    }
    
    Player.list[self.id] = self;
    
    
    return self;
}