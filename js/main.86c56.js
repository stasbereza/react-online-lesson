(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"comment":"styles-m__comment---3QJah","heart":"styles-m__heart---ivO2e","overlay":"styles-m__overlay---3GiVn","photo":"styles-m__photo---3VQjO"};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Photo extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), _defineProperty(_defineProperty(_defineProperty(this, "state", {
      isOverlayed: false
    }), "_showOverlay", () => {
      this.setState({
        isOverlayed: true
      });
    }), "_hideOverlay", () => {
      this.setState({
        isOverlayed: false
      });
    }), _temp;
  }

  render() {
    const {
      src,
      likes,
      comments
    } = this.props;
    const {
      isOverlayed
    } = this.state;
    const actions = isOverlayed ? _react.default.createElement("div", {
      className: _stylesM.default.overlay
    }, _react.default.createElement("span", {
      className: _stylesM.default.heart
    }, likes), _react.default.createElement("span", {
      className: _stylesM.default.comment
    }, comments)) : null;
    return _react.default.createElement("div", {
      className: _stylesM.default.photo,
      onMouseEnter: this._showOverlay,
      onMouseLeave: this._hideOverlay
    }, _react.default.createElement("img", {
      src: src
    }), actions);
  }

}

exports.default = Photo;

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = [{"id":"123","name":"photo1","likes":19,"comments":2},{"id":"456","name":"photo2","likes":130,"comments":21},{"id":"789","name":"photo3","likes":1,"comments":2},{"id":"987","name":"photo4","likes":44,"comments":14},{"id":"654","name":"photo5","likes":15,"comments":9},{"id":"321","name":"photo6","likes":34,"comments":2},{"id":"132","name":"photo7","likes":40,"comments":0},{"id":"312","name":"photo8","likes":23,"comments":5},{"id":"423","name":"photo9","likes":56,"comments":9},{"id":"432","name":"photo10","likes":34,"comments":2},{"id":"534","name":"photo11","likes":55,"comments":7},{"id":"645","name":"photo12","likes":33,"comments":3},{"id":"634","name":"photo13","likes":87,"comments":157}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-13.2a38b.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-12.b26a7.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-11.213e0.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-10.36139.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-9.d9ea8.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-8.ba9f8.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-7.590b1.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-6.147f7.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-5.78cd2.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-4.ebae5.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-3.697b9.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-2.03a88.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/photo-1.ff648.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "photo1", {
  enumerable: true,
  get: function () {
    return _photo.default;
  }
});
Object.defineProperty(exports, "photo2", {
  enumerable: true,
  get: function () {
    return _photo2.default;
  }
});
Object.defineProperty(exports, "photo3", {
  enumerable: true,
  get: function () {
    return _photo3.default;
  }
});
Object.defineProperty(exports, "photo4", {
  enumerable: true,
  get: function () {
    return _photo4.default;
  }
});
Object.defineProperty(exports, "photo5", {
  enumerable: true,
  get: function () {
    return _photo5.default;
  }
});
Object.defineProperty(exports, "photo6", {
  enumerable: true,
  get: function () {
    return _photo6.default;
  }
});
Object.defineProperty(exports, "photo7", {
  enumerable: true,
  get: function () {
    return _photo7.default;
  }
});
Object.defineProperty(exports, "photo8", {
  enumerable: true,
  get: function () {
    return _photo8.default;
  }
});
Object.defineProperty(exports, "photo9", {
  enumerable: true,
  get: function () {
    return _photo9.default;
  }
});
Object.defineProperty(exports, "photo10", {
  enumerable: true,
  get: function () {
    return _photo10.default;
  }
});
Object.defineProperty(exports, "photo11", {
  enumerable: true,
  get: function () {
    return _photo11.default;
  }
});
Object.defineProperty(exports, "photo12", {
  enumerable: true,
  get: function () {
    return _photo12.default;
  }
});
Object.defineProperty(exports, "photo13", {
  enumerable: true,
  get: function () {
    return _photo13.default;
  }
});

var _photo = _interopRequireDefault(__webpack_require__(21));

var _photo2 = _interopRequireDefault(__webpack_require__(20));

var _photo3 = _interopRequireDefault(__webpack_require__(19));

var _photo4 = _interopRequireDefault(__webpack_require__(18));

var _photo5 = _interopRequireDefault(__webpack_require__(17));

var _photo6 = _interopRequireDefault(__webpack_require__(16));

var _photo7 = _interopRequireDefault(__webpack_require__(15));

var _photo8 = _interopRequireDefault(__webpack_require__(14));

var _photo9 = _interopRequireDefault(__webpack_require__(13));

var _photo10 = _interopRequireDefault(__webpack_require__(12));

var _photo11 = _interopRequireDefault(__webpack_require__(11));

var _photo12 = _interopRequireDefault(__webpack_require__(10));

var _photo13 = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout":"styles-m__layout---2Ityc","photos":"styles-m__photos---2Re0g"};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(24));

var photosMap = _interopRequireWildcard(__webpack_require__(22));

var _photos = _interopRequireDefault(__webpack_require__(8));

var _Photo = _interopRequireDefault(__webpack_require__(7));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
// Components
class Photos extends _react.Component {
  render() {
    const photosJSX = _photos.default.map(photo => _react.default.createElement(_Photo.default, {
      comments: photo.comments,
      key: photo.id,
      likes: photo.likes,
      src: photosMap[photo.name]
    }));

    return _react.default.createElement("div", {
      className: _stylesM.default.photos
    }, _react.default.createElement("div", {
      className: _stylesM.default.layout
    }, photosJSX));
  }

}

exports.default = Photos;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "/react-online-lesson/images/joe.7245a.jpg";

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"layout":"styles-m__layout---2OxTG","name":"styles-m__name---Pc0mR","nickname":"styles-m__nickname---1ATwE","profile":"styles-m__profile---9MNME","stats":"styles-m__stats---32hdk"};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(28));

var _joe = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.profile
    }, _react.default.createElement("div", {
      className: _stylesM.default.layout
    }, _react.default.createElement("img", {
      src: _joe.default
    }), _react.default.createElement("div", null, _react.default.createElement("div", {
      className: _stylesM.default.nickname
    }, "Joey66"), _react.default.createElement("div", {
      className: _stylesM.default.stats
    }, _react.default.createElement("span", null, "39\xA0"), _react.default.createElement("span", null, "posts"), _react.default.createElement("span", null, "1256\xA0"), _react.default.createElement("span", null, "followers"), _react.default.createElement("span", null, "7\xA0"), _react.default.createElement("span", null, "following")), _react.default.createElement("div", {
      className: _stylesM.default.name
    }, "Joey Tribbiani"))));
  }

}

exports.default = Header;

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"content":"styles-m__content---1JsXE"};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(31));

var _Profile = _interopRequireDefault(__webpack_require__(29));

var _Photos = _interopRequireDefault(__webpack_require__(25));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
// Components
class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.content
    }, _react.default.createElement(_Profile.default, null), _react.default.createElement(_Photos.default, null));
  }

}

exports.default = Header;

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"explore":"styles-m__explore---Y6ZiE","header":"styles-m__header---JRNbs","layout":"styles-m__layout---1Rhbv","likes":"styles-m__likes---1he_2","profile":"styles-m__profile---1mkx4"};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _stylesM = _interopRequireDefault(__webpack_require__(34));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Core
// Instruments
class Header extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: _stylesM.default.header
    }, _react.default.createElement("div", {
      className: _stylesM.default.layout
    }, _react.default.createElement("div", null, _react.default.createElement("a", null)), _react.default.createElement("input", {
      placeholder: "Search",
      type: "text"
    }), _react.default.createElement("nav", null, _react.default.createElement("a", {
      className: _stylesM.default.explore
    }), _react.default.createElement("a", {
      className: _stylesM.default.likes
    }), _react.default.createElement("a", {
      className: _stylesM.default.profile
    }))));
  }

}

exports.default = Header;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(0)),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},AppContainer=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,e.apply(this,arguments))}return inherits(t,e),t.prototype.render=function(){return React.Children.only(this.props.children)},t}(React.Component),hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,t){return e===t},setConfig=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(36);
} else {}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _reactHotLoader = __webpack_require__(37);

var _Header = _interopRequireDefault(__webpack_require__(35));

var _Content = _interopRequireDefault(__webpack_require__(32));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

let Instagram = (_dec = (0, _reactHotLoader.hot)(module), _dec(_class = class Instagram extends _react.Component {
  render() {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.default, null), _react.default.createElement(_Content.default, null));
  }

}) || _class);
exports.default = Instagram;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)(module)))

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(42);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(43);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */
function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = _interopRequireDefault(__webpack_require__(49));

__webpack_require__(41);

var _Instagram = _interopRequireDefault(__webpack_require__(39));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Core
// Theme
// App
_reactDom.default.render(_react.default.createElement(_Instagram.default, null), document.getElementById('app'));

/***/ })
],[[51,0,2,1]]]);
//# sourceMappingURL=main.86c56.js.map