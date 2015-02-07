var pipeTile = function(x, y, gx, gy, width, height, game)
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
		context.fillStyle="black"
		context.fillRect(this.x, this.y, this.width, this.height);
		context.clearRect(this.x+4, this.y+4, this.width-9, this.height-9);
		context.restore();
	},
	
	update: function()
	{
		
	}
}