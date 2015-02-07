// Screen Size
var WIDTH = 1280;
var HEIGHT = 640;

// Fixed time step of 1/60th a second
var TIME_STEP = 1000/60;

var resources;

// Game class
//----------------------------------
var Game = function (canvasId) {
	var myself = this;

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
	
	//Game stuff
	this.pipeDream = new PipeDream(this);
	this.masher = new Masher(this);
	
	resources = new Resources();
	
	// add td stuff
	this.level = new TD_level();
	
	this.cd = new Collision_detector();
	
	// it is important for targeting priority that this array be sorted by spawn order
	this.baddies = [];
	this.baddies.push(new Virus(640, -64, this.level.path));
	
	this.towers = [];
	this.towers.push(new Bullet_tower(832, 192));
}

Game.prototype = {

	// Update the game world.  See
	// http://gameprogrammingpatterns.com/update-method.html
	update: function(elapsedTime) {
		for (var i = 0; i < this.baddies.length; i++) {
			this.baddies[i].update(elapsedTime);
		}
		
		for (var i = 0; i < this.towers.length; i++) {
			this.towers[i].update(elapsedTime);
		}
	},
	
	render: function(elapsedTime) {
		var self = this;
		
		this.backBufferContext.fillStyle="white";
		this.backBufferContext.fillRect(0, 0, WIDTH, HEIGHT);
		
		this.pipeDream.render(this.backBufferContext);
		
		this.level.render(this.backBufferContext);
		
		for (var i = 0; i < this.baddies.length; i++) {
			this.baddies[i].render(this.backBufferContext);
		}
		
		for (var i = 0; i < this.towers.length; i++) {
			this.towers[i].render(this.backBufferContext);
		}
		
		this.masher.render(this.backBufferContext);
		
		// Flip buffers
		self.screenContext.drawImage(self.backBuffer, 0, 0);
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
