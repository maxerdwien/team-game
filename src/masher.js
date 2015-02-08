var Masher = function(game)
{
	this.game = game;
	var self = this;
	this.progress = 0;
	this.completed = [];
	this.y = 0;
	this.x = 0;
	this.detected = false;
	this.alert = false;
	this.counter = 45//180;
	this.secondCounter = 900;
	window.onkeyup = function (e) { self.keyUp(e); };
}

Masher.prototype = {
	render: function(context)
	{
		context.save();
		context.fillStyle="black";
		context.fillRect(0, 0, WIDTH, HEIGHT);
		context.fillStyle="red";
		context.fillRect(832, 96, 32, 32);
		context.fillRect(384, 224, 32, 32);
		context.fillRect(1248, 320, 32, 32);
		context.fillRect(800, 448, 32, 32);
		for (y = 0; y < this.y; y +=32)
		{
			for (x = 0; x <= 1280; x += 32)
			{
				context.drawImage(resources.hex_sprite_sheet,
								this.completed[((y/32)*20)+x/32],
								0,
								32,
								32,
								x,
								y,
								32,
								32)
			}
		}
		for (x = 0; x <= this.x; x += 32)
		{ 
			context.drawImage(resources.hex_sprite_sheet,
							this.completed[((y/32)*20)+x/32],
							0,
							32,
							32,
							x,
							this.y,
							32,
							32)
		}
		for (x = this.x + 1; x < 1280; x += 32)
		{
			number = Math.floor(16*Math.random()); 
			context.drawImage(resources.hex_sprite_sheet,
							number*32,
							0,
							32,
							32,
							x,
							this.y,
							32,
							32)	
		}
		for (y = this.y + 32; y < 640; y += 32)
		{
			for (x = 0; x < 1280; x += 32)
			{
				number = Math.floor(16*Math.random()); 
				context.drawImage(resources.hex_sprite_sheet,
								number*32,
								0,
								32,
								32,
								x,
								y,
								32,
								32)
				context.restore();
			}
		}
		if (this.detected) resources.alarm.play();
		if (((this.detected && this.counter == 180) || this.alert) && this.secondCounter > 0 && this.counter > 0)
		{
			context.fillStyle="black";
			context.fillRect(480, 192, 480, 320);
			context.drawImage(resources.intruder_alert, 0, 0, 480, 320, 480, 192, 480, 320);
			if (this.counter == 180) this.alert = true;
			this.counter--;
			this.secondCounter--;
			if (this.counter == 0) this.alert = false;
		}
		if (this.progress == 0) 
		{
			context.fillStyle="black";
			context.fillRect(480, 192, 480, 320);
			context.drawImage(resources.masher_start, 0, 0, 480, 320, 480, 192, 480, 320);
		}
		else if (this.detected)
		{
			this.counter++;
			this.secondCounter--;
		}
		if (this.secondCounter >= 45) context.drawImage(resources.hack_bar, 0, 576);
		if (this.secondCounter >= 90) context.drawImage(resources.hack_bar, 64, 576);
		if (this.secondCounter >= 135) context.drawImage(resources.hack_bar, 128, 576);
		if (this.secondCounter >= 180) context.drawImage(resources.hack_bar, 192, 576);
		if (this.secondCounter >= 225) context.drawImage(resources.hack_bar, 256, 576);
		if (this.secondCounter >= 270) context.drawImage(resources.hack_bar, 320, 576);
		if (this.secondCounter >= 315) context.drawImage(resources.hack_bar, 384, 576);
		if (this.secondCounter >= 360) context.drawImage(resources.hack_bar, 448, 576);
		if (this.secondCounter >= 405) context.drawImage(resources.hack_bar, 512, 576);
		if (this.secondCounter >= 450) context.drawImage(resources.hack_bar, 576, 576);
		if (this.secondCounter >= 495) context.drawImage(resources.hack_bar, 640, 576);
		if (this.secondCounter >= 540) context.drawImage(resources.hack_bar, 704, 576);
		if (this.secondCounter >= 585) context.drawImage(resources.hack_bar, 768, 576);
		if (this.secondCounter >= 630) context.drawImage(resources.hack_bar, 832, 576);
		if (this.secondCounter >= 675) context.drawImage(resources.hack_bar, 896, 576);
		if (this.secondCounter >= 720) context.drawImage(resources.hack_bar, 960, 576);
		if (this.secondCounter >= 765) context.drawImage(resources.hack_bar, 1024, 576);
		if (this.secondCounter >= 810) context.drawImage(resources.hack_bar, 1088, 576);
		if (this.secondCounter >= 855) context.drawImage(resources.hack_bar, 1152, 576);
		if (this.secondCounter >= 900) context.drawImage(resources.hack_bar, 1216, 576);
		if (this.secondCounter <= 0 && this.counter <= 0)
		{
			this.counter++;
			this.detected = false;
			context.drawImage(resources.masher_game_over, 0, 0, 320, 320, 480, 192, 320, 320);
		}
		else if (this.secondCounter <= 0 && this.counter <= 300)
		{
			this.counter++;
			context.drawImage(resources.masher_game_over, 0, 0, 320, 320, 480, 192, 320, 320);
		}
		else if (this.secondCounter <= 0)
		{
			game.mode = "Cutscene";
			this.progress = 0;
			this.completed = [];
			this.y = 0;
			this.x = 0;
			this.detected = false;
			this.alert = false;
			this.counter = 180;
			this.secondCounter = 900;
		}
	},
	
	update: function()
	{
	},
	
	keyUp: function(e) {
		if (this.secondCounter > 0)
		{
			if (this.x < 1280) this.x += 32;
			else if (this.y < 640) 
			{
				this.y += 32;
				this.x = 0;
			}
			this.progress++;
			if (this.progress == 10) 
			{
				this.detected = true; 
				game.towers.push(new Bullet_tower(0,0));
				game.tp.addTower(game.towers[game.towers.length-1]);
			}
			if (this.progress == 150) 
			{
				console.log("Level one bonus achieved!");
				game.towers.push(new Bullet_tower(0,0));
				game.tp.addTower(game.towers[game.towers.length-1]);
				
			}
			if (this.progress == 300) 
			{
				console.log("Level two bonus achieved!");
				game.towers.push(new Bullet_tower(0,0));
				game.tp.addTower(game.towers[game.towers.length-1]);
				
			}
			if (this.progress == 450)
			{	
				console.log("Level three bonus achieved!");
				game.towers.push(new Zappy_tower(0,0));
				game.tp.addTower(game.towers[game.towers.length-1]);
			}
			if (this.progress == 600) 
			{
				console.log("Level four bonus achieved!");
				game.towers.push(new Laser_tower(0,0));
				game.tp.addTower(game.towers[game.towers.length-1]);
			}
			this.completed.push(Math.floor(16*Math.random())*32);
		}
	}
}