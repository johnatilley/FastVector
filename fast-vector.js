class FastVector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	add(B) {
		var nx, ny;
		if (typeof (B) == 'number') {
			nx = this.x + B;
			ny = this.y + B;
		} else {
			nx = this.x + B.x;
			ny = this.y + B.y;
		}
		return new FastVector(nx, ny);
	}

	dot(B) {
		return ((this.x * B.x) + (this.y * B.y));
	}

	length() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	}

	multiply(B) {
		var nx, ny;
		if (typeof (B) == 'number') {
			nx = this.x * B;
			ny = this.y * B;
		} else {
			nx = this.x * B.x;
			ny = this.y * B.y;
		}
		return new FastVector(nx, ny);
	}

	squaredLength() {
		return (this.x * this.x) + (this.y * this.y);
	}

	sum() {
		return this.x + this.y;
	}

	subtract(B) {
		var nx, ny;
		if (typeof (B) == 'number') {
			nx = this.x - B;
			ny = this.y - B;
		} else {
			nx = this.x - B.x;
			ny = this.y - B.y;
		}
		return new FastVector(nx, ny);
	}

	toString() {
		return "[" + this.x + "," + this.y + "]";
	}

	/**
	 * Returns an angle in degrees between two vectors
	 */
	direction(B) {
		let directionVector = this.subtract(B);
		return Math.atan2(directionVector.y, directionVector.x) * (180 / Math.PI);
	}

	/**
	 * Returns a new Vector object based on a direction and a distance from this vector
	 */
	destination(direction, distance) {
		let x = parseInt(distance * Math.cos(direction / (180 / Math.PI)));
		let y = parseInt(distance * Math.sin(direction / (180 / Math.PI)));
		return new FastVector(x, y)
	}
}
