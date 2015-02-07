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
		this.pipeTiles.push(new startPipe(this.cellWidth, this.cellHeight, game, true));
		var pathLength = (Math.floor(Math.random() * 40) + 15) % 30;
		var ptrx = 0;
		var ptry = 1;
		this.pipeTiles[ptrx + ptry * this.gridWidth] = this.pipeTiles[ptrx + ptry * this.gridWidth] = new straightPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight,game, true);
		while(pathLength > 0)
		{
			var rng = Math.floor(Math.random() * 4);
			
			if(rng == 0 && ptrx >= 0 && ptrx < this.gridWidth-1 && this.pipeTiles[(ptrx+1)+(ptry * this.gridWidth)] == undefined)
			{
				ptrx++;
				this.pipeTiles[ptrx + ptry * this.gridWidth] = new straightPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight,game, true);
			}
			else if(rng == 1 && ptrx > 0 && ptrx < this.gridWidth && this.pipeTiles[(ptrx-1)+(ptry * this.gridWidth)] == undefined)
			{
				ptrx--;
				this.pipeTiles[ptrx + ptry * this.gridWidth] = new straightPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight,game, true);
			}
			else if(rng == 2 && ptry >= 0 && ptry < this.gridHeight-1 && this.pipeTiles[(ptrx)+((ptry + 1) * this.gridWidth)] == undefined)
			{
				ptry++;
				this.pipeTiles[ptrx + ptry * this.gridWidth] = new straightPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight,game, true);
			}
			else if(rng == 3 && ptry > 0 && ptrx < this.gridHeight && this.pipeTiles[(ptrx)+((ptry - 1) * this.gridWidth)] == undefined)
			{
				ptry--;
				this.pipeTiles[ptrx + ptry * this.gridWidth] = new straightPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight,game, true);
			}
			pathLength--;
		}
		this.pipeTiles[ptrx + ptry * this.gridWidth] = new endPipe(ptrx * this.cellWidth, ptry * this.cellHeight, ptrx, ptry, this.cellWidth, this.cellHeight, game);
		for(var i = 0; i < this.gridHeight; i++)
		{
			for(var j = 0; j < this.gridWidth; j++)
			{
				if(this.pipeTiles[j + i*this.gridWidth] == undefined)
				{
					var rng = Math.floor(Math.random() * 3);
					if(rng == 0) this.pipeTiles[j + i*this.gridWidth] = new straightPipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game, false);
					else if(rng == 1) this.pipeTiles[j + i*this.gridWidth] = new curvePipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game);
					else if(rng == 2) this.pipeTiles[j + i*this.gridWidth] = new crossPipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game);
				}
			}
		}
	},
}