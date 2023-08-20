export default function html([firts, ...string], ...value) {
    return value.reduce((acc, curr) => acc.concat(curr, string.shift()), [firts])
    .filter(x => x && x !== true || x === 0)
    .join('');
};

export function createStore(reducer) {
    let state = reducer()

    const roots = new Map(); 
    /*  Map.prototype.set(key, value)
        The key of the element to add to the Map object. The key may be any JavaScript type
        The value of the element to add to the Map object. The key may be any JavaScript type
    */

    function render() {
        // for of trả về một mảng 2 phẩn tử [key, value] cho mỗi lần lặp
        for(const[root, component] of roots) {
            const output = component()
            root.innerHTML = output;
        }
    }

    return {

        // nhận view và đẩy ra root
        attach(component, root) { // enhanced object literals
            roots.set(root, component);
            render()
        }, 
        
        // đẩy dữ liệu từ store vào view
        connect(selector = state => state) { // lấy state làm giá trị mặc định cho selector
            return component => (props, ...args) => 
            // Object.assign() sao chép tất cả các thuộc tính từ một hoặc nhiều đối tượng
                component(Object.assign({}, props, selector(state), ...args))
        }, 

        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}