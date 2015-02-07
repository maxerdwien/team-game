var pipeTile = function(x, y, gx, gy, width, height, game)
{
	this.x = x;
	this.y = y;
	this.gridx = x;
	this.gridy = y;
	this.spritex = 0;
	this.spritey = Math.floor(Math.random() * 3) * 64;
	this.width = width;
	this.height = height;
	this.game = game;
}

pipeTile.prototype = {

	render: function(context)
	{
		context.save();
		context.drawImage(game.pipe_sprite_sheet,
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