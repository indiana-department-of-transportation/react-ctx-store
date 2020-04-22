/**
 * ctx.tsx
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
import { IPojo } from '@jasmith79/ts-utils';

// Type of the reducer given to useReducer
type Reducer<S, A> = (prevState: S, action: A) => S

// Same as the type of the dispatch function returned from useReducer.
type Dispatch<A> = (action: A) => void

type GenericReducerAction = {
  type: string
}

type ContextParams<S, A> = [S, Dispatch<A>];

// Type for the props passed to the context provider.
export interface ContextProviderProps<S extends {}, A> {
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
export default <S extends IPojo, A = GenericReducerAction>(
  initialData: S = ({} as S),
): [() => ContextParams<S, A>, ContextProvider<ContextProviderProps<S, A>>] => {

  const ctxParams: ContextParams<S, A> = [initialData, (() => { }) as Dispatch<A>];
  const StateContext = createContext<ContextParams<S, A>>(ctxParams);

  /**
   * @description The context provider component.
   *
   * @param {Object} [props] The destructured props object.
   * @param {Any} props.initialState The initial state for the context.
   * @param {Function} props.reducer The state reducer.
   * @param {Any} props.children The children to render.
   * @returns {React.Component} The Provider component.
   */
  const CtxProvider = ({
    reducer,
    children,
    initialState,
  }: ContextProviderProps<S, A>) => {
    const first = initialState || initialData || {};
    return (
      <StateContext.Provider value={useReducer(reducer, first)}>
        {children}
      </StateContext.Provider>
    );
  }

  CtxProvider.defaultProps = {
    initialState: null,
  };

  CtxProvider.propTypes = {
    reducer: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    initialState: PropTypes.object,
  };

  return [
    () => useContext(StateContext),
    CtxProvider,
  ];
};
