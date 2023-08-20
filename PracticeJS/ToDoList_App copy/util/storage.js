const TO_DO_STORAGE = 'TODOS';

export default {

    get() {
        return JSON.parse(localStorage.getItem(TO_DO_STORAGE)) || [];
    }, 
    set(todos) {
        localStorage.setItem(TO_DO_STORAGE, JSON.stringify(todos));
    }
}