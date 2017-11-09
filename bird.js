function Bird() {
    this.y = height/2;
    this.x = 50;
    
    accel = 0.1;
    vel = 0;
    jumpforce = accel * -40;
    
    this.show = function() {
        fill(255,0,0);
        ellipse(this.x,this.y,20,20);
    }
    
    this.update = function() {
        vel = vel + accel;
        this.y = this.y + vel;
        if (this.y < 0) {
            vel = 0;
            this.y = 0;
        }
            else if (this.y>height) {
            vel = 0;
            this.y = height;
        }
    }
    
    this.jump = function() {
        vel = vel + jumpforce;
    }
    
    
}
