var pipeTile = function(x, y, gx, gy width, height, game)
{
	this.x = x;
	this.y = y;
	this.gridx = x;
	this.gridy = y;
	this.width = width;
	this.height = height;
	this.game = game;
}

pipeTile.prototype = {

	render: function(context)
	{
		context.save();
		context.fillStyle="white"
		context.fillRect(x, y, this.width, this.height);
		context.clearRect(x+4, y+4, this.width-4, this.height-4);
		context.restore();
	},
	
	update: function()
	{
		
	}
}