class Controller {
	constructor() {
		this._model = new Model();
		this._view = new View(this._model, {
			add: this.add.bind(this),
			minus: this.minus.bind(this)
		});
		this._view.init();
		return this;
	}

	add() {
		this._model.addOne();
	}

	minus() {
		this._model.minusOne();
	}
}
