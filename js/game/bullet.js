var Bullet = function(initPack){
    var self = {};
    self.id = initPack.id;
    self.x = initPack.x;
    self.y = initPack.y;
    
    self.draw = function(){			
        var width = Img.bullet.width/2;
        var height = Img.bullet.height/2;
        
        var x = self.x - Player.list[selfId].x + WIDTH/2;
        var y = self.y - Player.list[selfId].y + HEIGHT/2;
        
        ctx.drawImage(Img.bullet,
            0,0,Img.bullet.width,Img.bullet.height,
            self.x + (Img.player.width/2),self.y + (Img.player.height/2),width,height);
    }
    
    Bullet.list[self.id] = self;		
    return self;
}