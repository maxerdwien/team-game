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
		this.pipeTiles.forEach( function(tile) {
			tile.render(context);
		})
		context.restore();
	},
	
	update: function()
	{
		
	},
	
	init: function()
	{
		for(var i = 0; i < this.gridHeight; i++)
		{
			for(var j = 0; j < this.gridWidth; j++)
			{
				this.pipeTiles.push(new pipeTile(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game));
			}
		}
	}
}