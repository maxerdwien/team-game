var startPipe = function(width, height, game)
{
	this.x = 0;
	this.y = 0;
	this.gridx = 0;
	this.gridy = 0;
	this.spritex = 0;
	this.spritey = 0;
	this.dest = { x: this.x, y: this.y+1 };
	this.width = width;
	this.height = height;
	this.game = game;
	this.dir = 0;
	this.connected = false;
}

startPipe.prototype = {
	render: function(context)
	{
		context.save();
		context.drawImage(resources.pipes_sprite_sheet,
						this.spritex,
						this.spritey,
						this.width,
						this.height,
						this.x,
						this.y,
						this.width,
						this.height)
		context.restore();
	},
	
	update: function()
	{
		
	},
	
	rotate: function()
	{
		/*
		this.dir++;
		this.dir = this.dir % 4;
		
		if(this.dir == 0)
		{
			this.source = { x: this.x, y: this.y+1 };
			this.dest = { x: this.x, y: this.y-1 };
		}
		else if(this.dir == 1)
		{
			this.source = { x: this.x+1, y: this.y };
			this.dest = { x: this.x-1, y: this.y };
		}
		else if(this.dir == 2)
		{
			this.source = { x: this.x-1, y: this.y };
			this.dest = { x: this.x+1, y: this.y };
		}
		else if(this.dir == 3)
		{
			this.source = { x: this.x, y: this.y-1 };
			this.dest = { x: this.x, y: this.y+1 };
		}
		this.checkPath();
		*/
	},
	
	setDir: function(set)
	{
		/*
		this.dir = set;
		
		if(this.dir == 0)
		{
			this.source = { x: this.x, y: this.y+1 };
			this.dest = { x: this.x, y: this.y-1 };
		}
		else if(this.dir == 1)
		{
			this.source = { x: this.x+1, y: this.y };
			this.dest = { x: this.x-1, y: this.y };
		}
		else if(this.dir == 2)
		{
			this.source = { x: this.x-1, y: this.y };
			this.dest = { x: this.x+1, y: this.y };
		}
		else if(this.dir == 3)
		{
			this.source = { x: this.x, y: this.y-1 };
			this.dest = { x: this.x, y: this.y+1 };
		}*/
	},
	
	checkPath: function()
	{
		if(this.source.x < game.pipeDream.gridWidth && this.source.x >= 0 && this.source.y < game.pipeDream.gridHeight && this.source.y >= 0 && game.pipDream.pipeTiles[(this.source.y * 9) + this.source.x].connected == true)
		{
			this.connected = true;
		}
		else if(this.dest.x < game.pipeDream.gridWidth && this.dest.x >= 0 && this.dest.y < game.pipeDream.gridHeight && this.dest.y >= 0 && game.pipDream.pipeTiles[(this.dest.y * 9) + this.dest.x].connected == true)
		{
			if(this.dir == 0) setDir(3);
			else if(this.dir == 1) setDir(2);
			else if(this.dir == 2) setDir(1);
			else if(this.dir == 3) setDir(0);
		}
	},
	
}