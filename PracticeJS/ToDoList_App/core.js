export default function html([first, ...string], ...value) {
    return value.reduce(
        (acc, cur) => acc.concat(cur, string.shift()),
        [first]
    ) 
    .filter(x => x && x !== true || x === 0)
    .join('');
};

export function createStore(reducer) {
    let state = reducer();
    const roots = new Map();

    /* Object Map chứa các cặp (key, value). Bất kỳ giá trị nào đều có được sử dụng để làm key và value
        Object Map được lặp theo các cặp (key, value), vòng for of trả về 1 mảng 2 phần tử (key, value) 
        cho mõi lần lặp - doc: new Map MDN
    */

    function render() {
        for(const [root,component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render();
        },

        connect(selector = state => state) {
            return component => (props, ...args) => 
                component(Object.assign({}, props, selector(state), ...args));

                /* Method Object.assign() coppy tất cả các thuộc tính đối tượng nguồn sang đối tượng đích
                    Trả về đối tượng đích đã sửa đổi
                    - Object.assign(target, ...sources)
                    - target parameter - áp dụng các thuộc tính của source, được trả về sau khi sửa đổi
                    - source parameter - chứa các thuộc tính muốn áp dụng
                    doc: Object.assign() MDN
                */
        },

        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }

}