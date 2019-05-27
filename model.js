class Model {
	constructor() {
		this._value = 0;
		return this;
	}

	set value(val) {
		this._value = val;
	}

	get value() {
		return this._value;
	}

	addOne() {
		this._value += 1;
	}

	minusOne() {
		this._value -= 1;
	}
}
