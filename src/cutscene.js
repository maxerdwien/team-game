var Cutscene = function(game)
{
	this.game = game;
	this.skip = false;
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
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
				}
				break;
			case 1: 
				context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen2, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
				}
				break;
			case 2: 
				context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.screen3, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
				}
				break;
			case 3:
				game.mode = "Mashing";
				this.currentScene++;
				break;
			case 4: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.prelevel1, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
					game.mode = "Towers";
				}
				break;
			case 5: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.prelevel2, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
					game.mode = "Towers";
				}
				break;
			case 6: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.prelevel3, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
					game.mode = "Towers";
				}
				break;
			case 7: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.prelevel4, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
					game.mode = "Towers";
				}
				break;
			case 8: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.prelevel5, 0, 0, 1280, 320, 0, 160, 1280, 320);
				if (this.skip)
				{
					this.skip = false;
					this.currentScene++;
					game.mode = "Towers";
				}
				break;
			case 9: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.end, 0, 0, 1280, 320, 0, 160, 1280, 320);
				break;
			
			case 15: context.fillStyle="black";
				context.fillRect(0, 0, WIDTH, HEIGHT);
				context.drawImage(resources.game_over, 0, 0, 1280, 320, 0, 160, 1280, 320);
				break;
		}
	},
	
	update: function()
	{
	}
}