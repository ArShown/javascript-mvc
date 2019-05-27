class BaseView {
	constructor(model, events) {
		this._model = model;
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

	render() {
		return false;
	}
}


class View extends BaseView {
	constructor(model, events) {
		return super(model, events);
	}

	bind() {
		/* 元素綁定來自 controller 的事件 */
		this.answer = document.getElementById('answer');
		document.getElementById('add').addEventListener('click', this._events.add);
		document.getElementById('minus').addEventListener('click', this._events.minus);
		/* 訂閱資料：當內容改變時執行事件(更新畫面) */
		this._model.subscribe(this.render.bind(this));
	}

	render() {
		this.answer.innerHTML = this._model.data;
	}
}
