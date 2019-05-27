class BaseModel {
	constructor(data) {
		this._data = data;
		this._event = new Event();
		return this;
	}

	set data(val) {
		this._data = val;
		this._event.notifyObservers(val);
	}

	get data() {
		return this._data;
	}

	subscribe(callback) {
		return this._event.attach(callback);
	}

	unsubscribe(eventId) {
		this._event.detach(eventId);
	}
}

class Model extends BaseModel {
	constructor() {
		return super(0);
	}

	addOne() {
		this.data += 1;
	}

	minusOne() {
		this.data -= 1;
	}
}
