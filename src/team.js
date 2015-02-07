// Screen Size
var WIDTH = 1280;
var HEIGHT = 640;

// Fixed time step of 1/60th a second
var TIME_STEP = 1000/60;

var resources;

// Game class
//----------------------------------
var Game = function (canvasId) {
	var self = this;

	// Rendering variables
	this.screen = document.getElementById(canvasId);
	this.screenContext = this.screen.getContext('2d');
	this.backBuffer = document.createElement('canvas');
	this.backBuffer.width = this.screen.width;
	this.backBuffer.height = this.screen.height;
	this.backBufferContext = this.backBuffer.getContext('2d');
	
	// Timing variables
	this.elapsedTime = 0.0;
	this.startTime = 0;
	this.lastTime = 0;
	this.gameTime = 0;
	this.STARTING_FPS = 60;
	
	this.dragging = null;
	
	//Game stuff
	this.pipeDream = new PipeDream(this);
	this.masher = new Masher(this);
	this.cutscene = new Cutscene(this);
	
	this.mode = "Cutscene";
	//Cutscene
	//Pipes
	//Towers
	//Mashing
	
	
	resources = new Resources();
	
	// tower pool
	this.tp = new Tower_pool();
	
	this.mana = new Mana_pool();
	
	// add td stuff
	this.level = new TD_level();
	
	this.cd = new Collision_detector();
	
	// it is important for targeting priority that this array be sorted by spawn order
	this.baddies = [];
	//this.baddies.push(new Virus(640, -64, this.level.path));
	//this.baddies.push(new Worm(640, -64, this.level.path));
	
	this.towers = [];
	this.towers.push(new Bullet_tower(0,0));
	this.towers.push(new Laser_tower(0,0));
	this.towers.push(new Zappy_tower(0,0));
	this.tp.addTower(this.towers[0]);
	this.tp.addTower(this.towers[1]);
	this.tp.addTower(this.towers[2]);
	
	this.screen.onmousedown = function(e) { self.mousedown(e) };
	this.screen.onmousemove = function(e) { self.mousemove(e) };
	this.screen.onmouseup = function(e) { self.mouseup(e) };
}

Game.prototype = {

	// Update the game world.  See
	// http://gameprogrammingpatterns.com/update-method.html
	update: function(elapsedTime) {
		if (this.mode == "Cutscene")
		{
			this.cutscene.update();
		}
		else
		{
			this.mana.update(elapsedTime);
			
			this.level.update(elapsedTime);
			
			for (var i = 0; i < this.towers.length; i++) {
				this.towers[i].update(elapsedTime);
			}
			
			for (var i = 0; i < this.baddies.length; i++) {
				this.baddies[i].update(elapsedTime);
				if (this.baddies[i].dead) {
					this.baddies.splice(i, 1);
					i--;
				}
			}
		}
	},
	
	render: function(elapsedTime) {
		var self = this;
		if (this.mode == "Cutscene")
		{
			this.cutscene.render(this.backBufferContext);
		}
		else
		{	
			this.backBufferContext.fillStyle="white";
			this.backBufferContext.fillRect(0, 0, WIDTH, HEIGHT);
			
			this.mana.render(this.backBufferContext);
			
			this.level.render(this.backBufferContext);
			
			for (var i = 0; i < this.baddies.length; i++) {
				this.baddies[i].render(this.backBufferContext);
			}
			
			this.tp.render(this.backBufferContext);
			
			for (var i = 0; i < this.towers.length; i++) {
				this.towers[i].render(this.backBufferContext);
			}
			
			this.pipeDream.render(this.backBufferContext);
			
			//this.masher.render(this.backBufferContext);
		}
		// Flip buffers
		self.screenContext.drawImage(self.backBuffer, 0, 0);
	},
	
	mousedown: function(e) {
		var mouseHitbox = {
			type: "circle",
			x: this.mousex,
			y: this.mousey,
			r: 0
		};
		for (var i = 0; i < this.towers.length; i++) {
			if (this.towers[i].mode == "ready" &&
				this.cd.detect(mouseHitbox, this.towers[i].getHitbox())) {
				this.towers[i].mode = "dragging";
				this.dragging = this.towers[i];
			}
		}
	},
	
	mousemove: function(e) {
		var rect = this.screen.getBoundingClientRect();
		this.mousex = e.clientX - rect.left;
		this.mousey = e.clientY - rect.top;
		
		if (this.dragging != null) {
			this.dragging.x = 64*Math.floor((this.mousex)/64);
			this.dragging.y = 64*Math.floor((this.mousey)/64);
		}
	},
	
	mouseup: function(e) {
		if (this.dragging != null) {
			if (this.dragging.x >= 640) {
				this.dragging.mode = "deployed";
			} else {
				this.dragging.mode = "ready";
			}
			this.tp.consolidate();
		}
		this.dragging = null;
	},
	
	start: function() {
		var self = this;
		
		this.startTime = Date.now();
		
		//initialize pipeDream for testing.
		this.pipeDream.init();
		
		window.requestNextAnimationFrame(
			function(time) {
				self.loop.call(self, time);
			}
		);
	},
	
	// The game loop.  See
	// http://gameprogrammingpatterns.com/game-loop.html
	loop: function(time) {
		var self = this;
		
		// Calculate additional elapsed time, keeping any
		// unused time from previous frame
		this.elapsedTime += time - this.lastTime; 
		this.lastTime = time;
		
		// The first timestep (and occasionally later ones) are too large
		// causing our processing to take too long (and run into the next
		// frame).  We can clamp to a max of 4 frames to keep that from 
		// happening
		this.elapsedTime = Math.min(this.elapsedTime, 4 * TIME_STEP);
		
		// We want a fixed game loop of 1/60th a second, so if necessary run multiple
		// updates during each rendering pass
		// Invariant: We have unprocessed time in excess of TIME_STEP
		while (this.elapsedTime >= TIME_STEP) {
			self.update(TIME_STEP);
			this.elapsedTime -= TIME_STEP;
			
			// add the TIME_STEP to gameTime
			this.gameTime += TIME_STEP;
		}
		
		// We only want to render once
		self.render(this.elapsedTime);
		
		// Repeat the game loop
		window.requestNextAnimationFrame(
			function(time) {
				self.loop.call(self, time);
			}
		);
	}
}
var game = new Game('game');
game.start();
