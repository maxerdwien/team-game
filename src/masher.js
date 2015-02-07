var Masher = function(game)
{
	this.game = game;
	var self = this;
	this.progress = 0;
	this.completed = [];
	this.y = 0;
	this.x = 0;
	window.onkeyup = function (e) { self.keyUp(e); };
}

Masher.prototype = {
	render: function(context)
	{
		context.save();
		context.fillStyle="black";
		context.fillRect(0, 0, WIDTH, HEIGHT);
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
	},
	
	update: function()
	{
	},
	
	keyUp: function(e) {
		if (this.x < 1280) this.x += 32;
		else if (this.y < 640) 
		{
			this.y += 32;
			this.x = 0;
		}
		this.progress++;
		this.completed.push(Math.floor(16*Math.random())*32);
	}
}