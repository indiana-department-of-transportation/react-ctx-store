"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports["default"] = function () {
    // The initial value is just necessary to appease the compiler, the array will
    // be automatically thrown away and replaced with the one returned by
    // useReducer.
    var StateContext = (0, _react.createContext)([{}, function () {}]);
    /**
     * @description The context provider component.
     *
     * @param {Object} [props] The destructured props object.
     * @param {Any} props.initialState The initial state for the context.
     * @param {Function} props.reducer The state reducer.
     * @param {Any} props.children The children to render.
     * @returns {React.Component} The Provider component.
     */

    var CtxProvider = function CtxProvider(_ref) {
      var reducer = _ref.reducer,
          children = _ref.children,
          _ref$initialState = _ref.initialState,
          initialState = _ref$initialState === void 0 ? {} : _ref$initialState;
      return _react2["default"].createElement(StateContext.Provider, {
        value: (0, _react.useReducer)(reducer, initialState)
      }, children);
    };

    CtxProvider.defaultProps = {
      initialState: null
    };
    CtxProvider.propTypes = {
      reducer: _propTypes2["default"].func.isRequired,
      children: _propTypes2["default"].element.isRequired,
      initialState: _propTypes2["default"].object
    };
    return [function () {
      return (0, _react.useContext)(StateContext);
    }, CtxProvider];
  };
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdHgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBNENlLFlBQW9FO0FBRWpGO0FBQ0E7QUFDQTtBQUNBLFFBQU0sWUFBWSxHQUFHLDBCQUFjLENBQUMsRUFBRCxFQUFXLFlBQUssQ0FBRyxDQUFuQixDQUFkLENBQXJCO0FBRUE7Ozs7Ozs7Ozs7QUFTQyxRQUFNLFdBQVcsR0FBRyxTQUFkLFdBQWMsT0FJWTtBQUFBLFVBSC9CLE9BRytCLFFBSC9CLE9BRytCO0FBQUEsVUFGL0IsUUFFK0IsUUFGL0IsUUFFK0I7QUFBQSxtQ0FEL0IsWUFDK0I7QUFBQSxVQUQvQixZQUMrQixrQ0FEaEIsRUFDZ0I7QUFDL0IsYUFDRSxtQkFBQSxhQUFBLENBQUMsWUFBWSxDQUFDLFFBQWQsRUFBc0I7QUFBQyxRQUFBLEtBQUssRUFBRSx1QkFBVyxPQUFYLEVBQW9CLFlBQXBCO0FBQVIsT0FBdEIsRUFDRyxRQURILENBREY7QUFLRCxLQVZBOztBQVlELElBQUEsV0FBVyxDQUFDLFlBQVosR0FBMkI7QUFDekIsTUFBQSxZQUFZLEVBQUU7QUFEVyxLQUEzQjtBQUlBLElBQUEsV0FBVyxDQUFDLFNBQVosR0FBd0I7QUFDdEIsTUFBQSxPQUFPLEVBQUUsdUJBQVUsSUFBVixDQUFlLFVBREY7QUFFdEIsTUFBQSxRQUFRLEVBQUUsdUJBQVUsT0FBVixDQUFrQixVQUZOO0FBR3RCLE1BQUEsWUFBWSxFQUFFLHVCQUFVO0FBSEYsS0FBeEI7QUFNQSxXQUFPLENBQ0w7QUFBQSxhQUFNLHVCQUFXLFlBQVgsQ0FBTjtBQUFBLEtBREssRUFFTCxXQUZLLENBQVA7QUFJRCxHIiwiZmlsZSI6ImN0eC51bWQuanMifQ==