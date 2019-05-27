class Controller {
	constructor() {
		this._model = new Model();
		this._view = new View(this._model.data, {
			add: this.add.bind(this),
			minus: this.minus.bind(this)
		});
		this._model.subscribe(this._view.update.bind(this._view));
		return this;
	}

	add() {
		this._model.addOne();
	}

	minus() {
		this._model.minusOne();
	}
}
