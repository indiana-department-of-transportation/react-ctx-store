/**
 * ctx.ts
 *
 * @description Creates a context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  FunctionComponent
} from 'react';
import PropTypes from 'prop-types';

// Type of the reducer given to useReducer
type Reducer<S, A> = (prevState: S, action: A) => S

// Same as the type of the dispatch function returned from useReducer.
type Dispatch<A> = (action: A) => void

// Type for the props passed to the context provider.
interface ContextProviderProps<S, A> {
  initialState?: S,
  reducer: Reducer<S, A>,
  children: ReactNode,
}

// TODO: type these, e.g. ValidationMap<T>, Partial<T>
interface ContextProvider<T> extends FunctionComponent<T> {
  propTypes: any,
  defaultProps: any,
}

/**
 * @description Utility function to create the hook and provider.
 *
 * @typeparam S The generic stand in for the state type of the reducer state.
 * @typeparam A The generic stand in for the action type of the action fed to dispatch.
 * @returns {Array} A tuple of the use hook and context provider.
 */
export default <S, A>(): [Function, ContextProvider<ContextProviderProps<S, A>>] => {

  // The initial value is just necessary to appease the compiler, the array will
  // be automatically thrown away and replaced with the one returned by
  // useReducer.
  const StateContext = createContext([{} as S, (() => {}) as Dispatch<A>]);

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
    initialState = {} as S,
  }: ContextProviderProps<S, A>) {
    return (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
      </StateContext.Provider>
    );
  }

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
