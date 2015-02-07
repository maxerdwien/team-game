var crossPipe = function(x, y, gx, gy, width, height, game)
{
	this.x = x;
	this.y = y;
	this.gridx = gx;
	this.gridy = gy;
	this.spritex = 0;
	this.spritey = 64;
	this.pipe1 = new straightPipe(x, y, gx, gy, width, height, game);
	this.pipe2 = new straightPipe(x, y, gx, gy, width, height, game);
	this.pipe1.spritey = this.spritey;
	this.pipe2.spritey = this.spritey;
	this.pipe2.rotate();
	this.width = width;
	this.height = height;
	this.game = game;
	this.dir = 0;
	this.connected = false;
	this.flip = false;
}

crossPipe.prototype = {
	render: function(context)
	{
		this.pipe1.render(context);
		this.pipe2.render(context);
	},
	
	update: function()
	{
		
	},
	
	rotate: function()
	{

	},
	
	setDir: function(set)
	{
		this.pipe1.setDir(set);
		this.pipe2.setDir(set);
		this.pipe2.rotate();
	},
	
	checkPath: function()
	{
		this.pipe1.checkPath();
		this.pipe2.checkPath();
	},
	
}