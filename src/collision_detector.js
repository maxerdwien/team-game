var Collision_detector = function() {

}

Collision_detector.prototype = {
	// a and b are hitboxes, NOT objects that return hitboxes
	detect: function(a, b) {
		if (a.type == "rect") {
			if (b.type == "rect") {
				return this.twoRects(a, b);
			} else if (b.type == "circle") {
				return this.circleRect(b, a);
			}
		} else if (a.type == "circle") {
			if (b.type == "rect") {
				return this.circleRect(a, b);
			} else if (b.type == "circle") {
				return this.twoCircles(a, b);
			}
		}
	},
	
	twoRects: function(a, b) {
		var centerax = a.x + (a.w/2);
		var centeray = a.y + (a.h/2);
		
		var centerbx = b.x + (b.w/2);
		var centerby = b.y + (b.h/2);
		
		if (Math.abs(centerax - centerbx) <= (a.w + b.w)/2
			&& Math.abs(centeray - centerby) <= (a.h + b.h)/2) {
			return true;
		}
		return false;
	},
	
	twoCircles: function(a, b) {
		var dist_squared = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
		if (Math.pow(a.r + b.r, 2) > dist_squared) {
			return true;
		} else {
			return false;
		}
	},
	
	// a is a circle, b is a rect
	circleRect: function(a, b) {
		if ((a.x + a.r > b.x) && (a.x - a.r < b.x + b.w)
				&& (a.y > b.y) && (a.y < b.y + b.h)) {
			return true;
		}
		
		if ((a.y + a.r > b.y) && (a.y - a.r < b.y + b.h)
				&& (a.x > b.x) && (a.x < b.x + b.w)) {
			return true;
		}
		
		if (this.twoCircles(a, {type:"circle", x:b.x, y:b.y, r:0})) {
			return true;
		}
		if (this.twoCircles(a, {type:"circle", x:b.x+b.w, y:b.y+b.h, r:0})) {
			return true;
		}
		if (this.twoCircles(a, {type:"circle", x:b.x, y:b.y+b.h, r:0})) {
			return true;
		}
		if (this.twoCircles(a, {type:"circle", x:b.x+b.w, y:b.y, r:0})) {
			return true;
		}
		
		return false;
	},
}