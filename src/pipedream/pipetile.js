var pipeTile = function(x, y, gx, gy, width, height)
{
	this.x = x;
	this.y = y;
	this.gridx = x;
	this.gridy = y;
	this.spritex = 0;
	this.spritey = 2;
	this.width = width;
	this.height = height;
}

pipeTile.prototype = {

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
		
	}
}