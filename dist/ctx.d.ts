/**
 * ctx.tsx
 *
 * @description Creates a context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */
import { ReactNode, FunctionComponent } from 'react';
declare type Reducer<S, A> = (prevState: S, action: A) => S;
interface ContextProviderProps<S, A> {
    initialState?: S;
    reducer: Reducer<S, A>;
    children: ReactNode;
}
interface ContextProvider<T> extends FunctionComponent<T> {
    propTypes: any;
    defaultProps: any;
}
declare const _default: <S, A>() => [Function, ContextProvider<ContextProviderProps<S, A>>];
/**
 * @description Utility function to create the hook and provider.
 *
 * @typeparam S The generic stand in for the state type of the reducer state.
 * @typeparam A The generic stand in for the action type of the action fed to dispatch.
 * @returns {Array} A tuple of the use hook and context provider.
 */
export default _default;
