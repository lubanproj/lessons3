import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            activeIndex: '1'
        }
    },

    mutations: {
        changeActive(state, index) {
            state.activeIndex = index;
        }
    }
});

export default store;
