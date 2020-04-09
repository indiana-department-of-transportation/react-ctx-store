"use strict";
/**
 * ctx.tsx
 *
 * @description Creates a context hook and provider.
 *
 * @author jasmith79@gmail.com
 * @license MIT
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
/**
 * @description Utility function to create the hook and provider.
 *
 * @typeparam S The generic stand in for the state type of the reducer state.
 * @typeparam A The generic stand in for the action type of the action fed to dispatch.
 * @returns {Array} A tuple of the use hook and context provider.
 */
exports.default = (initialData = {}) => {
    const ctxParams = [initialData, (() => { })];
    const StateContext = react_1.createContext(ctxParams);
    /**
     * @description The context provider component.
     *
     * @param {Object} [props] The destructured props object.
     * @param {Any} props.initialState The initial state for the context.
     * @param {Function} props.reducer The state reducer.
     * @param {Any} props.children The children to render.
     * @returns {React.Component} The Provider component.
     */
    const CtxProvider = ({ reducer, children, initialState, }) => {
        const first = initialState || initialData || {};
        return (react_1.default.createElement(StateContext.Provider, { value: react_1.useReducer(reducer, first) }, children));
    };
    CtxProvider.defaultProps = {
        initialState: null,
    };
    CtxProvider.propTypes = {
        reducer: prop_types_1.default.func.isRequired,
        children: prop_types_1.default.node.isRequired,
        initialState: prop_types_1.default.object,
    };
    return [
        react_1.useCallback(() => react_1.useContext(StateContext), [StateContext]),
        CtxProvider,
    ];
};
//# sourceMappingURL=ctx.js.map