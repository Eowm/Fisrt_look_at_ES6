'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

///// Task 1

var hello = 'Hello';
var world = 'World';
var helloWorld = hello + ' ' + world;
console.log(helloWorld);

///// Task 2

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(x * y);
};

///// Task 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};

average(1, 3, 6, 6);

///// Task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

///// Task 5

table = [1, 4, 'Iwona', false, 'Nowak'];

var _table = table,
    _table2 = _slicedToArray(_table, 5),
    firstName = _table2[2],
    lastName = _table2[4];

console.log(names);
