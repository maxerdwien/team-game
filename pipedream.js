var PipeDream = function(game)
{
		this.pDream = this;
		this.game = game;
		this.pipeTiles = []
		this.gridWidth = 9
		this.gridHeight = 9
		this.screenWidth = 576;
		this.screenHeight = 576;
		this.cellWidth = 64;
		this.cellHeight = 64;
}

PipeDream.prototype = {
	render: function(context)
	{
		context.save();
		context.fillStyle="black";
		context.fillRect(0, 0, this.screenWidth, this.screenHeight);
		context.restore();
	}
	
	update: function()
	{
		
	}
}