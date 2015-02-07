var straightPipe = function(x, y, gx, gy, width, height, game)
{
	this.x = x;
	this.y = y;
	this.gridx = x;
	this.gridy = y;
	this.spritex = 0;
	this.spritey = 0;
	this.source = { x: this.x, y: this.y+1 };
	this.dest = { x: this.x, y: this.y-1 };
	this.width = width;
	this.height = height;
	this.game = game;
	this.dir = 0;
}

straightPipe.prototype = {
	render: function(context)
	{
		context.save();
		if(this.dir == 0)
		{
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height,
							this.x,
							this.y,
							this.width,
							this.height)
		}
		else if(this.dir == 1)
		{
			context.rotate(-Math.PI/2);
			context.translate(-this.width, 0);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height,
							this.x,
							this.y,
							this.width,
							this.height)
		}
		else if(this.dir == 2)
		{
			context.rotate(Math.PI/2);
			context.translate(0, this.height);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height,
							this.x,
							this.y,
							this.width,
							this.height)
		}
		else if(this.dir == 3)
		{
			context.rotate(Math.PI);
			context.translate(-this.width, 0);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height,
							this.x,
							this.y,
							this.width,
							this.height)
		}
		context.restore();
	},
	
	update: function()
	{
		
	},
	
	rotate: function()
	{
		this.dir = this.dir++ % 4;
		
		
	}
	
}