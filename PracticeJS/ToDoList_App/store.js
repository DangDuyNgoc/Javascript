import { createStore } from "./core.js"
import reducer from "./reducer.js"
import withLogger from "./logger.js"

const {attach, connect, dispatch} = createStore(withLogger(reducer));

window.dispatch = dispatch;

export {
    connect,
    attach
}

// how to onfocus on input use js?  