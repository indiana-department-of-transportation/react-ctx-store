/**
 * ctx.ts
 *
 * @description Creates a context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */
import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
/**
 * @description Utility function to create the hook and provider.
 *
 * @typeparam S The generic stand in for the state type of the reducer state.
 * @typeparam A The generic stand in for the action type of the action fed to dispatch.
 * @returns {Array} A tuple of the use hook and context provider.
 */

export default (() => {
  // The initial value is just necessary to appease the compiler, the array will
  // be automatically thrown away and replaced with the one returned by
  // useReducer.
  const StateContext = createContext([{}, () => {}]);
  /**
   * @description The context provider component.
   *
   * @param {Object} [props] The destructured props object.
   * @param {Any} props.initialState The initial state for the context.
   * @param {Function} props.reducer The state reducer.
   * @param {Any} props.children The children to render.
   * @returns {React.Component} The Provider component.
   */

  function CtxProvider({
    reducer,
    children,
    initialState = {}
  }) {
    return React.createElement(StateContext.Provider, {
      value: useReducer(reducer, initialState)
    }, children);
  }

  CtxProvider.defaultProps = {
    initialState: null
  };
  CtxProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    initialState: PropTypes.object
  };
  return [() => useContext(StateContext), CtxProvider];
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdHgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQVNBLE9BQU8sS0FBUCxJQUNFLGFBREYsRUFFRSxVQUZGLEVBR0UsVUFIRixRQU1PLE9BTlA7QUFPQSxPQUFPLFNBQVAsTUFBc0IsWUFBdEI7QUFxQkE7Ozs7Ozs7O0FBT0EsZ0JBQWUsTUFBb0U7QUFFakY7QUFDQTtBQUNBO0FBQ0EsUUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsRUFBRCxFQUFXLE1BQUssQ0FBRyxDQUFuQixDQUFELENBQWxDO0FBRUE7Ozs7Ozs7Ozs7QUFTQSxXQUFTLFdBQVQsQ0FBcUI7QUFDbkIsSUFBQSxPQURtQjtBQUVuQixJQUFBLFFBRm1CO0FBR25CLElBQUEsWUFBWSxHQUFHO0FBSEksR0FBckIsRUFJNkI7QUFDM0IsV0FDRSxLQUFBLENBQUEsYUFBQSxDQUFDLFlBQVksQ0FBQyxRQUFkLEVBQXNCO0FBQUMsTUFBQSxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQUQsRUFBVSxZQUFWO0FBQWxCLEtBQXRCLEVBQ0csUUFESCxDQURGO0FBS0Q7O0FBRUQsRUFBQSxXQUFXLENBQUMsWUFBWixHQUEyQjtBQUN6QixJQUFBLFlBQVksRUFBRTtBQURXLEdBQTNCO0FBSUEsRUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QjtBQUN0QixJQUFBLE9BQU8sRUFBRSxTQUFTLENBQUMsSUFBVixDQUFlLFVBREY7QUFFdEIsSUFBQSxRQUFRLEVBQUUsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsVUFGTjtBQUd0QixJQUFBLFlBQVksRUFBRSxTQUFTLENBQUM7QUFIRixHQUF4QjtBQU1BLFNBQU8sQ0FDTCxNQUFNLFVBQVUsQ0FBQyxZQUFELENBRFgsRUFFTCxXQUZLLENBQVA7QUFJRCxDQTFDRCIsImZpbGUiOiJjdHgudW1kLmpzIn0=