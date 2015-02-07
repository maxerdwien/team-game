var Tower_pool = function() {

}

Tower_pool.prototype = {
	render: function(ctx) {
		ctx.save()
		for (var i = 0; i < 9; i++) {
			ctx.drawImage(resources.middle_sprite_sheet, 0, 0, 64, 64,
				576, i*64, 64, 64);
		}
		ctx.restore();
	}
}