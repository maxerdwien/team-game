var endPipe = function(x, y, gx, gy, width, height, game)
{
	this.x = x;
	this.y = y;
	this.gridx = gx;
	this.gridy = gy;
	this.spritex = 0;
	this.spritey = 0;
	this.turret = new Bullet_tower(x, y);
	this.source = { x: this.gridx, y: this.gridy+1 };
	this.width = width;
	this.height = height;
	this.game = game;
	this.dir = 0;
	this.connected = false;
	this.flowing = false;
}

endPipe.prototype = {
	render: function(context)
	{
		context.save();
		if(this.dir == 0)
		{
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height/2,
							this.x,
							this.y,
							this.width,
							this.height/2)
		}
		else if(this.dir == 1)
		{
			context.translate(this.x, this.y);
			context.rotate(-Math.PI/2);
			context.translate(-this.width, 0);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height/2,
							0,
							0,
							this.width,
							this.height/2)
		}
		else if(this.dir == 2)
		{
			context.translate(this.x, this.y);
			context.rotate(Math.PI/2);
			context.translate(0, -this.height);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height/2,
							0,
							0,
							this.width,
							this.height/2)
		}
		else if(this.dir == 3)
		{
			context.translate(this.x, this.y);
			context.rotate(Math.PI);
			context.translate(-this.width, -this.height);
			context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height/2,
							0,
							0,
							this.width,
							this.height/2)
		}
		context.restore();
		this.turret.render(context);
	},
	
	update: function()
	{
		if(this.flowing == true)
		{
			this.spritex += (64 * 17);
			game.towers.push(this.turret);
			game.tp.addTower(this.turret);
			game.pipeDream.won = true;
		}
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
		
		this.dir = set;
		
		if(this.dir == 0)
		{
			this.source = { x: this.gridx, y: this.gridy-1 };
		}
		else if(this.dir == 1)
		{
			this.source = { x: this.gridx-1, y: this.gridy };
		}
		else if(this.dir == 2)
		{
			this.source = { x: this.gridx+1, y: this.gridy };
		}
		else if(this.dir == 3)
		{
			this.source = { x: this.gridx, y: this.gridy+1 };
		}
	},
	
	checkPath: function(callx, cally)
	{
		if(callx == this.source.x && cally == this.source.y)
		{
			if(this.source.x < game.pipeDream.gridWidth && this.source.x >= 0 && this.source.y < game.pipeDream.gridHeight && this.source.y >= 0 && game.pipeDream.pipeTiles[(this.source.y * 9) + this.source.x].connected == true && game.pipeDream.won == false)
			{
				this.connected = true;
				//console.log("Connection Made");
				return true;
			}
			//else console.log("no connection made");
			return false;
		}
	},
	
}