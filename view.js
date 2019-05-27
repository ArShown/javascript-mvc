class BaseView {
	constructor(data, events) {
		this._data = data;
		this._events = events;
		this.init();
		return this;
	}

	init() {
		this.bind();
		this.render();
	}

	bind() {
		return false;
	}

	destroy() {
		return false;
	}

	update(data) {
		this._data = data;
		this.render();
	}

	render() {
		return false;
	}
}

class View extends BaseView {
	constructor(data, events) {
		return super(data, events);
	}

	bind() {
		/* 元素綁定來自 controller 的事件 */
		this.answer = document.getElementById('answer');
		document.getElementById('add').addEventListener('click', this._events.add);
		document.getElementById('minus').addEventListener('click', this._events.minus);
	}

	destroy() {
		document.getElementById('add').removeEventListener('click', this._events.add);
		document.getElementById('minus').removeEventListener('click', this._events.minus);
	}

	render() {
		this.answer.innerHTML = this._data;
	}
}
