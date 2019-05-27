class Model {
	constructor() {
		this._value = 0;
		this._event = new Event();
		return this;
	}

	set value(val) {
		this._value = val;
	}

	get value() {
		return this._value;
	}

	subscribe(callback) {
		return this._event.attach(callback);
	}

	unsubscribe(eventId) {
		return this._event.detach(eventId);
	}

	addOne() {
		this._value += 1;
		this._event.notifyObservers(this._value);
	}

	minusOne() {
		this._value -= 1;
		this._event.notifyObservers(this._value);
	}
}
