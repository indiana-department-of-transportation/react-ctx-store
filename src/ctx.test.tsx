/**
 * ctx.test.tsx
 *
 * @description Tests for the context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */

import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import createDataStore from './ctx';

type ReducerState = {
  foo?: string,
}

type ReducerAction = {
  type: string,
}

describe('createDataStore', () => {
  // This is here for the typecheck, if types are wrong this will fail
  // to compile and the tests won't run.
  it('should return a hook and a context provider', () => {
    const [useDataStore, CtxProvider] = createDataStore();
    expect(true).toBe(true);
  });

  describe('CtxProvider', () => {
    it('should be a valid React Component', () => {
      const [_, CtxProvider] = createDataStore();
      shallow(
        <CtxProvider reducer={() => { }}>
          <span>Hello World!</span>
        </CtxProvider>
      );
    });

    // This is enforced by the typescript compiler but I've left it for
    // the purpose of documenting the contract for compiled use. Score
    // one for static typing!
    // it('should require a reducer fn, child', () => {});

    it('should optionally take an initial state', () => {
      const [_, CtxProvider] = createDataStore();
      shallow(
        <CtxProvider reducer={() => { }} initialState={{ foo: 'bar' }}>
          <span>Hello World!</span>
        </CtxProvider>
      );
    });
  });

  describe('Usage hook', () => {
    it('should access the value provided by the Context Provider', () => {
      const [useDataStore, CtxProvider] = createDataStore<ReducerState, ReducerAction>();
      const reducer = (s: ReducerState, a: ReducerAction): ReducerState => {
        return s;
      };

      const DisplayResult = ({ result }: { result: ReducerState}) => <div>{result.foo}</div>;
      const TestComponent = () => {
        const [value] = useDataStore();
        return <DisplayResult result={value} />;
      };

      const wrapper = mount(
        <CtxProvider reducer={reducer} initialState={{ foo: 'bar' }}>
          <TestComponent />
        </CtxProvider>
      );

      expect(wrapper.find(DisplayResult).props().result.foo).toBe('bar');
    });

    it('should be able to modify the state via the dispatch function', () => {
      const [useDataStore, CtxProvider] = createDataStore<ReducerState, ReducerAction>();
      const reducer = (s: ReducerState, a: ReducerAction): ReducerState => {
        if (a.type === 'change') return { foo: 'baz' };
        return s;
      };

      const DisplayResult = ({ result }: { result: ReducerState }) => <div>{result.foo}</div>;
      const TestComponent = () => {
        const [value, dispach] = useDataStore();
        const fire = () => dispach({ type: 'change' });
        return (
          <React.Fragment>
            <button onClick={fire}>btn</button>
            <DisplayResult result={value} />
          </React.Fragment>
        );
      };

      const wrapper = mount(
        <CtxProvider reducer={reducer} initialState={{ foo: 'bar' }}>
          <TestComponent />
        </CtxProvider>
      );

      expect(wrapper.find(DisplayResult).props().result.foo).toBe('bar');
      wrapper.find('button').simulate('click');
      wrapper.update();
      expect(wrapper.find(DisplayResult).props().result.foo).toBe('baz');
    });
  });
});
