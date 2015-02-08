var PipeDream = function(game)
{
		this.pDream = this;
		this.game = game;
		this.pipeTiles = [];
		this.gridWidth = 9;
		this.gridHeight = 9;
		this.screenWidth = 576;
		this.screenHeight = 576;
		this.cellWidth = 64;
		this.cellHeight = 64;
		this.won = false;
		this.stopTime = 0;
		this.pause = false;
}

PipeDream.prototype = {
	render: function(context)
	{
		context.save();
		// matches grey of TD background
		context.fillStyle = "rgb(84,85,75)";
		context.fillRect(0, 0, this.screenWidth, this.screenHeight);
		this.pipeTiles.forEach( function(tile) {
			tile.render(context);
		})
		context.restore();
		if(this.pause == true)
		{
			context.save();
			context.fillStyle="rgba(0, 0, 0, 0.1)";
			context.fillRect(0, 0, this.screenWidth, this.screenHeight);
			context.restore();
		}
	},
	
	update: function()
	{
		if(this.won == true)
		{
			this.init();
			this.won = false;
		}
		else if(this.pause == false)
		{
			this.pipeTiles.forEach( function(tile)
			{
				tile.update();
			});
		}
		else if(this.pause == true && game.gameTime - this.stopTime >= 5000)
		{
			this.pause = false;
			this.init();
		}
	},
	
	checkPath: function()
	{
		this.pipeTiles[0].checkPath();
	},
	
	init: function()
	{
		this.pipeTiles.length = 0;
		this.pipeTiles.push(new startPipe(this.cellWidth, this.cellHeight, game));
		
		// create a path to one of the towers, so the game is winnable
		var pathLength = (Math.floor(Math.random() * 40) % 15) + 15;
		var lastpt = { x: 0, y: 0 }
		var curpt = { x: 0, y: 1 }
		var nxtpt = { x: 0, y: 1 }
		this.pipeTiles[curpt.x + curpt.y * this.gridWidth] =
			new straightPipe(curpt.x * this.cellWidth, curpt.y * this.cellHeight, curpt.x, curpt.y, this.cellWidth, this.cellHeight,game);
		while(pathLength > 0)
		{
			var rng = Math.floor(Math.random() * 4);
			
			if(rng == 0 && curpt.x >= 0 && curpt.x < this.gridWidth-1 && this.pipeTiles[(curpt.x+1)+(curpt.y * this.gridWidth)] == undefined)
			{
				nxtpt.x = curpt.x + 1;
				nxtpt.y = curpt.y;
			}
			else if(rng == 1 && curpt.x > 0 && curpt.x < this.gridWidth && this.pipeTiles[(curpt.x-1)+(curpt.y * this.gridWidth)] == undefined)
			{
				nxtpt.x = curpt.x - 1;
				nxtpt.y = curpt.y;
			}
			else if(rng == 2 && curpt.y >= 0 && curpt.y < this.gridHeight-1 && this.pipeTiles[(curpt.x)+((curpt.y + 1) * this.gridWidth)] == undefined)
			{
				nxtpt.x = curpt.x;
				nxtpt.y = curpt.y + 1;
			}
			else if(rng == 3 && curpt.y > 0 && curpt.y < this.gridHeight && this.pipeTiles[(curpt.x)+((curpt.y - 1) * this.gridWidth)] == undefined)
			{
				nxtpt.x = curpt.x;
				nxtpt.y = curpt.y - 1;
			}
			pathLength--;
			console.log("tried direction", rng);
			console.log("remaining:", pathLength);
			if(nxtpt.x != curpt.x || nxtpt.y != curpt.y)
			{
				this.determineTile(lastpt, curpt, nxtpt);
				lastpt.x = curpt.x;
				lastpt.y = curpt.y;
				curpt.x = nxtpt.x;
				curpt.y = nxtpt.y;
			}
		}
		
		// cap off the path with the tower pipe
		this.pipeTiles[curpt.x + curpt.y * this.gridWidth] = new endPipe(curpt.x * this.cellWidth, curpt.y * this.cellHeight, curpt.x, curpt.y, this.cellWidth, this.cellHeight, game);
		if(lastpt.x < curpt.x)  this.pipeTiles[curpt.x + curpt.y * this.gridWidth].setDir(1);
		else if(lastpt.x > curpt.x) this.pipeTiles[curpt.x + curpt.y * this.gridWidth].setDir(2);
		else if(lastpt.y < curpt.y) this.pipeTiles[curpt.x + curpt.y * this.gridWidth].setDir(0);
		else this.pipeTiles[curpt.x + curpt.y * this.gridWidth].setDir(3);
		
		// fill in the rest of the map randomly
		var numEnds = 3;
		while(numEnds > 0)
		{
			var x = Math.floor(Math.random() * 9);
			var y = Math.floor(Math.random() * 9);
			if(this.pipeTiles[x + y * this.gridWidth] == undefined)
			{
				this.pipeTiles[x + y * this.gridWidth] = new endPipe(x * this.cellWidth, y * this.cellHeight, x, y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[x + y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
				numEnds--;
			}
		}
		
		for(var i = 0; i < this.gridHeight; i++)
		{
			for(var j = 0; j < this.gridWidth; j++)
			{
				if(this.pipeTiles[j + i*this.gridWidth] == undefined)
				{
					//this.pipeTiles[j + i*this.gridWidth] = new curvePipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game, false);
					//this.pipeTiles[j + i*this.gridWidth].setDir(3);
					//this.pipeTiles[j + i*this.gridWidth].flip = true;
					var rng = Math.floor(Math.random() * 5);
					if(rng < 4) this.pipeTiles[j + i*this.gridWidth] = new curvePipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game);
					else if(rng < 5) this.pipeTiles[j + i*this.gridWidth] = new straightPipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game);
					else this.pipeTiles[j + i*this.gridWidth] = new crossPipe(j * this.cellWidth, i * this.cellHeight, j, i, this.cellWidth, this.cellHeight, game);
					this.pipeTiles[j + i * this.gridWidth].setDir(Math.floor(Math.random() * 3));
				}
			}
		}
	},
	
	determineTile: function(last, current, next)
	{
		if(last.x < current.x && next.x > current.x)
		{
			this.pipeTiles[current.x + current.y * this.gridWidth] = new straightPipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
			this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
		}
		if(last.x > current.x && next.x < current.x)
		{
			this.pipeTiles[current.x + current.y * this.gridWidth] = new straightPipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
			this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
		}
		if(last.y < current.y && next.y > current.y)
		{
			this.pipeTiles[current.x + current.y * this.gridWidth] = new straightPipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
			this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
		}
		if(last.y > current.y && next.y < current.y)
		{
			this.pipeTiles[current.x + current.y * this.gridWidth] = new straightPipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
			this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
		}
		if(last.x < current.x && next.x == current.x)
		{
			if(next.y > current.y)
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
			else
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
		}
		if(last.x > current.x && next.x == current.x)
		{
			if(next.y > current.y)
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
			else
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
		}
		if(last.y < current.y && next.y == current.y)
		{
			if(next.x > current.x)
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
			else
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
		}
		if(last.y > current.y && next.y == current.y)
		{
			if(next.x > current.x)
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
			else
			{
				this.pipeTiles[current.x + current.y * this.gridWidth] = new curvePipe(current.x * this.cellWidth, current.y * this.cellHeight, current.x, current.y, this.cellWidth, this.cellHeight, game);
				this.pipeTiles[current.x + current.y * this.gridWidth].setDir(Math.floor(Math.random() * 4));
			}
		}
	},
	
	gameOver: function()
	{
		this.pause = true;
		this.stopTime = game.gameTime;
	}
}