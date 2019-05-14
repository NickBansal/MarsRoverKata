module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jest": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018
	},
	"rules": {
		'no-unused-vars': 1,
		"semi": 2,
		"quotes": 2
	}
};