var App = require('./src/App.purs');
var initialState = require('./src/Dice.purs').initialState;
// vanilla hot module reloading
// @see https://webpack.github.io/docs/hot-module-replacement.html
if(module.hot) {
	var app = App.main(window.lastState || initialState)();
	// don't lose state while HMR
	app.state.subscribe(function (state) {
	 window.lastState = state;
	});
	module.hot.accept();
} else {
	App.main(initialState)();
}
