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
export default () => {
    // The initial value is just necessary to appease the compiler, the array will
    // be automatically thrown away and replaced with the one returned by
    // useReducer.
    const StateContext = createContext([{}, (() => { })]);
    /**
     * @description The context provider component.
     *
     * @param {Object} [props] The destructured props object.
     * @param {Any} props.initialState The initial state for the context.
     * @param {Function} props.reducer The state reducer.
     * @param {Any} props.children The children to render.
     * @returns {React.Component} The Provider component.
     */
    const CtxProvider = ({ reducer, children, initialState = {}, }) => {
        return (React.createElement(StateContext.Provider, { value: useReducer(reducer, initialState) }, children));
    };
    CtxProvider.defaultProps = {
        initialState: null,
    };
    CtxProvider.propTypes = {
        reducer: PropTypes.func.isRequired,
        children: PropTypes.element.isRequired,
        initialState: PropTypes.object,
    };
    return [
        () => useContext(StateContext),
        CtxProvider,
    ];
};
//# sourceMappingURL=ctx.js.map