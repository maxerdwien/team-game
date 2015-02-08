var Cutscene = function(game)
{
	this.game = game;
	this.currentScene = 0;
	this.counter = 0;
}

Cutscene.prototype = {
	render: function(context)
	{
		switch (this.currentScene)
		{
			case 0: 
				context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen1, 0, 0, 1280, 320, 0, 160, 1280, 320);
				this.counter++;
				if (this.counter >= 30) //change to 600 or maybe 500
				{
					this.counter = 0;
					this.currentScene++;
				}
				break;
			case 1: 
				context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen2, 0, 0, 1280, 320, 0, 160, 1280, 320);
				this.counter++;
				if (this.counter >= 30) //change to 600 or maybe 500
				{
					this.counter = 0;
					this.currentScene++;
				}
				break;
			case 2: 
				context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen3, 0, 0, 1280, 320, 0, 160, 1280, 320);
				this.counter++;
				if (this.counter >= 30) //change to 600 or maybe 500
				{
					this.counter = 0;
					this.currentScene++;
				}
				break;
			case 3:
				this.counter++;
				game.mode = "Mashing";
				break;
			case 4: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen3, 0, 0, 1280, 320, 0, 160, 1280, 320);
				this.counter++;
				if (this.counter >= 30) //change to 600 or maybe 500
				{
					this.counter = 0;
					this.currentScene++;
				}
				break;
		}
	},
	
	update: function()
	{
	}
}