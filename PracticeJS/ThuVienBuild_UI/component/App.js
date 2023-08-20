import html from '../core.js'
import {connect} from '../store.js'

const connector = connect();

function App({cars}) {
    console.log(cars);
    return html`
        <ul>${cars.map(car => `<li>${car}</li>`)}</ul>
        <button onclick="dispatch('ADD', 'Porche')">ADD</button>
    `
}


export default connector(App);