class View {
	constructor(model, events) {
		this._model = model;
		this._events = events;
		this.bind();
		return this;
	}

	bind() {
		this.answer = document.getElementById('answer');
		document.getElementById('add').addEventListener('click', this._events.add);
		document.getElementById('minus').addEventListener('click', this._events.minus);
	}

	render() {
		this.answer.innerHTML = this._model.value;
	}
}

