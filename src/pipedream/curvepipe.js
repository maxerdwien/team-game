var curvePipe = function(x, y, gx, gy, width, height)
{
	this.x = x;
	this.y = y;
	this.gridx = gx;
	this.gridy = gy;
	this.spritex = 0;
	this.spritey = 128;
	this.source = { x: this.gridx+1, y: this.gridy };
	this.dest = { x: this.gridx, y: this.gridy-1 };
	this.width = width;
	this.height = height;
	this.dir = 0;
	this.connected = false;
	this.flip = false;
	this.flowing = false;
	this.timer = 22;
	this.flowspeed = 22;
	this.full = false;
}

curvePipe.prototype = {
	render: function(context)
	{
		context.save();
		if(this.dir == 0)
		{
			if(this.flip == false)
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
			else
			{
				context.translate(this.x, this.y);
				context.scale(-1, 1);
				context.translate(-this.width, 0);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
							this.spritex,
							this.spritey,
							this.width,
							this.height,
							0,
							0,
							this.width,
							this.height)
			}
		}
		else if(this.dir == 1)
		{
			if(this.flip == false)
			{
				context.translate(this.x, this.y);
				context.rotate(-Math.PI/2);
				context.translate(-this.width, 0);
				context.scale(-1, 1);
				context.translate(-this.width, 0);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
			else
			{
				context.translate(this.x, this.y);
				context.rotate(-Math.PI/2);
				context.translate(-this.width, 0);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
		}
		else if(this.dir == 2)
		{
			if(this.flip == false)
			{
				context.translate(this.x, this.y);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
			else
			{
				context.translate(this.x, this.y);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.scale(-1, 1);
				context.translate(-this.width, 0);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
		}
		else if(this.dir == 3)
		{
			if(this.flip == false)
			{
				context.translate(this.x, this.y);
				context.rotate(Math.PI);
				context.translate(-this.width, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
			else
			{
				context.translate(this.x, this.y);
				context.rotate(Math.PI);
				context.translate(-this.width, -this.height);
				context.scale(-1, 1);
				context.translate(-this.width, 0);
				context.rotate(Math.PI/2);
				context.translate(0, -this.height);
				context.drawImage(resources.pipes_sprite_sheet,
								this.spritex,
								this.spritey,
								this.width,
								this.height,
								0,
								0,
								this.width,
								this.height)
			}
		}
		context.restore();
	},
	
	update: function()
	{
		if(this.flowing == true)
		{
			this.timer--;
			if(this.timer <= 0)
			{
				this.timer = this.flowspeed;
				if(this.spritex / 64 < 17)
				{
					this.spritex += 64;
				}
				else
				{
					this.spritex -= 64;
					this.full = true;
				}
			}
		}
	},
	
	rotate: function()
	{
		if(this.flowing == false && this.full == false)
		{
			if (this.dir == 0) {
				this.dir = 1;
			} else if (this.dir == 1) {
				this.dir = 3;
			} else if (this.dir == 2) {
				this.dir = 0;
			} else if (this.dir == 3) {
				this.dir = 2;
			}
			//this.dir ++;
			//this.dir = this.dir % 4;
			
			if(this.dir == 0)
			{
				this.source = { x: this.gridx+1, y: this.gridy };
				this.dest = { x: this.gridx, y: this.gridy+1 };
			}
			else if(this.dir == 1)
			{
				this.source = { x: this.gridx+1, y: this.gridy };
				this.dest = { x: this.gridx, y: this.gridy-1 };
			}
			else if(this.dir == 2)
			{
				this.source = { x: this.gridx-1, y: this.gridy };
				this.dest = { x: this.gridx, y: this.gridy+1 };
			}
			else if(this.dir == 3)
			{
				this.source = { x: this.gridx, y: this.gridy-1 };
				this.dest = { x: this.gridx-1, y: this.gridy };
			}
		}
	},
	
	setDir: function(set)
	{
		this.dir = set;
		
		if(this.dir == 0)
		{
			this.source = { x: this.gridx+1, y: this.gridy };
			this.dest = { x: this.gridx, y: this.gridy+1 };
		}
		else if(this.dir == 1)
		{
			this.source = { x: this.gridx+1, y: this.gridy };
			this.dest = { x: this.gridx, y: this.gridy-1 };
		}
		else if(this.dir == 2)
		{
			this.source = { x: this.gridx-1, y: this.gridy };
			this.dest = { x: this.gridx, y: this.gridy+1 };
		}
		else if(this.dir == 3)
		{
			this.source = { x: this.gridx, y: this.gridy-1 };
			this.dest = { x: this.gridx-1, y: this.gridy };
		}
	},
	
	checkPath: function(callx, cally)
	{
		if((callx == this.source.x && cally == this.source.y) || (callx == this.dest.x && cally == this.dest.y))
		{
			if(this.source.x < game.pipeDream.gridWidth && this.source.x >= 0 && this.source.y < game.pipeDream.gridHeight && this.source.y >= 0 && game.pipeDream.pipeTiles[(this.source.y * 9) + this.source.x].connected == true)
			{
				this.connected = true;
			}
			else if(this.dest.x < game.pipeDream.gridWidth && this.dest.x >= 0 && this.dest.y < game.pipeDream.gridHeight && this.dest.y >= 0 && game.pipeDream.pipeTiles[(this.dest.y * 9) + this.dest.x].connected == true)
			{
				if(this.fip == false) this.flip = true;
				else this.flip = false;
				this.connected = true;
				var hold = this.source;
				this.source = this.dest;
				this.dest = hold;
			}
			if(this.connected == true)
			{
				if(callx == this.dest.x && cally == this.dest.y)
				{
					if(this.source.x < game.pipeDream.gridWidth && this.source.x >= 0 && this.source.y < game.pipeDream.gridHeight && this.source.y >= 0)
					{
						pathContinues = game.pipeDream.pipeTiles[this.source.x + this.source.y * game.pipeDream.gridWidth].checkPath(this.gridx, this.gridy);
					}
					else pathContinues = false;
					if(this.full == true)
					{
						if(pathContinues == true) game.pipeDream.pipeTiles[this.source.x + this.source.y * game.pipeDream.gridWidth].flowing = true;
						else game.pipeDream.gameOver();
					}
					
				}
				else
				{
					if(this.dest.x < game.pipeDream.gridWidth && this.dest.x >= 0 && this.dest.y < game.pipeDream.gridHeight && this.dest.y >= 0)
					{
						pathContinues = game.pipeDream.pipeTiles[this.dest.x + this.dest.y * game.pipeDream.gridWidth].checkPath(this.gridx, this.gridy);
					}
					else pathContinues = false;
					if(this.full == true)
					{
						if(pathContinues == true) game.pipeDream.pipeTiles[this.dest.x + this.dest.y * game.pipeDream.gridWidth].flowing = true;
						else game.pipeDream.gameOver();
					}
				}
				return true;
			}
		}
		this.connected = false;
		return false;
	},
	
}